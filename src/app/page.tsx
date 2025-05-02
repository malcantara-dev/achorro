"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function HomePage() {
  useEffect(() => {
    // Lógica de contadores ou JS adicional pode ser colocado aqui se necessário
  }, []);

  const pets = [
    { nome: "oreo", img: "/assets/images/pet1.jpg" },
    { nome: "lorena", img: "/assets/images/pet2.jpg" },
    { nome: "mel", img: "/assets/images/pet4.jpg" },
    { nome: "nino", img: "/assets/images/pet5.jpg" },
    { nome: "luna", img: "/assets/images/pet6.jpg" },
    { nome: "thor", img: "/assets/images/pet7.jpg" },
  ];

  const comentarios = [
    {
      texto: "Ótimo site, simples de usar e uma comunidade bem unida!",
      img: "/assets/images/perfil1.jpg",
      nome: "José da Silva Pereira",
      tempo: "Membro há 2 meses",
    },
    {
      texto: "Encontrei meu Pet depois de 2 dias!",
      img: "/assets/images/perfil2.jpg",
      nome: "Eloisa Lopes",
      tempo: "Membro há 3 semanas",
    },
    {
      texto: "Sempre gosto de ajudar por aqui! É uma satisfação enorme.",
      img: "/assets/images/perfil3.jpg",
      nome: "João Antônio",
      tempo: "Membro há 11 meses",
    },
  ];

  return (
    <>
      <header>
        <div className="logo">
          <Link href="/">
            <div className="logo-icon" style={{ position: "relative", width: "90px", height: "90px" }}>
              <Image src="/assets/icons/paw.png" alt="Logo" fill style={{ objectFit: "contain" }} />
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
          <Link href="/nova-postagem">
            <button>Criar nova postagem</button>
          </Link>
        </nav>
      </header>

      <section className="carousel">
        <h2>Ajude-nos a encontrá-los!</h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={2}
          className="mySwiper"
        >
          {pets.map((pet) => (
            <SwiperSlide key={pet.nome} className="pet">
              <Link href={`/publicacao-pet?pet=${pet.nome}`}>
                <Image src={pet.img} alt={pet.nome} width={200} height={200} />
                <p>{pet.nome.charAt(0).toUpperCase() + pet.nome.slice(1)}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="stats">
        <div className="stat">
          <strong id="counter1">0</strong>
          <p>pessoas na comunidade!</p>
        </div>
        <div className="stat">
          <strong id="counter2">0</strong>
          <p>pets aos seus donos!</p>
        </div>
      </section>

      <section className="join">
        <div className="join-content">
          <div className="join-form">
            <h3>Junte-se à nós agora mesmo!</h3>
            <form>
              <input type="email" placeholder="Email para cadastro" />
              <input type="password" placeholder="Senha" />
              <button>Entrar para a comunidade!</button>
            </form>
          </div>
          <div className="join-image">
            <Image
              src="/assets/images/juntar.png"
              alt="Cachorro estiloso"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>

      <section className="titulo-comentario">
        <h3>Comentários da Comunidade</h3>
      </section>

      <section className="comments">
        {comentarios.map((c, i) => (
          <div className="comment" key={i}>
            “{c.texto}”
            <div className="profile">
              <Image src={c.img} alt={`Foto de perfil de ${c.nome}`} width={50} height={50} />
              <div className="info">
                <div className="name">{c.nome}</div>
                <div>{c.tempo}</div>
              </div>
            </div>
          </div>
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
  );
}
