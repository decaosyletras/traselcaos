import Link from "next/link";

const sections = [
  {
    title: "Razas",
    href: "/razas",
    description:
      "Civilizaciones y especies conocidas.",
  },
  {
    title: "Personajes",
    href: "/personajes",
    description:
      "Héroes, villanos y figuras históricas.",
  },
  {
    title: "Planetas",
    href: "/planetas",
    description:
      "Mundos habitados y territorios.",
  },
  {
    title: "Sectores",
    href: "/sectores",
    description:
      "Regiones del espacio conocido.",
  },
  {
    title: "Facciones",
    href: "/facciones",
    description:
      "Potencias y gobiernos galácticos.",
  },
  {
    title: "Organizaciones",
    href: "/organizaciones",
    description:
      "Órdenes, cultos y grupos especiales.",
  },
];

export default function UniversoPage() {
  return (
    <main className="min-h-screen">

      <section
        className="
          py-20
          text-center
        "
      >
        <h1
          className="
            text-5xl
            md:text-7xl
            font-bold
          "
        >
          Universo
        </h1>

        <p
          className="
            mt-6
            text-zinc-400
            max-w-3xl
            mx-auto
          "
        >
          Explora cada aspecto del universo
          de la saga.
        </p>
      </section>

      <section
        className="
          max-w-7xl
          mx-auto
          px-6
          pb-20
        "
      >
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >
            {sections.map((section) => (
              <Link
                key={section.title}
                href={section.href}
                className="
                  rounded-2xl
                  border
                  border-cyan-900/20
                  bg-zinc-900
                  p-8
                  transition
                  hover:border-cyan-500/50
                  hover:-translate-y-1
                "
              >
                <h2
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  {section.title}
                </h2>

                <p
                  className="
                    mt-4
                    text-zinc-400
                  "
                >
                  {section.description}
                </p>
              </Link>
            ))}
        </div>
      </section>

    </main>
  );
}