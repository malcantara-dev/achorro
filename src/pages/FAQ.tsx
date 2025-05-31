
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Como criar uma publicação para um pet perdido?',
      answer: 'Para criar uma publicação, você precisa estar logado em sua conta. Clique em "Criar Publicação" no menu, preencha as informações do pet (nome, descrição, tipo de animal, localização) e adicione pelo menos uma foto. A publicação será imediatamente visível para outros usuários.',
    },
    {
      question: 'É gratuito usar o Achorro?',
      answer: 'Sim! O Achorro é completamente gratuito. Nossa missão é ajudar a reunir pets com suas famílias, e acreditamos que isso não deve ter custo algum.',
    },
    {
      question: 'Posso editar minha publicação depois de criada?',
      answer: 'Sim, você pode editar suas próprias publicações a qualquer momento através do seu perfil. Você pode atualizar informações, adicionar novas fotos ou marcar o pet como encontrado.',
    },
    {
      question: 'Como marco que encontrei meu pet?',
      answer: 'Acesse "Meu Perfil" e encontre sua publicação. Clique em "Editar" e altere o status para "Dono Encontrado". Isso ajuda outros usuários a saberem que o caso foi resolvido.',
    },
    {
      question: 'Como posso ajudar a encontrar pets perdidos?',
      answer: 'Você pode ajudar compartilhando as publicações nas suas redes sociais, ficando atento aos pets da sua região e comentando nas publicações se tiver informações relevantes.',
    },
    {
      question: 'Posso publicar sobre pets encontrados?',
      answer: 'Sim! Se você encontrou um pet, pode criar uma publicação marcando o status como "Encontrado". Isso ajuda os donos a localizarem seus companheiros.',
    },
    {
      question: 'Como funciona o sistema de comentários?',
      answer: 'Qualquer usuário logado pode comentar nas publicações para fornecer informações, fazer perguntas ou oferecer ajuda. Os donos das publicações recebem notificações sobre novos comentários.',
    },
    {
      question: 'Que tipos de fotos devo publicar?',
      answer: 'Publique fotos claras e recentes do pet. É obrigatória uma foto principal, mas você pode adicionar até 4 fotos extras para mostrar diferentes ângulos e características do animal.',
    },
    {
      question: 'Posso excluir minha publicação?',
      answer: 'Sim, você pode excluir suas publicações através do seu perfil, mas recomendamos marcar como "Dono Encontrado" ao invés de excluir, pois isso pode ajudar outros usuários com casos similares.',
    },
    {
      question: 'Como entro em contato com quem publicou?',
      answer: 'Você pode comentar na publicação ou usar as informações de contato que o usuário escolheu compartilhar. Sempre seja respeitoso e forneça informações relevantes.',
    },
    {
      question: 'O Achorro está disponível em todo o Brasil?',
      answer: 'Sim! O Achorro atende todo o território nacional. Temos usuários cadastrados em todas as regiões do país.',
    },
    {
      question: 'Como denuncio uma publicação inadequada?',
      answer: 'Entre em contato conosco através da página de contato informando o link da publicação e o motivo da denúncia. Analisamos todos os casos rapidamente.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Perguntas Frequentes
        </h1>
        <p className="text-xl text-gray-600">
          Tire suas dúvidas sobre como usar o Achorro
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:text-green-600 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-12 text-center bg-green-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          Não encontrou sua resposta?
        </h2>
        <p className="text-gray-700 mb-6">
          Nossa equipe está sempre pronta para ajudar! Entre em contato conosco 
          e responderemos em até 48 horas.
        </p>
        <a
          href="/contato"
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
        >
          Entrar em contato
        </a>
      </div>
    </div>
  );
};

export default FAQ;
