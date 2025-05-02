// /src/lib/auth.ts
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/lib/prisma';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';

export const authOptions: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credenciais',
      credentials: {
        email: { label: 'E-mail', type: 'email' },
        senha: { label: 'Senha', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.senha) {
          throw new Error('E-mail e senha são obrigatórios');
        }
        try {
          const email = String(credentials.email);
          const senha = String(credentials.senha);
      
          const usuario = await prisma.user.findUnique({
            where: { email },
          });
          if (!usuario || !usuario.password) {
            throw new Error('Usuário não encontrado ou senha inválida');
          }
          const senhaValida = await compare(senha, usuario.password);
          if (!senhaValida) {
            throw new Error('Senha inválida');
          }
          return { id: usuario.id, email: usuario.email, name: usuario.name };
        } catch {
          throw new Error('Erro na autenticação');
        }
      },
    }),
  ],
  pages: { signIn: '/login' },
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
};