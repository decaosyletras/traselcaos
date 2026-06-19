import Link from "next/link";

const sections = [
  {
    title: "Razas",
    href: "/razas",
    description: "Especies inteligentes, culturas ancestrales y civilizaciones galácticas.",
  },
  {
    title: "Personajes",
    href: "/personajes",
    description: "Héroes, villanos y figuras que alteraron el destino de la galaxia.",
  },
  {
    title: "Destellos",
    href: "/destellos",
    description: "Destellos energéticos y sus portadores.",
  },
];

export default function UniversoPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* HERO */}
      <section className="relative py-20 md:py-28 text-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-zinc-950 to-zinc-950" />

        <div className="relative z-10 px-6">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Exploración Galáctica
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-black">
            Universo
          </h1>

          <p className="mt-6 text-zinc-400 max-w-3xl mx-auto text-sm md:text-base">
            Explora cada aspecto del universo de la saga: civilizaciones,
            personajes y fuerzas que moldean la historia.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="
                group
                relative
                rounded-2xl
                border
                border-cyan-900/30
                bg-gradient-to-b
                from-zinc-900
                to-zinc-950
                p-6 md:p-8

                transition-all
                duration-300

                hover:border-cyan-500/50
                hover:-translate-y-1
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
              "
            >
              {/* glow decorativo */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-cyan-500/5 blur-xl" />

              <div className="relative z-10">
                <h2 className="text-xl md:text-2xl font-bold group-hover:text-cyan-300 transition-colors">
                  {section.title}
                </h2>

                <p className="mt-3 text-zinc-400 text-sm md:text-base">
                  {section.description}
                </p>

                <div className="mt-6 text-cyan-400 text-sm font-medium">
                  Explorar →
                </div>
              </div>
            </Link>
          ))}
        </div>

      </section>
    </main>
  );
}