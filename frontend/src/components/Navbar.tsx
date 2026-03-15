"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Espace Académique", href: "/espace" },
  { label: "Vie Étudiante", href: "/vie" },
  { label: "Événements & JPO", href: "/evenements" },
  { label: "Nous Trouver", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const active = useMemo(() => (href: string) => {
    if (href === "/" && pathname === "/") return true;
    return pathname?.startsWith(href) && href !== "/";
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#001f3f]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-2xl">
            IAI
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold text-white">IAI Mbalmayo</span>
            <span className="text-xs text-white/70">Portail Étudiant</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition hover:bg-white/10 hover:text-white ${
                active(link.href)
                  ? "bg-white/10 text-white"
                  : "text-white/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="ml-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Se connecter
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Ouvrir le menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#001f3f]/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition hover:bg-white/10 hover:text-white ${
                  active(link.href)
                    ? "bg-white/10 text-white"
                    : "text-white/80"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
              onClick={() => setOpen(false)}
            >
              Se connecter
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
