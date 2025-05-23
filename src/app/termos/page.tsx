import React from 'react';

const TermosDeUso = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <a href="/">
            <div className="logo-icon">
              <img src="/assets/icons/paw.png" alt="Achorro Logo" />
            </div>
            <div className="logo-text">
              <h1 className="logo-title">ACHORRO</h1>
              <p className="logo-subtitle">ache seu pet!</p>
            </div>
          </a>
        </div>
        <nav>
          <a href="/pages/cadastro">Cadastro</a>
          <a href="/pages/publicacoes">Publicações</a>
          <a href="/pages/nova-postagem">
            <button>Criar nova postagem</button>
          </a>
        </nav>
      </header>

      <div className="pagina-banner termos-banner">
        <div className="banner-conteudo">
          <h1>Termos de Uso</h1>
          <p>Políticas e condições para utilização da plataforma Achorro</p>
        </div>
      </div>

      <div className="pagina-container">
        <div className="termos-conteudo">
          <section id="introducao" className="termos-secao">
            <h2>1. Introdução</h2>
            <p>
              Bem-vindo ao Achorro! Estes Termos de Uso ("Termos") regem seu
              acesso e uso do site Achorro, aplicativos e serviços
              disponibilizados pela plataforma (coletivamente, o "Serviço").
            </p>
            <p>
              Ao acessar ou utilizar nosso Serviço, você concorda em ficar
              vinculado a estes Termos. Se você não concordar com qualquer parte
              destes Termos, não poderá acessar ou utilizar nosso Serviço.
            </p>
            <p>
              Recomendamos que você leia estes Termos cuidadosamente antes de
              começar a usar o Achorro. Estes Termos constituem um acordo legal
              entre você e o Achorro.
            </p>
          </section>

          <section id="uso-servico" className="termos-secao">
            <h2>2. Uso do Serviço</h2>
            <p>
              O Achorro é uma plataforma que permite aos usuários publicar
              informações sobre pets perdidos e encontrados, com o objetivo de
              facilitar o reencontro entre animais e seus tutores.
            </p>
            <p>
              Você concorda em usar o Serviço apenas para os fins permitidos por
              estes Termos e quaisquer leis, regulamentos ou práticas ou
              diretrizes geralmente aceitas nas jurisdições relevantes.
            </p>
            <p>
              Você concorda em não se envolver em qualquer das seguintes
              atividades proibidas:
            </p>
            <ul>
              <li>Usar o Serviço para fins ilegais ou não autorizados;</li>
              <li>
                Publicar informações falsas ou enganosas sobre pets perdidos ou
                encontrados;
              </li>
              <li>Tentar interferir no funcionamento adequado do Serviço;</li>
              <li>
                Contornar medidas que possamos usar para prevenir ou restringir o
                acesso ao Serviço;
              </li>
              <li>Assediar, intimidar ou ameaçar outros usuários;</li>
              <li>
                Publicar conteúdo que seja ofensivo, difamatório, obsceno ou de
                outra forma inadequado.
              </li>
            </ul>
          </section>

          <section id="cadastro" className="termos-secao">
            <h2>3. Cadastro e Conta</h2>
            <p>
              Para acessar determinados recursos do Serviço, você pode precisar
              criar uma conta. Você é responsável por manter a confidencialidade
              de suas credenciais de conta e por todas as atividades que ocorrem
              sob sua conta.
            </p>
            <p>
              Ao se cadastrar, você concorda em fornecer informações precisas,
              atuais e completas. Você também concorda em atualizar suas
              informações conforme necessário para mantê-las precisas, atuais e
              completas.
            </p>
            <p>
              Você é o único responsável por qualquer atividade que ocorra em sua
              conta e deve notificar imediatamente o Achorro sobre qualquer uso
              não autorizado de sua conta ou qualquer outra violação de segurança.
            </p>
            <p>
              O Achorro reserva-se o direito de encerrar sua conta a qualquer
              momento, por qualquer motivo, incluindo, mas não se limitando a,
              violação destes Termos.
            </p>
          </section>

          <section id="conteudo" className="termos-secao">
            <h2>4. Conteúdo do Usuário</h2>
            <p>
              Nosso Serviço permite que você publique, vincule, armazene,
              compartilhe e disponibilize certas informações, textos, gráficos,
              vídeos ou outros materiais ("Conteúdo"). Você é responsável pelo
              Conteúdo que publica no Serviço, incluindo sua legalidade,
              confiabilidade e adequação.
            </p>
            <p>
              Ao publicar Conteúdo no Serviço, você concede ao Achorro o direito e
              a licença para usar, modificar, executar publicamente, exibir
              publicamente, reproduzir e distribuir esse Conteúdo em e através do
              Serviço. Você mantém quaisquer direitos sobre o Conteúdo que
              publica.
            </p>
            <p>Você declara e garante que:</p>
            <ul>
              <li>
                O Conteúdo é seu ou você tem o direito de usá-lo e conceder-nos os
                direitos e a licença conforme previsto nestes Termos;
              </li>
              <li>
                A publicação do seu Conteúdo no Serviço não viola os direitos de
                privacidade, direitos de publicidade, direitos autorais, direitos
                contratuais ou quaisquer outros direitos de qualquer pessoa.
              </li>
            </ul>
            <p>
              Reservamo-nos o direito de remover qualquer Conteúdo do Serviço a
              nosso critério, sem aviso prévio, por qualquer motivo, incluindo,
              mas não se limitando a, se acreditarmos que tal Conteúdo viola estes
              Termos.
            </p>
          </section>

          <section id="privacidade" className="termos-secao">
            <h2>5. Política de Privacidade</h2>
            <p>
              Sua privacidade é importante para nós. Nossa Política de
              Privacidade, que está incorporada a estes Termos por referência,
              explica como coletamos, usamos, protegemos e divulgamos suas
              informações pessoais. Ao usar nosso Serviço, você concorda com nossa
              coleta e uso de informações de acordo com nossa Política de
              Privacidade.
            </p>
            <p>Resumidamente, coletamos os seguintes tipos de informações:</p>
            <ul>
              <li>
                Informações que você nos fornece diretamente (como nome, e-mail,
                telefone);
              </li>
              <li>Informações sobre como você usa nosso Serviço;</li>
              <li>
                Informações de dispositivos e navegadores que você usa para
                acessar nosso Serviço.
              </li>
            </ul>
            <p>Usamos essas informações para:</p>
            <ul>
              <li>Fornecer, manter e melhorar nosso Serviço;</li>
              <li>Comunicar-nos com você sobre o Serviço;</li>
              <li>Personalizar sua experiência;</li>
              <li>Proteger contra atividades fraudulentas ou ilegais.</li>
            </ul>
            <p>
              Não vendemos suas informações pessoais a terceiros. Compartilhamos
              informações apenas nas circunstâncias descritas em nossa Política de
              Privacidade.
            </p>
          </section>

          <section id="direitos" className="termos-secao">
            <h2>6. Direitos Autorais</h2>
            <p>
              O Serviço e seu conteúdo original, recursos e funcionalidades são e
              permanecerão propriedade exclusiva do Achorro e seus licenciadores.
              O Serviço é protegido por direitos autorais, marcas registradas e
              outras leis do Brasil e de outros países.
            </p>
            <p>
              Nosso logotipo e nome são marcas registradas do Achorro. Você não
              deve usar essas marcas sem o consentimento prévio por escrito do
              Achorro. Todos os outros nomes, logotipos, designs de produtos,
              nomes de recursos, marcas registradas ou marcas de serviço que
              aparecem no Serviço são propriedade de seus respectivos
              proprietários.
            </p>
          </section>

          <section id="limitacoes" className="termos-secao">
            <h2>7. Limitações de Responsabilidade</h2>
            <p>
              Em nenhuma circunstância o Achorro, seus diretores, funcionários,
              parceiros, agentes, fornecedores ou afiliados serão responsáveis por
              quaisquer danos indiretos, incidentais, especiais, consequenciais ou
              punitivos, incluindo, sem limitação, perda de lucros, dados, uso,
              boa vontade ou outras perdas intangíveis, resultantes de:
            </p>
            <ul>
              <li>
                Seu acesso ou uso ou incapacidade de acessar ou usar o Serviço;
              </li>
              <li>Qualquer conduta ou conteúdo de terceiros no Serviço;</li>
              <li>Qualquer conteúdo obtido do Serviço;</li>
              <li>
                Acesso não autorizado, uso ou alteração de suas transmissões ou
                conteúdo.
              </li>
            </ul>
            <p>
              O Achorro não garante que o Serviço estará disponível em todos os
              momentos, sem interrupções ou erros. Não garantimos que os
              resultados que possam ser obtidos do uso do Serviço serão precisos
              ou confiáveis.
            </p>
          </section>

          <section id="modificacoes" className="termos-secao">
            <h2>8. Modificações dos Termos</h2>
            <p>
              Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou
              substituir estes Termos a qualquer momento. Se uma revisão for
              material, tentaremos fornecer um aviso com pelo menos 30 dias de
              antecedência antes que quaisquer novos termos entrem em vigor.
            </p>
            <p>
              O que constitui uma alteração material será determinado a nosso
              exclusivo critério. Ao continuar a acessar ou usar nosso Serviço
              após essas revisões se tornarem efetivas, você concorda em ficar
              vinculado aos termos revisados. Se você não concordar com os novos
              termos, deixe de usar o Serviço.
            </p>
          </section>

          <section id="contato-termos" className="termos-secao">
            <h2>9. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre estes Termos, entre em contato
              conosco:
            </p>
            <ul className="contato-lista">
              <li>
                Por e-mail:
                <a href="mailto:termos@achorro.com.br">termos@achorro.com.br</a>
              </li>
              <li>Por telefone: (11) 1234-5678</li>
              <li>
                Por correio: Rua dos Animais, 123 - São Paulo, SP - CEP 01234-567
              </li>
            </ul>
          </section>

          <div className="termos-atualizacao">
            <p>Última atualização: 15 de março de 2023</p>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-links">
          <a href="/pages/termos">Termos de Uso</a>
          <a href="/pages/sobre">Sobre nós</a>
          <a href="/pages/contato">Contato</a>
        </div>
      </footer>
    </div>
  );
};

export default TermosDeUso;
