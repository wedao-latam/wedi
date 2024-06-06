import { linkOAuthAccount } from "@/actions/auth"
import { getUserById } from "@/actions/user"
import { prisma } from "@/config/db"
import { PrismaAdapter } from "@auth/prisma-adapter"

import NextAuth from "next-auth"

import authConfig from "@/config/auth"
import { env } from "@/env.mjs"

import type { Adapter } from "@auth/core/adapters"


export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  debug: env.NODE_ENV === "development",
  pages: {
    signIn: "/signin",
    signOut: "/signout",
    verifyRequest: "/signin/magic-link-signin",
  },
  secret: env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 daysd
    updateAge: 24 * 60 * 60, // 24 hours
  },
  events: {
    async linkAccount({ user }) {
      if (user.id) await linkOAuthAccount({ userId: user.id })
    },
  },
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnLoginPage = nextUrl.pathname.startsWith('/signin')
      const isOnSignupPage = nextUrl.pathname.startsWith('/signup')

      if (isLoggedIn) {
        if (isOnLoginPage || isOnSignupPage) {
          return Response.redirect(new URL('/dashboard', nextUrl))
        }
      }

      return true
    },

    async session({ session, token }) {
      session.user.role = token.role as "USER" | "ADMIN"
      if (session.user) {
        if (token.sub) {
          session.user.id = token.sub;
        }
  
        if (token.email) {
          session.user.email = token.email;
        }

        session.user.name = token.name;
        session.user.image = token.picture;
      }
      return session
    },

    async jwt({ token, user }) {
      if (user) token.role = user.role

      if (!token.sub) return token;
      const dbUser = await getUserById(token.id);

      if (!dbUser) return token;

      token.name = dbUser.name;
      token.email = dbUser.email;
      token.picture = dbUser.image;

      return token;
    },

    async signIn({ user, account }) {
      if (!user.id) return false
      if (account?.provider !== "credentials") return true

      const existingUser = await getUserById({ id: user.id })

      return !existingUser?.emailVerified ? false : true
    },
  },
  
  ...authConfig,
})