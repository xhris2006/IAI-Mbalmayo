"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError("Identifiants invalides. Veuillez réessayer.");
    }
  };

  return (
    <section className="mx-auto max-w-md px-4 py-14 md:px-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-lg backdrop-blur">
        <h1 className="text-2xl font-bold text-white">Connexion</h1>
        <p className="mt-2 text-sm text-white/70">
          Accédez à votre espace étudiant et au tableau de bord administrateur.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {error ? (
            <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </div>
          ) : null}

          <div>
            <label className="text-sm font-medium text-white/80" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/20"
              placeholder="votre@exemple.cm"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-white/80" htmlFor="password">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/20"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Se connecter
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-white/70">
          <p>
            Pour un accès administrateur, connectez-vous avec des identifiants dédiés.
          </p>
          <p className="mt-2">
            Pas encore de compte ? Contactez l’administration pour l’ouverture.
          </p>
        </div>

        <div className="mt-8 text-center text-sm text-white/70">
          <Link href="/" className="underline hover:text-white">
            Retour à l’accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
