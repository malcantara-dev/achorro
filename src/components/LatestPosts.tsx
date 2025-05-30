
import { MapPin, Calendar, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const LatestPosts = () => {
  const mockPosts = [
    {
      id: 1,
      title: "Luna",
      type: "Cachorro",
      location: "São Paulo, SP",
      description: "Cachorra pequeno porte, pelagem dourada, muito dócil. Fugiu durante passeio no parque.",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
      date: "2 dias atrás",
      status: "Pet perdido"
    },
    {
      id: 2,
      title: "Milo",
      type: "Gato",
      location: "Rio de Janeiro, RJ",
      description: "Gato siamês, olhos azuis, muito carinhoso. Saiu de casa na madrugada.",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop",
      date: "4 dias atrás",
      status: "Pet perdido"
    },
    {
      id: 3,
      title: "Bella",
      type: "Cachorro",
      location: "Belo Horizonte, MG",
      description: "Labrador dourado, porte grande, muito amigável. Perdida próximo ao shopping.",
      image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&h=300&fit=crop",
      date: "1 semana atrás",
      status: "Pet encontrado"
    },
    {
      id: 4,
      title: "Thor",
      type: "Cachorro",
      location: "Salvador, BA",
      description: "Pastor alemão, porte grande, pelagem escura. Muito protetor e leal.",
      image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=300&fit=crop",
      date: "3 dias atrás",
      status: "Pet perdido"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Publicações recentes
          </h2>
          <p className="text-xl text-gray-600">
            Ajude a espalhar a palavra e seja parte de uma história de reencontro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mockPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
                  post.status === 'Pet encontrado' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {post.status}
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{post.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {post.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-orange-600">{post.type}</span>
                  <Button size="sm" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                    Ver detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Ver todas as publicações
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
