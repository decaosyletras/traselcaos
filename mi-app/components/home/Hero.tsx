import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[85vh] md:min-h-[90vh]
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* BACKGROUND */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-cyan-950/20
          via-zinc-950
          to-zinc-950
        "
      />

      <div
        className="
          relative z-10
          max-w-5xl mx-auto
          px-5 sm:px-6
          text-center
        "
      >
        {/* SUBTITLE */}
        <p
          className="
            text-cyan-400
            uppercase
            tracking-[0.3em] md:tracking-[0.4em]
            text-[10px] sm:text-sm
          "
        >
          Ópera Espacial
        </p>

        {/* TITLE */}
        <h1
          className="
            mt-4 sm:mt-6
            text-3xl sm:text-5xl md:text-7xl xl:text-8xl
            font-black
            leading-[1.05]
          "
        >
          NOMBRE DE TU SAGA
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            mt-6 sm:mt-8
            text-sm sm:text-lg md:text-xl
            text-zinc-400
            max-w-2xl md:max-w-3xl
            mx-auto
            leading-relaxed
          "
        >
          Una historia de civilizaciones, guerras interestelares,
          misterios ancestrales y personajes que cambiarán el destino de la galaxia.
        </p>

        {/* BUTTONS */}
        <div
          className="
            mt-8 sm:mt-10
            flex flex-col sm:flex-row
            justify-center
            gap-3 sm:gap-4
          "
        >
          <Link
            href="/libros"
            className="
              w-full sm:w-auto
              px-6 sm:px-8
              py-3 sm:py-4
              rounded-xl
              bg-cyan-500
              text-black
              font-bold
              text-sm sm:text-base
              transition
              hover:bg-cyan-400
              hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
            "
          >
            Leer la Saga
          </Link>

          <Link
            href="/universo"
            className="
              w-full sm:w-auto
              px-6 sm:px-8
              py-3 sm:py-4
              rounded-xl
              border border-cyan-500/60
              text-sm sm:text-base
              text-cyan-300
              transition
              hover:border-cyan-400
              hover:text-cyan-200
            "
          >
            Explorar Universo
          </Link>
        </div>
      </div>
    </section>
  );
}