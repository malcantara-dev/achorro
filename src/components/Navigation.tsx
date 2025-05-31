
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    await signOut();
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">Achorro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/publicacoes"
              className={`${
                isActive('/publicacoes') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              } transition-colors`}
            >
              Publicações
            </Link>
            <Link
              to="/sobre-nos"
              className={`${
                isActive('/sobre-nos') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              } transition-colors`}
            >
              Sobre nós
            </Link>
            <Link
              to="/faq"
              className={`${
                isActive('/faq') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              } transition-colors`}
            >
              FAQ
            </Link>
            <Link
              to="/contato"
              className={`${
                isActive('/contato') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              } transition-colors`}
            >
              Contato
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/criar-publicacao">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Criar Publicação
                  </Button>
                </Link>
                <Link to="/meu-perfil">
                  <Button variant="outline">Meu Perfil</Button>
                </Link>
                <Button variant="ghost" onClick={handleSignOut}>
                  Sair
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/entrar">
                  <Button variant="ghost">Entrar</Button>
                </Link>
                <Link to="/criar-conta">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Criar conta
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/publicacoes"
                className="block px-3 py-2 text-gray-700 hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Publicações
              </Link>
              <Link
                to="/sobre-nos"
                className="block px-3 py-2 text-gray-700 hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre nós
              </Link>
              <Link
                to="/faq"
                className="block px-3 py-2 text-gray-700 hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="/contato"
                className="block px-3 py-2 text-gray-700 hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>

              {user ? (
                <div className="space-y-1">
                  <Link
                    to="/criar-publicacao"
                    className="block px-3 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Criar Publicação
                    </Button>
                  </Link>
                  <Link
                    to="/meu-perfil"
                    className="block px-3 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button variant="outline" className="w-full">
                      Meu Perfil
                    </Button>
                  </Link>
                  <div className="px-3 py-2">
                    <Button variant="ghost" className="w-full" onClick={handleSignOut}>
                      Sair
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-1">
                  <Link
                    to="/entrar"
                    className="block px-3 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button variant="ghost" className="w-full">
                      Entrar
                    </Button>
                  </Link>
                  <Link
                    to="/criar-conta"
                    className="block px-3 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Criar conta
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
