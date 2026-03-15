import Link from "next/link";
import { candidates } from "@/lib/data";

export default function EvenementsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Événements & JPO
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/70">
          Retrouvez toutes les informations sur les événements majeurs du centre.
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
          <h2 className="text-2xl font-semibold text-white">Élection Miss & Master IAI</h2>
          <p className="mt-3 text-sm text-white/70">
            Découvrez les candidats, votez et encouragez les talents du campus.
          </p>
          <div className="mt-6 grid gap-4">
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 overflow-hidden rounded-2xl bg-white/10">
                    <img
                      src={candidate.photo}
                      alt={candidate.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {candidate.name}
                    </h3>
                    <p className="text-sm text-white/70">{candidate.level}</p>
                  </div>
                </div>
                <p className="text-sm text-white/70">{candidate.bio}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white/80">
                    Votes : {candidate.votes}
                  </span>
                  <button
                    type="button"
                    className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    Voter
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-white/70">
            <p>
              Les votes sont simulés pour démonstration. Pour participer, rendez-vous
              sur le site officiel.
            </p>
            <Link
              href="#"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
            >
              Aller au site de vote officiel
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
          <h2 className="text-2xl font-semibold text-white">Soirée de Parrainage</h2>
          <p className="mt-3 text-sm text-white/70">
            Une tradition qui unit les nouveaux arrivants et les étudiants confirmés.
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-white/5 p-5">
              <h3 className="text-base font-semibold text-white">Programme</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
                <li>Accueil des invités et mot de bienvenue</li>
                <li>Présentation des parrains et marraines</li>
                <li>Animations culturelles et musicales</li>
                <li>Remise des diplômes des anciens</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/5 p-5">
              <h3 className="text-base font-semibold text-white">Liste des parrains</h3>
              <p className="mt-2 text-sm text-white/70">
                Nos partenaires académiques et entreprises engagées dans l’accompagnement
                des étudiants.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
        <h2 className="text-2xl font-semibold text-white">Journée Portes Ouvertes (JPO)</h2>
        <p className="mt-2 text-sm text-white/70">
          Un rendez-vous incontournable pour découvrir l'IAI Mbalmayo et ses
          formations.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-6">
            <h3 className="text-base font-semibold text-white">Démonstrations techniques</h3>
            <p className="mt-2 text-sm text-white/70">
              Présentation de projets étudiants, ateliers de codage et démonstrations
              d’infrastructures réseau.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6">
            <h3 className="text-base font-semibold text-white">Ateliers d’initiation</h3>
            <p className="mt-2 text-sm text-white/70">
              Découverte des langages, des outils devops, du développement mobile
              et plus.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6">
            <h3 className="text-base font-semibold text-white">Accueil des écoles invitées</h3>
            <p className="mt-2 text-sm text-white/70">
              Visites guidées, rencontres avec les enseignants et échanges avec les
              étudiants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
