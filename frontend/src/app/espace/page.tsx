import Link from "next/link";
import { trainingPrograms } from "@/lib/data";

export default function EspacePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Espace Académique
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/70">
          Retrouvez toutes les ressources pédagogiques, les résultats et les
          fiches de formation pour vous accompagner dans votre parcours.
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-white">Bibliothèque de sujets</h2>
          <p className="mt-3 text-sm text-white/70">
            Archives des concours d’entrée et PDF téléchargeables pour révision et
            préparation.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-white/80">
            <li>
              <Link
                href="#"
                className="inline-flex items-center justify-between rounded-full bg-white/5 px-4 py-3 text-sm hover:bg-white/10"
              >
                <span>Concours d’entrée 2025 (PDF)</span>
                <span className="text-xs text-white/60">Télécharger</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="inline-flex items-center justify-between rounded-full bg-white/5 px-4 py-3 text-sm hover:bg-white/10"
              >
                <span>Fiches de révision - Algorithmique</span>
                <span className="text-xs text-white/60">Télécharger</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="inline-flex items-center justify-between rounded-full bg-white/5 px-4 py-3 text-sm hover:bg-white/10"
              >
                <span>Exemples de sujets de projet</span>
                <span className="text-xs text-white/60">Télécharger</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-white">Tableaux de résultats</h2>
          <p className="mt-3 text-sm text-white/70">
            Consultez les résultats des concours d’entrée et des examens semestriels.
          </p>
          <div className="mt-6 space-y-4">
            <Link
              href="#"
              className="block rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-white/80 transition hover:bg-white/10"
            >
              Résultats concours d’entrée
            </Link>
            <Link
              href="#"
              className="block rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-white/80 transition hover:bg-white/10"
            >
              Résultats examens semestriels
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-2xl font-semibold text-white">Fiches de formation</h2>
        <p className="mt-2 text-sm text-white/70">
          Présentation des parcours proposés au centre.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {trainingPrograms.map((program) => (
            <div
              key={program.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                  {program.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{program.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{program.description}</p>
                </div>
              </div>
              <Link
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
              >
                En savoir plus
                <span aria-hidden>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
        <h2 className="text-2xl font-semibold text-white">Galerie des projets</h2>
        <p className="mt-2 text-sm text-white/70">
          Découvrez quelques applications et projets créés par les étudiants.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white/5 p-5">
            <h3 className="text-base font-semibold text-white">App de gestion de notes</h3>
            <p className="mt-2 text-sm text-white/70">
              Une application web pour suivre les résultats et générer des bulletins.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-5">
            <h3 className="text-base font-semibold text-white">Réseau local sécurisé</h3>
            <p className="mt-2 text-sm text-white/70">
              Projet réseau avec VPN, firewalls et surveillance des flux.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-5">
            <h3 className="text-base font-semibold text-white">Plateforme e-learning</h3>
            <p className="mt-2 text-sm text-white/70">
              Système de cours en ligne avec quiz, suivi et certification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
