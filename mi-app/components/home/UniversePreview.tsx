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
  /*{
    title: "Planetas",
    href: "/planetas",
  },*/
  {
    title: "Destellos",
    href: "/destellos",
  },
  /*{
    title: "Sectores",
    href: "/sectores",
  },
  {
    title: "Facciones",
    href: "/facciones",
  },
  {
    title: "Organizaciones",
    href: "/organizaciones",
  },*/
];

export default function UniversePreview() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-center
          "
        >
          Explora el Universo
        </h2>

        <div
          className="
            mt-16
            grid
            grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="
                rounded-2xl
                border
                border-cyan-900/20
                bg-zinc-900
                p-8
                text-center
                transition
                hover:border-cyan-500/50
                hover:-translate-y-1
              "
            >
              <h3 className="text-xl font-bold">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>

      </div>

    </section>
  );
}