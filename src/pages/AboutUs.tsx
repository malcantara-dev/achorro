
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, MapPin, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sobre nós</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Conectando corações e reunindo famílias com seus companheiros perdidos desde 2022
        </p>
      </div>

      <div className="prose max-w-none mb-12">
        <div className="bg-green-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Nossa História</h2>
          <p className="text-gray-700 mb-4">
            O Achorro nasceu da experiência pessoal de nossos fundadores, que um dia perderam seu querido cão de estimação. 
            Durante a busca desesperada, perceberam como era difícil encontrar uma plataforma centralizada e eficiente 
            para publicar informações sobre pets perdidos e conectar pessoas que poderiam ajudar.
          </p>
          <p className="text-gray-700">
            Desde então, criamos uma comunidade solidária que já ajudou centenas de famílias a se reencontrarem 
            com seus companheiros de quatro patas. Nossa missão é simples: usar a tecnologia para espalhar amor 
            e esperança, uma reunião de cada vez.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Nossa Missão</h3>
              <p className="text-gray-600">
                Facilitar o reencontro entre pets perdidos e suas famílias através de uma plataforma 
                simples, gratuita e acessível, construindo uma rede de solidariedade em todo o Brasil.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Nossa Visão</h3>
              <p className="text-gray-600">
                Ser a principal referência nacional em reunificação de pets perdidos, criando uma 
                comunidade onde nenhum animal fica perdido por muito tempo.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Nossos Valores</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Compaixão</h3>
            <p className="text-gray-600 text-sm">
              Entendemos a dor de perder um pet e trabalhamos com amor para ajudar cada família
            </p>
          </div>
          
          <div className="text-center">
            <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Comunidade</h3>
            <p className="text-gray-600 text-sm">
              Acreditamos no poder da união e colaboração para alcançar nossos objetivos
            </p>
          </div>
          
          <div className="text-center">
            <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Acessibilidade</h3>
            <p className="text-gray-600 text-sm">
              Nossa plataforma é gratuita e fácil de usar para pessoas de todas as idades
            </p>
          </div>
        </div>

        <Card className="bg-gray-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Nossos Números
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <p className="text-gray-600">Pets reunidos com suas famílias</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">2.000+</div>
                <p className="text-gray-600">Publicações ativas na plataforma</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">10.000+</div>
                <p className="text-gray-600">Usuários cadastrados</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Faça Parte da Nossa Missão</h2>
          <p className="text-gray-600 mb-6">
            Cada curtida, compartilhamento e comentário pode ser a chave para reunir uma família. 
            Juntos, podemos fazer a diferença na vida de milhares de pets e suas famílias.
          </p>
          <div className="flex justify-center">
            <Award className="h-16 w-16 text-green-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
