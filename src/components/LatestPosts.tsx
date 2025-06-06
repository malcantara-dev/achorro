
import React, { useState, useEffect } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
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
}

const LatestPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchLatestPosts();
  }, []);

  const fetchLatestPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          id,
          title,
          description,
          animal_type,
          status,
          main_photo_url,
          created_at,
          locations!inner (
            city,
            state
          )
        `)
        .not('location_id', 'is', null)
        .order('created_at', { ascending: false })
        .limit(4);

      if (error) {
        console.log('Error fetching posts:', error);
        setPosts([]);
      } else {
        const typedPosts = data as unknown as Post[];
        setPosts(typedPosts || []);
      }
    } catch (error) {
      console.log('Error:', error);
      setPosts([]);
    }
    setLoading(false);
  };

  const getStatusBadge = (status: PostStatus) => {
    const statusConfig = {
      lost: { label: 'Pet perdido', className: 'bg-red-100 text-red-800' },
      found: { label: 'Pet encontrado', className: 'bg-yellow-100 text-yellow-800' },
      owner_found: { label: 'Dono encontrado', className: 'bg-green-100 text-green-800' },
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

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Publicações recentes
          </h2>
          <p className="text-xl text-gray-600">
            Ajude a espalhar a palavra e seja parte de uma história de reencontro
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <div className="relative">
                      <img 
                        src={post.main_photo_url || '/placeholder.svg'} 
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        {getStatusBadge(post.status)}
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{post.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          {post.locations.city}, {post.locations.state}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(post.created_at)}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-green-600">
                          {getAnimalTypeLabel(post.animal_type)}
                        </span>
                        <Link to={`/publicacoes/${post.id}`}>
                          <Button size="sm" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                            Ver detalhes
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-500">Nenhuma publicação encontrada ainda.</p>
                  <Link to="/criar-publicacao">
                    <Button className="mt-4 bg-green-600 hover:bg-green-700">
                      Seja o primeiro a publicar
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            <div className="text-center">
              <Link to="/publicacoes">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Ver todas as publicações
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LatestPosts;
