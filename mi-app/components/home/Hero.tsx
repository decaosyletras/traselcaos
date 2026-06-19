import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[55vh] md:min-h-[90vh]
        flex
        items-start md:items-center
        justify-center
        overflow-hidden
        pt-20 sm:pt-24 md:pt-0
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

      {/* FADE HACIA CONTENIDO (clave UX) */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-zinc-950
          to-transparent
        "
      />

      <div
        className="
          relative z-10
          max-w-5xl mx-auto
          px-5 sm:px-6
          text-center
          translate-y-0 md:translate-y-0
        "
      >
        {/* SUBTITLE */}
        <p
          className="
            text-cyan-400
            uppercase
            tracking-[0.3em]
            text-[10px] sm:text-sm
          "
        >
          Ópera Espacial
        </p>

        {/* TITLE */}
        <h1
          className="
            mt-3 sm:mt-6
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
            mt-5 sm:mt-8
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
            mt-7 sm:mt-10
            flex flex-wrap
            justify-center
            gap-3
          "
        >
          <Link
            href="/libros"
            className="
              px-5 py-2.5
              rounded-full
              bg-cyan-500
              text-black
              font-semibold
              text-sm
              transition
              hover:bg-cyan-400
              hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
            "
          >
            Leer la Saga
          </Link>

          <Link
            href="/universo"
            className="
              px-5 py-2.5
              rounded-full
              border border-cyan-500/60
              text-sm
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