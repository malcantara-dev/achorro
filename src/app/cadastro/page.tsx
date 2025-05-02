'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import '@/styles/styles.css'
import '@/styles/cadastro.css'

export default function CadastroPage() {
  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        nome: formData.get('nome'),
        email: formData.get('email'),
        senha: formData.get('senha')
      }),
      headers: { 'Content-Type': 'application/json' }
    })

    const data = await res.json()
    if (!res.ok) {
      alert(data.error)
    } else {
      alert('Cadastro realizado com sucesso!')
      window.location.href = '/login'
    }
  }
  
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/scripts/uploadFoto.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

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
          <Link href="/cadastro" className="active">Cadastro</Link>
          <Link href="/publicacoes">Publicações</Link>
          <Link href="/nova-postagem">
            <button>Criar nova postagem</button>
          </Link>
        </nav>
      </header>

      <section className="cadastro-container">
        <div className="cadastro-card">
          <h2>Cadastre-se na Comunidade</h2>
          <p className="subtitle">
            Junte-se a milhares de pessoas que ajudam a encontrar pets perdidos
          </p>

          <form className="cadastro-form" onSubmit={handleCadastro}>
            <div className="form-group">
              <label htmlFor="nome">Nome completo</label>
              <input type="text" id="nome" placeholder="Digite seu nome completo" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" placeholder="Digite seu e-mail" required />
            </div>

            <div className="form-group">
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" placeholder="Crie uma senha segura" required />
            </div>

            <div className="form-group">
              <label htmlFor="confirmar-senha">Confirmar senha</label>
              <input type="password" id="confirmar-senha" placeholder="Confirme sua senha" required />
            </div>

            <div className="form-group">
              <label htmlFor="foto">Foto de perfil (opcional)</label>
              <input type="file" id="foto" className="file-input" />
              <div className="file-button">Escolher arquivo</div>
              <span className="file-name">Nenhum arquivo selecionado</span>
            </div>

            <div className="form-group checkbox-group">
              <input type="checkbox" id="termos" required />
              <label htmlFor="termos">
                Concordo com os <Link href="#">Termos de Uso</Link> e{' '}
                <Link href="#">Política de Privacidade</Link>
              </label>
            </div>

            <button type="submit" className="cadastro-button">
              Criar minha conta
            </button>
          </form>

          <div className="login-link">
            Já tem uma conta? <Link href="#">Faça login</Link>
          </div>
        </div>

        <div className="cadastro-image">
          <Image src="/assets/images/cadastro-pet.jpg" alt="Cachorro feliz" width={400} height={400} />
          <div className="image-overlay">
            <h3>Ajude a encontrar pets perdidos</h3>
            <p>Sua participação pode fazer a diferença na vida de muitas famílias</p>
          </div>
        </div>
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
