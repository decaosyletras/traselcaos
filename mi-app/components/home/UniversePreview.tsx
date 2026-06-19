import Link from "next/link";

const items = [
  {
    title: "Razas",
    href: "/razas",
  },
  {
    title: "Personajes",
    href: "/personajes",
  },
  {
    title: "Destellos",
    href: "/destellos",
  },
];

export default function UniversePreview() {
  return (
    <section className="py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER MÁS LIGERO EN MÓVIL */}
        <div className="text-center">
          <p className="text-cyan-400 uppercase tracking-[0.25em] text-[10px] md:text-sm">
            Universo
          </p>

          <h2 className="mt-2 md:mt-4 text-2xl md:text-5xl font-bold">
            Explora el Universo
          </h2>

          <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-zinc-400 text-sm md:text-base">
            Descubre razas, personajes y fuerzas que moldean la galaxia.
          </p>
        </div>

        {/* GRID RESPONSIVE LIMPIO */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="
                group
                relative
                rounded-xl md:rounded-2xl
                border border-cyan-900/30
                bg-gradient-to-b from-zinc-900 to-zinc-950
                p-4 md:p-8

                transition
                hover:border-cyan-500/50
                hover:-translate-y-1
                hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
              "
            >
              {/* glow suave */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-cyan-500/5 blur-xl" />

              <div className="relative z-10">
                <h3 className="text-base md:text-2xl font-bold group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                {/* CTA RESTAURADO */}
                <div className="mt-4 text-cyan-400 text-sm font-medium">
                  Explorar →
                </div>
              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}