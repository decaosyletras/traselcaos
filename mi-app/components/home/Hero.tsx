"use client";

export default function Hero() {

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // 🔧 AJUSTE FINO DEL NAVBAR
    // Cambia este valor si tu navbar es más alto o más bajo
    const NAVBAR_HEIGHT = 30;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      NAVBAR_HEIGHT;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

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
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-zinc-950 to-zinc-950" />

      {/* FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 text-center">

        <p className="text-cyan-400 uppercase tracking-[0.3em] text-[10px] sm:text-sm">
          Ópera Espacial
        </p>

        <h1 className="mt-3 sm:mt-6 text-3xl sm:text-5xl md:text-7xl xl:text-8xl font-black leading-[1.05]">
          Tras el Caos de la Existencia
        </h1>

        <p className="mt-5 sm:mt-8 text-sm sm:text-lg md:text-xl text-zinc-400 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
          Una historia de civilizaciones, guerras interestelares,
          misterios ancestrales y personajes que cambiarán el destino del universo.
        </p>

        <div className="mt-7 sm:mt-10 flex flex-wrap justify-center gap-3">

          <button
            onClick={() => scrollToSection("saga")}
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
          </button>

          <button
            onClick={() => scrollToSection("universo")}
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
          </button>

        </div>
      </div>
    </section>
  );
}