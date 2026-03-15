import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#001f3f] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:flex-row md:justify-between md:px-6">
        <div className="max-w-sm">
          <h3 className="text-xl font-semibold">IAI Mbalmayo</h3>
          <p className="mt-2 text-sm text-white/80">
            Portail étudiant professionnel pour l’Institut Africain d’Informatique – Centre de Mbalmayo.
            Retrouvez cours, actualités, événements et services en un seul endroit.
          </p>
          <div className="mt-4 flex items-center gap-3 text-sm">
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/iai.mbalmayo"
              className="rounded-full border border-white/20 px-3 py-2 hover:bg-white/10"
            >
              Facebook
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/237600000000"
              className="rounded-full border border-white/20 px-3 py-2 hover:bg-white/10"
            >
              WhatsApp
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/70">
              Liens rapides
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/espace" className="hover:text-white">
                  Espace Académique
                </Link>
              </li>
              <li>
                <Link href="/vie" className="hover:text-white">
                  Vie Étudiante
                </Link>
              </li>
              <li>
                <Link href="/evenements" className="hover:text-white">
                  Événements & JPO
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/70">
              Contact
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="tel:+237600000000" className="hover:text-white">
                  +237 6X XX XX XX
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@iai-mbalmayo.cm"
                  className="hover:text-white"
                >
                  contact@iai-mbalmayo.cm
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Nous trouver
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/70">
              À propos
            </h4>
            <p className="mt-3 text-sm text-white/80">
              IAI Mbalmayo offre des formations en informatique et technologie dans un
              environnement moderne et enrichissant.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-black/20 px-4 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} IAI Mbalmayo. Tous droits réservés.
      </div>
    </footer>
  );
}
