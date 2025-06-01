
import { Heart, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold">Achorro</span>
            </div>
            <p className="text-gray-400 mb-4">
              A maior comunidade brasileira dedicada a reunir pets perdidos com suas famílias. 
              Desde 2022, conectando corações e criando histórias de esperança.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/publicacoes" className="text-gray-400 hover:text-green-500 transition-colors">Publicações</Link></li>
              <li><Link to="/meu-perfil" className="text-gray-400 hover:text-green-500 transition-colors">Meu perfil</Link></li>
              <li><Link to="/criar-conta" className="text-gray-400 hover:text-green-500 transition-colors">Criar conta</Link></li>
              <li><Link to="/entrar" className="text-gray-400 hover:text-green-500 transition-colors">Entrar</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-400 hover:text-green-500 transition-colors">FAQ</Link></li>
              <li><Link to="/sobre-nos" className="text-gray-400 hover:text-green-500 transition-colors">Sobre nós</Link></li>
              <li><Link to="/contato" className="text-gray-400 hover:text-green-500 transition-colors">Contato</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Política de privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Achorro. Todos os direitos reservados. Feito com ❤️ para reunir famílias.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
