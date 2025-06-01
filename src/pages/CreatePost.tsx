import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Upload, X } from 'lucide-react';
import Footer from '@/components/Footer';
import type { Database } from '@/integrations/supabase/types';

type AnimalType = Database['public']['Enums']['animal_type'];

interface Location {
  id: string;
  city: string;
  state: string;
}

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [animalType, setAnimalType] = useState<AnimalType | ''>('');
  const [locationId, setLocationId] = useState('');
  const [mainPhoto, setMainPhoto] = useState<File | null>(null);
  const [additionalPhotos, setAdditionalPhotos] = useState<File[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingLocations, setLoadingLocations] = useState(true);

  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    const { data, error } = await supabase
      .from('locations')
      .select('*')
      .order('state', { ascending: true })
      .order('city', { ascending: true });

    if (error) {
      toast({
        title: 'Erro ao carregar localizações',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      setLocations(data || []);
    }
    setLoadingLocations(false);
  };

  const handleMainPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMainPhoto(file);
    }
  };

  const handleAdditionalPhotosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (additionalPhotos.length + files.length <= 4) {
      setAdditionalPhotos([...additionalPhotos, ...files]);
    } else {
      toast({
        title: 'Limite de fotos',
        description: 'Você pode adicionar no máximo 4 fotos adicionais',
        variant: 'destructive',
      });
    }
  };

  const removeAdditionalPhoto = (index: number) => {
    setAdditionalPhotos(additionalPhotos.filter((_, i) => i !== index));
  };

  const uploadPhoto = async (file: File, path: string) => {
    const { data, error } = await supabase.storage
      .from('posts')
      .upload(path, file);

    if (error) throw error;

    const { data: { publicUrl } } = supabase.storage
      .from('posts')
      .getPublicUrl(path);

    return publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: 'Erro',
        description: 'Você precisa estar logado para criar uma publicação',
        variant: 'destructive',
      });
      return;
    }

    if (!mainPhoto) {
      toast({
        title: 'Erro',
        description: 'É necessário adicionar pelo menos uma foto principal',
        variant: 'destructive',
      });
      return;
    }

    if (!animalType) {
      toast({
        title: 'Erro',
        description: 'É necessário selecionar o tipo de animal',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      // Upload da foto principal
      const mainPhotoPath = `${user.id}/${Date.now()}-main-${mainPhoto.name}`;
      const mainPhotoUrl = await uploadPhoto(mainPhoto, mainPhotoPath);

      // Upload das fotos adicionais
      const additionalPhotoUrls = [];
      for (let i = 0; i < additionalPhotos.length; i++) {
        const file = additionalPhotos[i];
        const path = `${user.id}/${Date.now()}-additional-${i}-${file.name}`;
        const url = await uploadPhoto(file, path);
        additionalPhotoUrls.push(url);
      }

      // Criar a publicação
      const { error } = await supabase
        .from('posts')
        .insert({
          title,
          description,
          animal_type: animalType as AnimalType,
          location_id: locationId,
          user_id: user.id,
          main_photo_url: mainPhotoUrl,
          additional_photos: additionalPhotoUrls,
        });

      if (error) throw error;

      toast({
        title: 'Publicação criada com sucesso!',
        description: 'Sua publicação foi criada e está disponível para visualização.',
      });

      navigate('/publicacoes');
    } catch (error: any) {
      toast({
        title: 'Erro ao criar publicação',
        description: error.message,
        variant: 'destructive',
      });
    }

    setLoading(false);
  };

  if (loadingLocations) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card>
            <CardHeader>
              <CardTitle>Criar Nova Publicação</CardTitle>
              <CardDescription>
                Preencha as informações sobre o pet perdido ou encontrado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="title">Nome do pet</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="mt-1"
                    placeholder="Ex: Rex, Mimi, Bolinha..."
                  />
                </div>

                <div>
                  <Label htmlFor="description">Descrição (máximo 140 caracteres)</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    maxLength={140}
                    className="mt-1"
                    placeholder="Descreva características do pet, onde foi visto pela última vez, etc."
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {description.length}/140 caracteres
                  </p>
                </div>

                <div>
                  <Label htmlFor="animalType">Tipo de animal</Label>
                  <Select value={animalType} onValueChange={(value: AnimalType) => setAnimalType(value)} required>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione o tipo de animal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dog">Cachorro</SelectItem>
                      <SelectItem value="cat">Gato</SelectItem>
                      <SelectItem value="bird">Pássaro</SelectItem>
                      <SelectItem value="rabbit">Coelho</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="location">Localização</Label>
                  <Select value={locationId} onValueChange={setLocationId} required>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione a cidade" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location.id} value={location.id}>
                          {location.city}, {location.state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="mainPhoto">Foto principal *</Label>
                  <div className="mt-1">
                    <input
                      id="mainPhoto"
                      type="file"
                      accept="image/*"
                      onChange={handleMainPhotoChange}
                      required
                      className="hidden"
                    />
                    <label
                      htmlFor="mainPhoto"
                      className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-green-500"
                    >
                      {mainPhoto ? (
                        <div className="text-center">
                          <p className="text-sm text-gray-600">{mainPhoto.name}</p>
                          <p className="text-xs text-green-600">Clique para alterar</p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">Clique para adicionar a foto principal</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                <div>
                  <Label htmlFor="additionalPhotos">Fotos adicionais (máximo 4)</Label>
                  <div className="mt-1">
                    <input
                      id="additionalPhotos"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleAdditionalPhotosChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="additionalPhotos"
                      className="flex items-center justify-center w-full h-20 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-green-500"
                    >
                      <div className="text-center">
                        <Upload className="h-6 w-6 text-gray-400 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">Adicionar fotos extras</p>
                      </div>
                    </label>
                  </div>

                  {additionalPhotos.length > 0 && (
                    <div className="mt-2 space-y-2">
                      {additionalPhotos.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                          <span className="text-sm">{file.name}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeAdditionalPhoto(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={loading}
                >
                  {loading ? 'Criando publicação...' : 'Criar publicação'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;
