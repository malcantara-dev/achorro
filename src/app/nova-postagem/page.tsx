import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import "@/styles/styles.css";
import "@/styles/nova-postagem.css";

export default function NovaPostagem() {
  return (
    <>
      <Head>
        <title>Achorro - Criar Nova Postagem</title>
      </Head>
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
          <Link href="/publicacoes">Publicações</Link>
          <Link href="/nova-postagem"><button>Criar nova postagem</button></Link>
        </nav>
      </header>

      <div className="pagina-banner nova-postagem-banner">
        <div className="banner-conteudo">
          <h1>Criar Nova Postagem</h1>
          <p>Preencha as informações abaixo para ajudarmos a encontrar seu pet</p>
        </div>
      </div>

      <div className="container">
        <div className="progresso-container">
          <div className="progresso-barra">
            {[
              "Informações do Pet",
              "Desaparecimento",
              "Fotos",
              "Contato",
              "Revisão"
            ].map((texto, index) => (
              <div
                className={`progresso-etapa ${index === 0 ? "ativa" : ""}`}
                data-etapa={index + 1}
                key={index}
              >
                <div className="etapa-numero">{index + 1}</div>
                <div className="etapa-texto">{texto}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Etapa 1 */}
        <form className="postagem-form">
          <div className="etapa-conteudo ativa" id="etapa-1">
            <h2>Informações do Pet</h2>
            <div className="form-grupo">
              <label htmlFor="status">Status</label>
              <div className="radio-grupo">
                <div className="radio-opcao">
                  <input type="radio" id="status-perdido" name="status" value="perdido" defaultChecked />
                  <label htmlFor="status-perdido">Perdido</label>
                </div>
                <div className="radio-opcao">
                  <input type="radio" id="status-encontrado" name="status" value="encontrado" />
                  <label htmlFor="status-encontrado">Encontrado</label>
                </div>
              </div>
            </div>
            <div className="form-grupo">
              <label htmlFor="tipo-pet">Tipo de Pet</label>
              <select id="tipo-pet" name="tipo-pet" required>
                <option value="" disabled selected>Selecione o tipo de pet</option>
                <option value="cachorro">Cachorro</option>
                <option value="gato">Gato</option>
                <option value="ave">Ave</option>
                <option value="roedor">Roedor</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className="form-grupo">
              <label htmlFor="nome-pet">Nome do Pet</label>
              <input type="text" id="nome-pet" name="nome-pet" placeholder="Digite o nome do pet" required />
            </div>
            <div className="form-grupo">
              <label htmlFor="raca">Raça</label>
              <input type="text" id="raca" name="raca" placeholder="Digite a raça do pet" />
            </div>
            <div className="form-row">
              <div className="form-grupo">
                <label htmlFor="idade">Idade</label>
                <input type="text" id="idade" name="idade" placeholder="Ex: 2 anos" />
              </div>
              <div className="form-grupo">
                <label htmlFor="sexo">Sexo</label>
                <select id="sexo" name="sexo">
                  <option value="" disabled selected>Selecione</option>
                  <option value="macho">Macho</option>
                  <option value="femea">Fêmea</option>
                  <option value="desconhecido">Não sei</option>
                </select>
              </div>
            </div>
            <div className="form-grupo">
              <label htmlFor="cor">Cor</label>
              <input type="text" id="cor" name="cor" placeholder="Ex: Preto e branco" required />
            </div>
            <div className="form-grupo">
              <label htmlFor="porte">Porte</label>
              <select id="porte" name="porte" required>
                <option value="" disabled selected>Selecione o porte</option>
                <option value="pequeno">Pequeno</option>
                <option value="medio">Médio</option>
                <option value="grande">Grande</option>
              </select>
            </div>
            <div className="form-grupo">
              <label htmlFor="caracteristicas">Características</label>
              <textarea
                id="caracteristicas"
                name="caracteristicas"
                placeholder="Descreva características marcantes do pet (coleira, manchas, comportamento, etc)"
                rows={4}
              ></textarea>
            </div>
            <div className="form-grupo">
              <label>Tags (selecione as que se aplicam)</label>
              <div className="tags-container">
                {["docil", "timido", "brincalhao", "coleira", "microchip", "castrado"].map((tag) => (
                  <div className="tag-item" key={tag}>
                    <input type="checkbox" id={`tag-${tag}`} name="tags" value={tag} />
                    <label htmlFor={`tag-${tag}`}>{
                      tag === "docil"
                        ? "Dócil"
                        : tag === "timido"
                        ? "Tímido"
                        : tag === "brincalhao"
                        ? "Brincalhão"
                        : tag === "coleira"
                        ? "Usa coleira"
                        : tag === "microchip"
                        ? "Tem microchip"
                        : tag === "castrado"
                        ? "Castrado"
                        : tag
                    }</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="botoes-navegacao">
              <button type="button" className="btn-proximo" data-proximo="2">
                Próximo
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}