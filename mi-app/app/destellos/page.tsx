"use client";

import { useMemo, useState } from "react";

import { flashes } from "@/data/flashes";
import { characters } from "@/data/characters";
import SectionTitle from "@/components/shared/SectionTitle";

const colorMap: Record<string, string> = {
  Naranja: "bg-orange-500",
  Celeste: "bg-sky-400",
  Rojo: "bg-red-500",
  Verde: "bg-green-500",
  Morado: "bg-purple-500",
  Rosa: "bg-pink-400",
  Blanco: "bg-white",

  Amarillo: "bg-yellow-500",
  Aguamarina: "bg-teal-300",
  Azul: "bg-blue-700",
};

const glowMap: Record<string, string> = {
  Naranja: "hover:shadow-orange-500/20",
  Celeste: "hover:shadow-sky-400/20",
  Rojo: "hover:shadow-red-500/20",
  Verde: "hover:shadow-green-500/20",
  Morado: "hover:shadow-purple-500/20",
  Rosa: "hover:shadow-pink-400/20",
  Blanco: "hover:shadow-white/20",
  Amarillo: "hover:shadow-yellow-500/20",
  Aguamarina: "hover:shadow-teal-300/20",
  Azul: "hover:shadow-blue-700/20",
};

const borderMap: Record<string, string> = {
  Naranja: "hover:border-orange-400/40",
  Celeste: "hover:border-sky-400/40",
  Rojo: "hover:border-red-400/40",
  Verde: "hover:border-green-400/40",
  Morado: "hover:border-purple-400/40",
  Rosa: "hover:border-pink-400/40",
  Blanco: "hover:border-white/40",
  Amarillo: "hover:border-yellow-400/40",
  Aguamarina: "hover:border-teal-300/40",
  Azul: "hover:border-blue-400/40",
};

export default function FlashesPage() {
  const [search] = useState("");
  const [visibleBearers, setVisibleBearers] = useState<Set<string>>(
    new Set()
  );

  const toggleBearer = (id: string) => {
    setVisibleBearers((prev) => {
      const next = new Set(prev);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  const filteredFlashes = useMemo(() => {
    const term = search.toLowerCase().trim();

    if (!term) return flashes;

    return flashes.filter(
      (flash) =>
        flash.name.toLowerCase().includes(term) ||
        flash.color.toLowerCase().includes(term) ||
        flash.ability.toLowerCase().includes(term) ||
        flash.era.toLowerCase().includes(term)
    );
  }, [search]);

  return (
    <main className="min-h-screen">

      <section className="py-4 md:py-6">

        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            title="Destellos"
            subtitle="Esta sección puede contener algunos spoilers de los libros. Específicamente al mencionar al portador de los Destellos."
          />


          <div
            className="
              mt-10
              grid
              grid-cols-2
              sm:grid-cols-3
              lg:grid-cols-5
              gap-4
              md:gap-6
            "
          >

            {filteredFlashes.map((flash) => {

              const bearer = characters.find(
                (c) => c.id === flash.bearerId
              );


              return (

                <article
                  key={flash.id}
                  className={`
                    group
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-gradient-to-b
                    from-zinc-900
                    via-zinc-950
                    to-black
                    shadow-lg

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:shadow-xl

                    ${glowMap[flash.color] ?? ""}
                    ${borderMap[flash.color] ?? ""}
                  `}
                >

                  {/* Imagen */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={flash.image}
                      alt={flash.name}
                      className="
                        w-full
                        h-full
                        object-cover
                        object-[28%_center]
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-x-0
                        bottom-0
                        h-28
                        bg-gradient-to-t
                        from-black
                        via-black/50
                        to-transparent
                      "
                    />
                  </div>



                  {/* Contenido */}

                  <div className="p-4">


                    <div className="flex items-center gap-2 mb-3">

                      <div
                        className={`
                          w-4
                          h-4
                          rounded-full

                          ring-2
                          ring-white/20

                          shadow-lg

                          ${colorMap[flash.color] ?? "bg-cyan-500"}
                        `}
                      />


                      <span
                        className="
                          text-xs
                          uppercase
                          tracking-wider
                          text-zinc-400
                        "
                      >
                        {flash.color}
                      </span>

                    </div>



                    <h2
                      className="
                        text-sm
                        md:text-base

                        font-semibold
                        leading-tight

                        text-white

                        transition-colors
                        duration-300

                        group-hover:text-cyan-300

                        whitespace-pre-line
                      "
                    >
                      {flash.name}
                    </h2>



                    <div className="mt-4 text-xs md:text-sm">


                      {visibleBearers.has(flash.id) ? (

                        <button
                          onClick={() => toggleBearer(flash.id)}
                          className="
                            animate-in
                            fade-in
                            slide-in-from-top-2

                            text-zinc-300

                            hover:text-white

                            transition-colors
                          "
                        >
                          Portador:{" "}
                          <span className="text-cyan-300">
                            {bearer?.name ?? "Desconocido"}
                          </span>
                        </button>


                      ) : (


                        <button
                          onClick={() => toggleBearer(flash.id)}
                          className="
                            text-cyan-400

                            hover:text-cyan-300

                            transition-colors
                          "
                        >
                          Ver portador
                        </button>

                      )}


                    </div>


                  </div>


                </article>

              );

            })}

          </div>



          {filteredFlashes.length === 0 && (

            <p
              className="
                text-center
                text-zinc-500
                mt-10
              "
            >
              No se encontraron destellos.
            </p>

          )}


        </div>

      </section>

    </main>
  );
}