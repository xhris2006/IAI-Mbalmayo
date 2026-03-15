import HeroSlider from "@/components/HeroSlider";
import NewsGrid from "@/components/NewsGrid";
import StatsCards from "@/components/StatsCards";
import { news, stats } from "@/lib/data";

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Mot de la direction
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/80">
              Bienvenue à l’Institut Africain d’Informatique – Centre de Mbalmayo.
              Notre mission est d’accompagner chaque étudiant vers l’excellence
              académique et professionnelle. Nos formations en génie logiciel et
              systèmes et réseaux sont conçues pour répondre aux besoins du
              marché et pour encourager l’innovation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Les équipes pédagogiques et administratives vous accompagnent dans
              toutes vos démarches : insertion, projets, stages et carrière.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Chiffres clés</h3>
            <p className="mt-2 text-sm text-white/70">
              Un aperçu rapide de la vitalité et des résultats du centre.
            </p>
            <div className="mt-8">
              <StatsCards cards={stats} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Actualités récentes
            </h2>
            <p className="mt-2 text-sm text-white/70">
              Les trois dernières annonces et publications du centre.
            </p>
          </div>
          <a
            href="/actualites"
            className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Voir toutes les actualités
          </a>
        </div>
        <div className="mt-8">
          <NewsGrid items={news} />
        </div>
      </section>
    </>
  );
}
