
import { Search, Heart, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Achorro
          </h1>
          <p className="text-2xl md:text-3xl text-green-600 font-medium mb-8">
            Encontre seu pet!
          </p>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            A comunidade brasileira dedicada a reunir pets perdidos com suas famílias. 
            Juntos, criamos esperança e construímos histórias de reencontro.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative flex items-center">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6 z-10" />
              <input
                type="text"
                placeholder="Digite o nome do seu pet..."
                className="w-full pl-12 pr-32 py-4 text-lg border-2 border-gray-200 rounded-full focus:border-green-500 focus:outline-none shadow-lg"
              />
              <Link to="/publicacoes" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Button className="bg-green-600 hover:bg-green-700 rounded-full px-8">
                  Buscar
                </Button>
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link to="/criar-publicacao">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                Publicar pet perdido
              </Button>
            </Link>
            <Link to="/publicacoes">
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-lg px-8 py-3">
                Ver todas as publicações
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Resultados que transformam vidas
            </h2>
            <p className="text-xl text-gray-600">
              Cada número representa uma família reunida e um coração feliz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">1,234</div>
              <div className="text-lg font-medium text-gray-700">Pets reunidos</div>
              <div className="text-sm text-gray-500 mt-1">com suas famílias</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">45,667</div>
              <div className="text-lg font-medium text-gray-700">Membros ativos</div>
              <div className="text-sm text-gray-500 mt-1">em nossa comunidade</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">8,923</div>
              <div className="text-lg font-medium text-gray-700">Publicações ativas</div>
              <div className="text-sm text-gray-500 mt-1">em busca de reencontro</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">156</div>
              <div className="text-lg font-medium text-gray-700">Cidades atendidas</div>
              <div className="text-sm text-gray-500 mt-1">em todo o Brasil</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
