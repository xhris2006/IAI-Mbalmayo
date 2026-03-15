export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Nous Trouver
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/70">
          Contactez-nous pour toutes questions relatives aux admissions, aux
          entreprises partenaires ou à la vie étudiante.
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
          <h2 className="text-2xl font-semibold text-white">Carte interactive</h2>
          <p className="mt-3 text-sm text-white/70">
            Localisation du centre IAI Mbalmayo.
          </p>
          <div className="mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Carte IAI Mbalmayo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1986.123462906145!2d10.505842476540412!3d3.523091601025812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108c8d5cdd475a3f%3A0x7762c1f939a5a0d9!2sInstitut%20Africain%20d%27Informatique%20(IAI%20Mbalmayo)!5e0!3m2!1sfr!2scm!4v1700000000000!5m2!1sfr!2scm"
              width="600"
              height="450"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
          <h2 className="text-2xl font-semibold text-white">Contact</h2>
          <p className="mt-3 text-sm text-white/70">
            Envoyez-nous un message et nous vous répondrons dès que possible.
          </p>
          <form className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-white/80" htmlFor="name">
                Nom
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/20"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-white/80" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/20"
                placeholder="votre@exemple.cm"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-white/80" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/20"
                placeholder="Votre message..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Envoyer
            </button>
          </form>
          <div className="mt-8 space-y-3 text-sm text-white/70">
            <p>
              📞 <strong>Téléphone :</strong> +237 6X XX XX XX
            </p>
            <p>
              📧 <strong>Email :</strong> contact@iai-mbalmayo.cm
            </p>
            <p>
              📍 <strong>Adresse :</strong> Route nationale N5, Mbalmayo, Cameroun
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
