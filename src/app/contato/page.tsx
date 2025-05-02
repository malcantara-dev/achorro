'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Contato() {
    useEffect(() => {
        const perguntas = document.querySelectorAll(".faq-pergunta");

        const handlers: { el: Element, fn: () => void }[] = [];

        perguntas.forEach((pergunta) => {
            const clickHandler = () => {
                const item = pergunta.parentElement;
                if (!item) return;

                item?.classList.toggle("ativo");

                const toggle = item?.querySelector(".faq-toggle");
                if (toggle) {
                    toggle.textContent = item.classList.contains("ativo") ? "−" : "+";
                }
            };

            pergunta.addEventListener("click", clickHandler);
            handlers.push({ el: pergunta, fn: clickHandler });
        });

        return () => {
            handlers.forEach(({ el, fn }) => {
                el.removeEventListener("click", fn);
            });
        };
    }, []);

    return (
        <>
            <Head>
                <title>Achorro - Contato</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="/styles/styles.css" />
                <link rel="stylesheet" href="/styles/paginas.css" />
            </Head>

            <header>
                <div className="logo">
                    <Link href="/">
                        <div className="logo-icon">
                            <img src="/assets/icons/paw.png" alt="|" />
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

            <div className="pagina-banner contato-banner">
                <div className="banner-conteudo">
                    <h1>Contato</h1>
                    <p>Estamos aqui para ajudar. Entre em contato conosco!</p>
                </div>
            </div>

            <div className="pagina-container">
                <div className="contato-grid">
                    <div className="contato-info">
                        <section className="contato-secao">
                            <h2>Informações de Contato</h2>
                            <ul className="contato-lista">
                                <li>
                                    <div className="contato-icone">📧</div>
                                    <div className="contato-detalhe">
                                        <h3>E-mail</h3>
                                        <p><a href="mailto:contato@achorro.com.br">contato@achorro.com.br</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="contato-icone">📞</div>
                                    <div className="contato-detalhe">
                                        <h3>Telefone</h3>
                                        <p>(11) 1234-5678</p>
                                        <p>Segunda a Sexta, 9h às 18h</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="contato-icone">📍</div>
                                    <div className="contato-detalhe">
                                        <h3>Endereço</h3>
                                        <p>Rua dos Animais, 123</p>
                                        <p>São Paulo, SP - CEP 01234-567</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="contato-icone">🌐</div>
                                    <div className="contato-detalhe">
                                        <h3>Redes Sociais</h3>
                                        <div className="redes-sociais">
                                            <a href="#" className="rede-social">Facebook</a>
                                            <a href="#" className="rede-social">Instagram</a>
                                            <a href="#" className="rede-social">Twitter</a>
                                            <a href="#" className="rede-social">YouTube</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        <section className="contato-secao">
                            <h2>Horário de Atendimento</h2>
                            <div className="horario-grid">
                                {[
                                    ['Segunda-feira', '9h às 18h'],
                                    ['Terça-feira', '9h às 18h'],
                                    ['Quarta-feira', '9h às 18h'],
                                    ['Quinta-feira', '9h às 18h'],
                                    ['Sexta-feira', '9h às 18h'],
                                    ['Sábado', '10h às 14h'],
                                    ['Domingo', 'Fechado'],
                                ].map(([dia, hora]) => (
                                    <React.Fragment key={dia}>
                                        <div className="horario-dia">{dia}</div>
                                        <div className="horario-hora">{hora}</div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="contato-formulario">
                        <h2>Envie-nos uma Mensagem</h2>
                        <form>
                            <div className="form-grupo">
                                <label htmlFor="nome">Nome completo</label>
                                <input type="text" id="nome" placeholder="Digite seu nome completo" required />
                            </div>

                            <div className="form-grupo">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" id="email" placeholder="Digite seu e-mail" required />
                            </div>

                            <div className="form-grupo">
                                <label htmlFor="telefone">Telefone</label>
                                <input type="tel" id="telefone" placeholder="Digite seu telefone" />
                            </div>

                            <div className="form-grupo">
                                <label htmlFor="assunto">Assunto</label>
                                <select id="assunto" required defaultValue="">
                                    <option value="" disabled>Selecione um assunto</option>
                                    <option value="duvida">Dúvida</option>
                                    <option value="sugestao">Sugestão</option>
                                    <option value="reclamacao">Reclamação</option>
                                    <option value="parceria">Proposta de Parceria</option>
                                    <option value="imprensa">Imprensa</option>
                                    <option value="outro">Outro</option>
                                </select>
                            </div>

                            <div className="form-grupo">
                                <label htmlFor="mensagem">Mensagem</label>
                                <textarea id="mensagem" placeholder="Digite sua mensagem" rows={6} required></textarea>
                            </div>

                            <div className="form-grupo checkbox-grupo">
                                <input type="checkbox" id="termos-contato" required />
                                <label htmlFor="termos-contato">
                                    Concordo com a <Link href="/termos">Política de Privacidade</Link> do Achorro
                                </label>
                            </div>

                            <button type="submit" className="btn-enviar">Enviar mensagem</button>
                        </form>
                    </div>
                </div>

                <section className="faq-secao">
                    <h2>Perguntas Frequentes</h2>
                    <div className="faq-lista">
                        {[
                            ['Como faço para cadastrar um pet perdido?', 'Para cadastrar um pet perdido...'],
                            ['O serviço do Achorro é gratuito?', 'Sim, o Achorro é totalmente gratuito...'],
                            ['Como posso ajudar a divulgar um pet perdido?', 'Você pode ajudar compartilhando...'],
                            ['Encontrei um pet perdido, o que devo fazer?', 'Se você encontrou um pet perdido...'],
                            ['Como posso me tornar um parceiro do Achorro?', 'Para se tornar um parceiro...']
                        ].map(([titulo, conteudo], i) => (
                            <div key={i} className="faq-item">
                                <div className="faq-pergunta">
                                    <h3>{titulo}</h3>
                                    <span className="faq-toggle">+</span>
                                </div>
                                <div className="faq-resposta">
                                    <p>{conteudo}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mapa-secao">
                    <h2>Nossa Localização</h2>
                    <div className="mapa-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975790005467!2d-46.65429548502406!3d-23.56425868468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzUxLjMiUyA0NsKwMzknMDkuMCJX!5e0!3m2!1spt-BR!2sbr!4v1616593897156!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </section>
            </div>

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
