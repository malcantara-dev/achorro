
import { Search, Heart, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-orange-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-gray-900">Achorro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Publicações</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Sobre nós</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">FAQ</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Contato</a>
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                Entrar
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600">
                Criar conta
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Achorro
          </h1>
          <p className="text-2xl md:text-3xl text-orange-600 font-medium mb-8">
            Find your pet!
          </p>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            A comunidade brasileira dedicada a reunir pets perdidos com suas famílias. 
            Juntos, criamos esperança e construímos histórias de reencontro.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
              <input
                type="text"
                placeholder="Digite o nome do seu pet..."
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-full focus:border-orange-500 focus:outline-none shadow-lg"
              />
              <Button className="absolute right-2 top-2 bg-orange-500 hover:bg-orange-600 rounded-full px-8">
                Buscar
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-3">
              Publicar pet perdido
            </Button>
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-lg px-8 py-3">
              Ver todas as publicações
            </Button>
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
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">8,923</div>
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
