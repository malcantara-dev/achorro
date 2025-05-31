
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { Database } from '@/integrations/supabase/types';

type AnimalType = Database['public']['Enums']['animal_type'];
type PostStatus = Database['public']['Enums']['post_status'];

interface Post {
  id: string;
  title: string;
  description: string;
  animal_type: AnimalType;
  status: PostStatus;
  main_photo_url: string;
  created_at: string;
  locations: {
    city: string;
    state: string;
  };
  profiles: {
    name: string;
  };
}

interface Location {
  id: string;
  city: string;
  state: string;
}

const Publications = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAnimalType, setSelectedAnimalType] = useState<AnimalType | ''>('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { toast } = useToast();

  const postsPerPage = 20;

  useEffect(() => {
    fetchLocations();
    fetchPosts();
  }, [currentPage, searchTerm, selectedAnimalType, selectedLocation]);

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
  };

  const fetchPosts = async () => {
    setLoading(true);
    
    let query = supabase
      .from('posts')
      .select(`
        *,
        locations (city, state),
        profiles (name)
      `)
      .order('created_at', { ascending: false });

    if (searchTerm) {
      query = query.ilike('title', `%${searchTerm}%`);
    }

    if (selectedAnimalType) {
      query = query.eq('animal_type', selectedAnimalType);
    }

    if (selectedLocation) {
      query = query.eq('location_id', selectedLocation);
    }

    const from = (currentPage - 1) * postsPerPage;
    const to = from + postsPerPage - 1;

    const { data, error, count } = await query
      .range(from, to);

    if (error) {
      toast({
        title: 'Erro ao carregar publicações',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      setPosts(data || []);
      setTotalPages(Math.ceil((count || 0) / postsPerPage));
    }

    setLoading(false);
  };

  const getStatusBadge = (status: PostStatus) => {
    const statusConfig = {
      lost: { label: 'Perdido', className: 'bg-red-100 text-red-800' },
      found: { label: 'Encontrado', className: 'bg-yellow-100 text-yellow-800' },
      owner_found: { label: 'Dono Encontrado', className: 'bg-green-100 text-green-800' },
    };

    const config = statusConfig[status];
    return (
      <Badge className={config?.className || 'bg-gray-100 text-gray-800'}>
        {config?.label || status}
      </Badge>
    );
  };

  const getAnimalTypeLabel = (type: AnimalType) => {
    const types = {
      dog: 'Cachorro',
      cat: 'Gato',
      bird: 'Pássaro',
      rabbit: 'Coelho',
      other: 'Outro',
    };
    return types[type] || type;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedAnimalType('');
    setSelectedLocation('');
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Publicações</h1>
        <p className="text-gray-600">
          Encontre pets perdidos ou ajude a reunir famílias com seus companheiros
        </p>
      </div>

      {/* Filtros */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar por nome do pet..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={selectedAnimalType} onValueChange={(value: AnimalType | '') => setSelectedAnimalType(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Tipo de animal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dog">Cachorro</SelectItem>
              <SelectItem value="cat">Gato</SelectItem>
              <SelectItem value="bird">Pássaro</SelectItem>
              <SelectItem value="rabbit">Coelho</SelectItem>
              <SelectItem value="other">Outro</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Localização" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location.id} value={location.id}>
                  {location.city}, {location.state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button onClick={resetFilters} variant="outline">
            Limpar filtros
          </Button>
        </div>
      </div>

      {/* Lista de publicações */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={post.main_photo_url || '/placeholder.svg'}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg truncate">{post.title}</h3>
                    {getStatusBadge(post.status)}
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <span className="font-medium">
                        {getAnimalTypeLabel(post.animal_type)}
                      </span>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{post.locations.city}, {post.locations.state}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{formatDate(post.created_at)}</span>
                      </div>
                      <span className="text-xs">por {post.profiles.name}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Nenhuma publicação encontrada com os filtros selecionados.
              </p>
            </div>
          )}

          {/* Paginação */}
          {totalPages > 1 && (
            <div className="flex justify-center space-x-2">
              <Button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                variant="outline"
              >
                Anterior
              </Button>
              
              <span className="flex items-center px-4 py-2">
                Página {currentPage} de {totalPages}
              </span>
              
              <Button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                variant="outline"
              >
                Próxima
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Publications;
