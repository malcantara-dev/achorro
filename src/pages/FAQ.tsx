
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Footer from '@/components/Footer';

const faqs = [
  {
    question: "Como posso cadastrar um pet perdido?",
    answer: "Para cadastrar um pet perdido, faça login na sua conta e clique em 'Criar publicação'. Preencha todas as informações do seu pet, adicione fotos e escolha a localização onde ele foi visto pela última vez."
  },
  {
    question: "É grátis usar o Achorro?",
    answer: "Sim! O Achorro é completamente gratuito. Nossa missão é ajudar a reunir pets com suas famílias sem custo algum."
  },
  {
    question: "Como posso ajudar a encontrar um pet perdido?",
    answer: "Você pode navegar pelas publicações na seção 'Publicações' e, se reconhecer algum pet, entre em contato com o dono através das informações disponíveis na publicação."
  },
  {
    question: "Posso editar ou excluir minha publicação?",
    answer: "Sim, você pode gerenciar suas publicações através do seu perfil. Lá você pode editar informações, adicionar novas fotos ou marcar como 'Encontrado' quando seu pet retornar."
  },
  {
    question: "Como funciona o sistema de notificações?",
    answer: "Quando alguém entra em contato sobre sua publicação ou quando há atividade relevante, você receberá notificações por email (se habilitado em suas configurações)."
  },
  {
    question: "Posso publicar sobre pets encontrados?",
    answer: "Sim! Se você encontrou um pet na rua, pode criar uma publicação marcando como 'Encontrado' para ajudar a localizar o dono."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
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
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
