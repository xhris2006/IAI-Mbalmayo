import type { StatCard } from "@/lib/data";

export default function StatsCards({ cards }: { cards: StatCard[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cards.map((stat) => (
        <div
          key={stat.id}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">
              {stat.icon}
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="text-sm text-white/70">{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
