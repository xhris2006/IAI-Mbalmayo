import type { NewsItem } from "@/lib/data";

export default function NewsGrid({ items }: { items: NewsItem[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.id}
          className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white/10"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
              {item.date}
            </span>
          </div>
          <p className="mt-4 text-sm text-white/70">{item.excerpt}</p>
          {item.link ? (
            <a
              href={item.link}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition hover:text-white"
            >
              Lire la suite
              <span aria-hidden>→</span>
            </a>
          ) : null}
        </article>
      ))}
    </div>
  );
}
