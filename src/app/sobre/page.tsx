import Image from 'next/image';
import Link from 'next/link';
import '../styles/styles.css';
import '../styles/paginas.css';

export default function SobreNos() {
  return (
    <>
      <header>
        <div className="logo">
          <Link href="/">
            <div className="logo-icon">
              <Image src="/assets/icons/paw.png" alt="|" width={32} height={32} />
            </div>
            <div className="logo-text">
              <h1 className="logo-title">ACHORRO</h1>
              <p className="logo-subtitle">ache seu pet!</p>
            </div>
          </Link>
        </div>
        <nav>
          <Link href="/pages/cadastro">Cadastro</Link>
          <Link href="/pages/publicacoes">Publicações</Link>
          <Link href="/pages/nova-postagem">
            <button>Criar nova postagem</button>
          </Link>
        </nav>
      </header>

      <div className="pagina-banner sobre-banner">
        <div className="banner-conteudo">
          <h1>Sobre Nós</h1>
          <p>
            Conheça nossa história e como ajudamos a reunir pets com suas famílias
          </p>
        </div>
      </div>

      <div className="pagina-container">
        <section className="sobre-secao">
          <h2>Nossa História</h2>
          <div className="sobre-grid">
            <div className="sobre-texto">
              <p>
                A plataforma Achorro nasceu em 2020, durante a pandemia, quando
                notamos um aumento significativo no número de pets perdidos em
                nossa cidade. Um grupo de amigos apaixonados por animais decidiu
                criar uma solução tecnológica para ajudar a reunir esses animais
                com suas famílias.
              </p>
              <p>
                O que começou como um simples grupo no WhatsApp rapidamente
                cresceu e se transformou em uma plataforma completa, com milhares
                de usuários ativos em todo o Brasil. Hoje, o Achorro é referência
                nacional quando o assunto é encontrar pets perdidos.
              </p>
            </div>
            <div className="sobre-imagem">
              <Image
                src="/assets/images/fundador.jpg"
                alt="Fundadores do Achorro"
                width={400}
                height={300}
              />
            </div>
          </div>
        </section>

        <section className="sobre-secao">
          <h2>Nossa Missão</h2>
          <div className="missao-valores">
            <div className="missao-card">
              <div className="icone">🔍</div>
              <h3>Missão</h3>
              <p>
                Reunir pets perdidos com suas famílias através de tecnologia e
                mobilização comunitária, reduzindo o sofrimento de animais e
                tutores.
              </p>
            </div>
            <div className="missao-card">
              <div className="icone">👁️</div>
              <h3>Visão</h3>
              <p>
                Ser a maior e mais eficiente plataforma de busca de pets perdidos
                da América Latina, com presença em todas as cidades brasileiras.
              </p>
            </div>
            <div className="missao-card">
              <div className="icone">❤️</div>
              <h3>Valores</h3>
              <p>
                Amor pelos animais, solidariedade, comunidade, tecnologia
                acessível e compromisso com o bem-estar animal.
              </p>
            </div>
          </div>
        </section>

        <section className="sobre-secao">
          <h2>Como Funcionamos</h2>
          <div className="como-funciona">
            {[
              {
                titulo: 'Cadastro',
                texto: 'Usuários se cadastram gratuitamente na plataforma, criando um perfil pessoal.'
              },
              {
                titulo: 'Publicação',
                texto: 'Quando um pet é perdido, o tutor cria uma publicação com fotos e informações detalhadas.'
              },
              {
                titulo: 'Divulgação',
                texto: 'A comunidade Achorro compartilha e divulga a publicação, ampliando o alcance da busca.'
              },
              {
                titulo: 'Comunicação',
                texto: 'Pessoas que avistarem o pet podem deixar comentários ou entrar em contato diretamente.'
              },
              {
                titulo: 'Reencontro',
                texto: 'Quando o pet é encontrado, a publicação é atualizada e a história de sucesso é compartilhada.'
              }
            ].map((passo, index) => (
              <div className="passo" key={index}>
                <div className="passo-numero">{index + 1}</div>
                <div className="passo-conteudo">
                  <h3>{passo.titulo}</h3>
                  <p>{passo.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="sobre-secao impacto-secao">
          <h2>Nosso Impacto</h2>
          <div className="impacto-numeros">
            <div className="impacto-card">
              <div className="impacto-valor">4.522+</div>
              <div className="impacto-descricao">Usuários cadastrados</div>
            </div>
            <div className="impacto-card">
              <div className="impacto-valor">1.369+</div>
              <div className="impacto-descricao">Pets reencontrados</div>
            </div>
            <div className="impacto-card">
              <div className="impacto-valor">250+</div>
              <div className="impacto-descricao">Cidades atendidas</div>
            </div>
            <div className="impacto-card">
              <div className="impacto-valor">98%</div>
              <div className="impacto-descricao">Taxa de satisfação</div>
            </div>
          </div>
        </section>

        <section className="sobre-secao">
          <h2>Depoimentos</h2>
          <div className="depoimentos-grid">
            {[
              {
                texto: 'Graças ao Achorro, encontrei meu cachorro Max depois de 3 dias desaparecido. A comunidade foi incrível compartilhando e me ajudando nas buscas!',
                nome: 'Fernanda Oliveira',
                cidade: 'São Paulo, SP',
                imagem: '/assets/images/perfil4.png'
              },
              {
                texto: 'Minha gata Mia fugiu durante uma mudança e fiquei desesperada. Postei no Achorro e em menos de 24h alguém a reconheceu e entrou em contato!',
                nome: 'Ricardo Santos',
                cidade: 'Rio de Janeiro, RJ',
                imagem: '/assets/images/perfil5.jpg'
              },
              {
                texto: 'Encontrei um cachorro perdido na rua e através do Achorro consegui localizar os tutores em poucas horas. A plataforma é fantástica!',
                nome: 'Mariana Costa',
                cidade: 'Belo Horizonte, MG',
                imagem: '/assets/images/perfil6.jpg'
              }
            ].map((depoimento, index) => (
              <div className="depoimento" key={index}>
                <p className="depoimento-texto">"{depoimento.texto}"</p>
                <div className="depoimento-autor">
                  <Image
                    src={depoimento.imagem}
                    alt="Foto de perfil"
                    width={48}
                    height={48}
                  />
                  <div>
                    <p className="autor-nome">{depoimento.nome}</p>
                    <p className="autor-cidade">{depoimento.cidade}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer>
        <div className="footer-links">
          <Link href="/pages/termos">Termos de Uso</Link>
          <Link href="/pages/sobre">Sobre nós</Link>
          <Link href="/pages/contato">Contato</Link>
        </div>
      </footer>
    </>
  );
}