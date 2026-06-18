import Link from "next/link";

const sections = [
  {
    title: "Razas",
    href: "/razas",
    description: "Civilizaciones y especies conocidas.",
  },
  {
    title: "Personajes",
    href: "/personajes",
    description: "Héroes, villanos y figuras históricas.",
  },
  /*{
    title: "Planetas",
    href: "/planetas",
    description: "Mundos habitados y territorios.",
  },*/
  {
    title: "Destellos",
    href: "/destellos",
    description: "Cristales energéticos y sus portadores.",
  },
];

export default function UniversoPage() {
  return (
    <main className="min-h-screen">

      <section className="py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-7xl font-bold">
          Universo
        </h1>

        <p className="mt-6 text-zinc-400 max-w-3xl mx-auto text-sm md:text-base">
          Explora cada aspecto del universo de la saga.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">

          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="
                rounded-2xl
                border
                border-cyan-900/20
                bg-zinc-900
                p-6 md:p-8
                transition
                hover:border-cyan-500/50
                hover:-translate-y-1
              "
            >
              <h2 className="text-lg md:text-2xl font-bold">
                {section.title}
              </h2>

              <p className="mt-3 text-zinc-400 text-sm md:text-base">
                {section.description}
              </p>
            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}