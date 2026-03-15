import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-14 text-center md:px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-lg backdrop-blur">
          <h1 className="text-2xl font-bold text-white">Accès réservé</h1>
          <p className="mt-4 text-sm text-white/70">
            Vous devez être connecté pour accéder au tableau de bord administrateur.
          </p>
          <Link
            href="/login"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Se connecter
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Tableau de bord administrateur
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/70">
          Gérez les publications, les fichiers PDF, les images et les profils des
          candidats.
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-white">Publications</h2>
          <p className="mt-2 text-sm text-white/70">
            Créez et mettez à jour les actualités présentées sur la page d’accueil.
          </p>
          <Link
            href="#"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Gérer les publications
          </Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-white">Fichiers & médias</h2>
          <p className="mt-2 text-sm text-white/70">
            Téléchargez de nouveaux PDF (sujets, résultats) et gérez la galerie
            d’images.
          </p>
          <Link
            href="#"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Gérer les fichiers
          </Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-white">Candidats Miss & Master</h2>
          <p className="mt-2 text-sm text-white/70">
            Ajoutez des candidats, modifiez leurs portraits et suivez les votes.
          </p>
          <Link
            href="#"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Gérer les candidats
          </Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-white">Gestion des utilisateurs</h2>
          <p className="mt-2 text-sm text-white/70">
            Ajoutez ou modifiez des comptes utilisateurs et attribuez des rôles.
          </p>
          <Link
            href="#"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Gérer les utilisateurs
          </Link>
        </div>
      </div>
    </section>
  );
}
