import NewsGrid from "@/components/NewsGrid";
import { news } from "@/lib/data";

export default function ActualitesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Actualités
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/70">
          Retrouvez les dernières actualités du centre, les annonces et les
          événements à venir.
        </p>
      </header>
      <NewsGrid items={news} />
    </section>
  );
}
