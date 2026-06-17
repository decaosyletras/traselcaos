import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[90vh]
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-cyan-950/20
          via-zinc-950
          to-zinc-950
        "
      />

      <div
        className="
          relative
          z-10
          max-w-5xl
          mx-auto
          px-6
          text-center
        "
      >
        <p
          className="
            text-cyan-400
            uppercase
            tracking-[0.4em]
            text-sm
          "
        >
          Ópera Espacial
        </p>

        <h1
          className="
            mt-6
            text-5xl
            md:text-7xl
            xl:text-8xl
            font-black
          "
        >
          NOMBRE DE TU SAGA
        </h1>

        <p
          className="
            mt-8
            text-lg
            md:text-xl
            text-zinc-400
            max-w-3xl
            mx-auto
          "
        >
          Una historia de civilizaciones,
          guerras interestelares,
          misterios ancestrales y personajes
          que cambiarán el destino de la galaxia.
        </p>

        <div
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-4
          "
        >
          <Link
            href="/libros"
            className="
              px-8
              py-4
              rounded-xl
              bg-cyan-500
              text-black
              font-bold
            "
          >
            Leer la Saga
          </Link>

          <Link
            href="/universo"
            className="
              px-8
              py-4
              rounded-xl
              border
              border-cyan-500
            "
          >
            Explorar Universo
          </Link>
        </div>
      </div>
    </section>
  );
}