import Link from 'next/link'
import Image from 'next/image'
import '@/styles/styles.css'
import '@/styles/publicacoes.css'

export default function Publicacoes() {
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
          <Link href="/cadastro">Cadastro</Link>
          <Link href="/publicacoes" className="active">Publicações</Link>
          <Link href="/nova-postagem">
            <button>Criar nova postagem</button>
          </Link>
        </nav>
      </header>

      <section className="publicacoes-header">
        <h1>Todas as Publicações</h1>
        <p>Ajude-nos a encontrar esses amiguinhos e devolvê-los para suas famílias</p>

        <div className="filtros">
          <div className="filtro-grupo">
            <label htmlFor="tipo-pet">Tipo de Pet:</label>
            <select id="tipo-pet">
              <option value="todos">Todos</option>
              <option value="cachorro">Cachorro</option>
              <option value="gato">Gato</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <div className="filtro-grupo">
            <label htmlFor="localizacao">Localização:</label>
            <select id="localizacao">
              <option value="todos">Todas</option>
              <option value="zona-norte">Zona Norte</option>
              <option value="zona-sul">Zona Sul</option>
              <option value="zona-leste">Zona Leste</option>
              <option value="zona-oeste">Zona Oeste</option>
              <option value="centro">Centro</option>
            </select>
          </div>

          <div className="filtro-grupo">
            <label htmlFor="data">Data:</label>
            <select id="data">
              <option value="todos">Qualquer data</option>
              <option value="hoje">Hoje</option>
              <option value="semana">Esta semana</option>
              <option value="mes">Este mês</option>
            </select>
          </div>

          <button className="btn-filtrar">Filtrar</button>
        </div>
      </section>

      <section className="publicacoes-grid">
        {[
          {
            nome: 'Oreo',
            raca: 'Pinscher',
            local: 'Zona Sul - Próximo ao Parque Ibirapuera',
            data: '15/03/2023',
            status: 'perdido',
            imagem: 'pet1.jpg',
            id: 'oreo'
          },
          {
            nome: 'Lorena',
            raca: 'Golden Retriever',
            local: 'Zona Oeste - Próximo ao Shopping Eldorado',
            data: '22/03/2023',
            status: 'perdido',
            imagem: 'pet2.jpg',
            id: 'lorena'
          },
          {
            nome: 'Max',
            raca: 'Pug',
            local: 'Zona Norte - Próximo ao Parque da Juventude',
            data: '10/08/2023',
            status: 'encontrado',
            imagem: 'pet3.jpg',
            id: 'max'
          },
          {
            nome: 'Mel',
            raca: 'Dálmata',
            local: 'Centro - Próximo à Praça da República',
            data: '05/05/2023',
            status: 'perdido',
            imagem: 'pet4.jpg',
            id: 'mel'
          },
          {
            nome: 'Nino',
            raca: 'Pastor Alemão',
            local: 'Zona Leste - Próximo ao Shopping Anália Franco',
            data: '18/09/2023',
            status: 'perdido',
            imagem: 'pet5.jpg',
            id: 'nino'
          },
          {
            nome: 'Luna',
            raca: 'Golden Retriever',
            local: 'Zona Sul - Próximo ao Estádio Morumbi',
            data: '18/09/2023',
            status: 'perdido',
            imagem: 'pet6.jpg',
            id: 'luna'
          },
          {
            nome: 'Thor',
            raca: 'Corgi',
            local: 'Zona Norte - Próximo a estação da Sé',
            data: '17/06/2023',
            status: 'perdido',
            imagem: 'pet7.jpg',
            id: 'thor'
          }
        ].map(pet => (
          <Link href={`/publicacao-pet?pet=${pet.id}`} className="publicacao-card" key={pet.id}>
            <div className="publicacao-imagem">
              <Image src={`/assets/images/${pet.imagem}`} alt={pet.nome} width={300} height={200} />
              <span className={`status ${pet.status}`}>{pet.status.charAt(0).toUpperCase() + pet.status.slice(1)}</span>
            </div>
            <div className="publicacao-info">
              <h3>{pet.nome}</h3>
              <p className="raca">{pet.raca}</p>
              <p className="local"><strong>Local:</strong> {pet.local}</p>
              <p className="data">
                <strong>{pet.status === 'encontrado' ? 'Encontrado em:' : 'Desaparecido em:'}</strong> {pet.data}
              </p>
            </div>
          </Link>
        ))}
      </section>

      <footer>
        <div className="footer-links">
          <Link href="/termos">Termos de Uso</Link>
          <Link href="/sobre">Sobre nós</Link>
          <Link href="/contato">Contato</Link>
        </div>
      </footer>
    </>
  )
}
