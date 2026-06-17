import Link from "next/link";

export default function TimelinePreview() {
  return (
    <section className="py-24">

      <div
        className="
          max-w-5xl
          mx-auto
          px-6
          text-center
        "
      >
        <h2
          className="
            text-4xl
            md:text-5xl
            font-bold
          "
        >
          Cronología
        </h2>

        <p
          className="
            mt-6
            text-zinc-400
          "
        >
          Sigue los acontecimientos que
          moldearon la historia galáctica.
        </p>

        <div
          className="
            mt-12
            rounded-2xl
            border
            border-cyan-900/20
            bg-zinc-900
            p-10
          "
        >
          <div className="space-y-6">

            <div>
              Año 0 — Era de Expansión
            </div>

            <div>
              Año 500 — Fundación Imperial
            </div>

            <div>
              Año 1200 — Guerra Estelar
            </div>

          </div>

          <Link
            href="/cronologia"
            className="
              inline-block
              mt-10
              text-cyan-400
            "
          >
            Ver cronología completa →
          </Link>

        </div>

      </div>

    </section>
  );
}