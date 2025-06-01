
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Política de Privacidade
            </h1>
            <p className="text-xl text-gray-600">
              Última atualização: Janeiro de 2025
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Informações que Coletamos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  No Achorro, coletamos apenas as informações essenciais para fornecer nossos serviços:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Informações de conta (email, nome, senha criptografada)</li>
                  <li>Dados das publicações (fotos, descrições, localização dos pets)</li>
                  <li>Informações de uso básicas para melhorar nossos serviços</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Como Usamos suas Informações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Utilizamos suas informações exclusivamente para:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Facilitar a reunião de pets perdidos com suas famílias</li>
                  <li>Permitir que outros usuários vejam e respondam às suas publicações</li>
                  <li>Enviar notificações importantes sobre sua conta</li>
                  <li>Melhorar nossos serviços e experiência do usuário</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Compartilhamento de Informações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Nunca vendemos suas informações pessoais. Compartilhamos dados apenas quando:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Você publica informações sobre pets (visíveis publicamente)</li>
                  <li>Requerido por lei ou autoridades competentes</li>
                  <li>Para proteger a segurança dos usuários e animais</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Segurança dos Dados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Implementamos medidas de segurança robustas para proteger suas informações:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Criptografia de dados em trânsito e em repouso</li>
                  <li>Autenticação segura e senhas criptografadas</li>
                  <li>Acesso restrito aos dados por nossa equipe</li>
                  <li>Monitoramento contínuo de segurança</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Seus Direitos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Você tem o direito de:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Acessar, corrigir ou excluir suas informações pessoais</li>
                  <li>Exportar seus dados em formato legível</li>
                  <li>Solicitar a exclusão completa de sua conta</li>
                  <li>Optar por não receber comunicações não essenciais</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Cookies e Tecnologias Similares</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Utilizamos cookies essenciais para:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Manter você logado em sua conta</li>
                  <li>Lembrar suas preferências de navegação</li>
                  <li>Garantir a segurança da plataforma</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Alterações nesta Política</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Podemos atualizar esta política ocasionalmente. Notificaremos sobre mudanças 
                  significativas através do email ou da plataforma. O uso continuado dos nossos 
                  serviços após as alterações constitui aceite dos novos termos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Para questões sobre privacidade ou exercer seus direitos, entre em contato:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Email: privacidade@achorro.com</li>
                  <li>Através da nossa página de contato</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  Responderemos todas as solicitações em até 30 dias úteis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
