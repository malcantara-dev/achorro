# 🐾 Achorro - Ache seu pet!

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
</div>

## 📋 Sobre o Projeto

**Achorro** é uma plataforma web brasileira criada com o design system **Lovable**, dedicada a reconectar pets perdidos com suas famílias. Com uma interface intuitiva e moderna, permite que pessoas publiquem e encontrem animais desaparecidos em suas regiões.

---

## 🎯 Objetivos

- Conectar pets perdidos com seus tutores  
- Engajar a comunidade na busca por animais  
- Facilitar a comunicação entre usuários  
- Gerar impacto social positivo e promover bem-estar animal  

---

## ✨ Funcionalidades

### 👥 Usuários

- Publicação de pets perdidos/encontrados (com fotos e descrição)  
- Busca por nome, local e tipo de animal  
- Comentários e notificações  
- Perfil de usuário com histórico  
- Autenticação com verificação de e-mail  

### 🔧 Administradores

- Painel de controle com estatísticas  
- Moderação de posts e comentários  
- Gerenciamento de usuários e permissões  
- Sistema de roles (admin, moderador, usuário)  

---

## 🛠️ Tecnologias

- **React**, **TypeScript**, **Vite**  
- **Tailwind CSS**, **Shadcn/UI**, **Radix UI**, **Lucide**, **React Hook Form**  
- **Supabase** (PostgreSQL, Auth, Storage, RLS)  
- **ESLint**, **PostCSS**, **Zod**, **Date-fns**

---

## 🏗️ Arquitetura

### Principais Entidades

- **Posts**: informações do pet, status, localização, autor  
- **Profiles**: nome, avatar, histórico do usuário  
- **Comments**: comunicação entre usuários com moderação  
- **Locations**: cidades e estados para busca geográfica  

---

## 🚀 Como Executar em Localhost

### Pré-requisitos

- Node.js 18+  
- npm ou yarn  
- Conta no Supabase  

### Instalação

```bash
git clone https://github.com/seu-usuario/achorro.git
cd achorro
npm install
```

### Configuração

1. Crie um projeto no Supabase  
2. Configure `.env` com as credenciais  
3. Execute as migrações (se houver)  
4. Inicie o servidor:

```bash
npm run dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

### Scripts Disponíveis

```bash
npm run dev      # Ambiente de desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview do build
npm run lint     # Linter
```

---

## 🌐 Deploy

**Recomendado:** Supabase + Vercel  
- Conecte o repositório ao GitHub  
- Configure variáveis no Vercel  
- Deploy automático

**Outras opções:**  
- Netlify  
- GitHub Pages (SPA)  
- Railway  

---

## 🤝 Contribuição

1. Fork o projeto  
2. Crie uma branch: `git checkout -b feature/SuaFeature`  
3. Commit: `git commit -m "Adiciona SuaFeature"`  
4. Push: `git push origin feature/SuaFeature`  
5. Abra um Pull Request  

### Guidelines

- Siga o padrão de código  
- Faça commits claros  
- Teste antes de enviar  
- Atualize a documentação, se necessário  

---

## 📊 Estatísticas (fictícias)

- 1.200+ pets reunidos  
- 45.000+ usuários ativos  
- 8.900+ publicações  
- 156 cidades alcançadas  

---

## 🔐 Segurança

- Autenticação JWT (via Supabase Auth)  
- RLS no banco de dados  
- Validação com Zod  
- Sanitização de inputs  
- HTTPS obrigatório em produção  

---

## 📄 Licença

MIT – veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato

- Website: [achorro.vercel.app](https://achorro.vercel.app)  
- Email: contato@achorro.vercel.app  
- Instagram: [@achorro_oficial](https://instagram.com/achorro_oficial)  

---

<div align="center">
  <p>Feito com ❤️ para reunir famílias e pets no Brasil</p>
  <p><a href="#top">🔝 Voltar ao topo</a></p>
</div>
