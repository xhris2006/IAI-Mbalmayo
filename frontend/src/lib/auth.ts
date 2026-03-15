import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const defaultUser = {
  id: "admin-1",
  name: "Administrateur",
  email: "admin@iai-mbalmayo.cm",
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const { email, password } = credentials;
        // Exemple simple : identifiants prédéfinis pour démonstration.
        // En production, connectez-vous à une base de données (Supabase / Postgres).
        if (email === defaultUser.email && password === "SuperSecret123") {
          return defaultUser;
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET || "change-this-secret",
};
