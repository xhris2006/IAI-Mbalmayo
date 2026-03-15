import { clubs } from "@/lib/data";

export default function ViePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Vie Étudiante
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/70">
          Découvrez les clubs, les activités et la vie quotidienne sur campus.
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-3">
        {clubs.map((club) => (
          <div
            key={club.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1 hover:bg-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <img
                  src={club.image}
                  alt={club.name}
                  className="h-8 w-8 object-contain"
                  loading="lazy"
                />
              </div>
              <h2 className="text-lg font-semibold text-white">{club.name}</h2>
            </div>
            <p className="mt-4 text-sm text-white/70">{club.description}</p>
            <button className="mt-6 inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/20">
              En savoir plus
            </button>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
        <h2 className="text-2xl font-semibold text-white">Vie au campus</h2>
        <p className="mt-2 text-sm text-white/70">
          Une galerie photo pour revivre la vie quotidienne des étudiants.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-sky-900 to-slate-800">
            <div className="flex h-full items-center justify-center text-center text-white/80">
              Photo 1
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-sky-900 to-slate-800">
            <div className="flex h-full items-center justify-center text-center text-white/80">
              Photo 2
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-sky-900 to-slate-800">
            <div className="flex h-full items-center justify-center text-center text-white/80">
              Photo 3
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
