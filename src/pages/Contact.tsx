
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Mail, Clock, Heart } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert({
          name,
          email,
          subject,
          message,
        });

      if (error) throw error;

      toast({
        title: 'Mensagem enviada com sucesso!',
        description: 'Responderemos em até 48 horas.',
      });

      // Limpar formulário
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error: any) {
      toast({
        title: 'Erro ao enviar mensagem',
        description: error.message,
        variant: 'destructive',
      });
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Entre em contato</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Estamos aqui para ajudar! Envie sua mensagem e responderemos o mais rápido possível
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Formulário de contato */}
        <Card>
          <CardHeader>
            <CardTitle>Envie sua mensagem</CardTitle>
            <CardDescription>
              Preencha o formulário abaixo e entraremos em contato
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <Label htmlFor="subject">Assunto</Label>
                <Input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="mt-1"
                  placeholder="Sobre o que você gostaria de falar?"
                />
              </div>

              <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 min-h-[120px]"
                  placeholder="Digite sua mensagem aqui..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={loading}
              >
                {loading ? 'Enviando...' : 'Enviar mensagem'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Informações de contato */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold">Tempo de resposta</h3>
              </div>
              <p className="text-gray-600">
                Respondemos todas as mensagens em até <strong>48 horas</strong>. 
                Para casos urgentes envolvendo pets perdidos, damos prioridade na resposta.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold">Email direto</h3>
              </div>
              <p className="text-gray-600 mb-2">
                Você também pode nos enviar um email diretamente:
              </p>
              <a
                href="mailto:contato@achorro.com.br"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                contato@achorro.com.br
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold">Nossa missão</h3>
              </div>
              <p className="text-gray-600">
                Estamos aqui para ajudar você a encontrar seu pet ou melhorar 
                nossa plataforma. Cada mensagem é importante para nós!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                Casos urgentes
              </h3>
              <p className="text-green-700 text-sm">
                Se você perdeu seu pet recentemente, não espere! Crie uma publicação 
                imediatamente e nossa comunidade ajudará na busca. Para dúvidas 
                sobre como usar a plataforma, este formulário é o meio ideal.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
