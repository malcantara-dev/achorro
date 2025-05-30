
import { PlusCircle, Search, MessageCircle, Heart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: PlusCircle,
      title: "Publique",
      description: "Crie uma publicação com fotos e informações do seu pet perdido"
    },
    {
      icon: Search,
      title: "Compartilhe",
      description: "Nossa comunidade ajuda a espalhar a informação por toda a região"
    },
    {
      icon: MessageCircle,
      title: "Conecte",
      description: "Receba comentários e mensagens de pessoas que podem ter visto seu pet"
    },
    {
      icon: Heart,
      title: "Reencontre",
      description: "Celebre o reencontro e inspire outras famílias a não desistir"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Como funciona
          </h2>
          <p className="text-xl text-gray-600">
            Um processo simples que já reuniu milhares de famílias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-orange-500" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
