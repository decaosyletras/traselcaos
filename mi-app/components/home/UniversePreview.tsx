import Link from "next/link";

const items = [
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

export default function UniversePreview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p
            className="
              text-cyan-400
              uppercase
              tracking-[0.3em]
              text-sm
            "
          >
            Exploración Galáctica
          </p>

          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-bold
            "
          >
            Explora el Universo
          </h2>

          <p
            className="
              mt-6
              max-w-3xl
              mx-auto
              text-zinc-400
            "
          >
            Descubre las razas, personajes y acontecimientos
            que dieron forma a miles de años de historia
            en los confines de la galaxia.
          </p>
        </div>

        <div
          className="
            mt-16
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="
                group
                rounded-2xl
                border
                border-cyan-900/30
                bg-gradient-to-b
                from-zinc-900
                to-zinc-950
                p-8
                transition-all
                duration-300
                hover:border-cyan-500/50
                hover:-translate-y-1
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
              "
            >
              <h3
                className="
                  text-2xl
                  font-bold
                  transition-colors
                  group-hover:text-cyan-300
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-4
                  text-zinc-400
                  text-sm
                  leading-relaxed
                "
              >
                {item.description}
              </p>

              <div
                className="
                  mt-6
                  text-cyan-400
                  text-sm
                  font-medium
                "
              >
                Explorar →
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}