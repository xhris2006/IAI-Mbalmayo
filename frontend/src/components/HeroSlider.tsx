"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const slides = [
  {
    id: "slide-1",
    title: "Bienvenue à l’IAI Mbalmayo",
    description:
      "Un campus dynamique, des formations innovantes et une communauté engagée.",
    image: "/images/slider-1.svg",
  },
  {
    id: "slide-2",
    title: "Laboratoires et projets pratiques",
    description:
      "Nos étudiants construisent des solutions réelles avec des technologies modernes.",
    image: "/images/slider-2.svg",
  },
  {
    id: "slide-3",
    title: "JPO & Parrainage",
    description:
      "Rejoignez-nous pour découvrir nos formations et rencontrez nos équipes pédagogiques.",
    image: "/images/slider-3.svg",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  const current = useMemo(() => slides[active], [active]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-900 via-sky-900/90 to-[#001f3f] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:gap-16 md:px-6">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            {current.title}
          </h1>
          <p className="mt-4 text-lg text-white/80">{current.description}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/espace"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-900 shadow-lg shadow-sky-900/30 transition hover:bg-white/90"
            >
              Accéder à l’espace académique
            </a>
            <a
              href="/evenements"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Événements & JPO
            </a>
          </div>
        </div>

        <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-lg backdrop-blur">
          <Image
            src={current.image}
            alt={current.title}
            width={900}
            height={560}
            className="h-[320px] w-full object-cover md:h-[420px]"
            priority
          />
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl justify-center gap-3 px-4 pb-10 md:px-6">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Slide ${index + 1}`}
            className={`h-2 w-8 rounded-full transition ${
              index === active ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
