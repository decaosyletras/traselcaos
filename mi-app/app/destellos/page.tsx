"use client";

import { useMemo, useState } from "react";

import { flashes } from "@/data/flashes";
import { characters } from "@/data/characters";

import SearchBar from "@/components/shared/SearchBar";

const colorMap: Record<string, string> = {
  Azul: "bg-blue-500",
  Rojo: "bg-red-500",
  Verde: "bg-green-500",
  Morado: "bg-purple-500",
  Amarillo: "bg-yellow-500",
};

export default function FlashesPage() {
  const [search, setSearch] = useState("");

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
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12">
            Destellos
          </h1>

          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Buscar destello..."
          />

          <div
            className="
              mt-8
              grid
              grid-cols-2
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
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-cyan-900/20
                    bg-zinc-900
                    hover:border-cyan-500/30
                    transition-all
                    duration-300
                  "
                >
                  {/* Imagen */}

                  <div className="aspect-square overflow-hidden">
                    <img
                      src={flash.image}
                      alt={flash.name}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-500
                        hover:scale-105
                      "
                    />
                  </div>

                  {/* Contenido */}

                  <div className="p-3 md:p-4">

                    <div className="flex items-center gap-2 mb-2">

                      <div
                        className={`
                          w-3
                          h-3
                          rounded-full
                          ${colorMap[flash.color] ?? "bg-cyan-500"}
                        `}
                      />

                      <span className="text-xs text-zinc-400">
                        {flash.color}
                      </span>

                    </div>

                    <h2 className="text-sm md:text-base font-bold leading-tight">
                      {flash.name}
                    </h2>

                    <div className="mt-3 text-xs md:text-sm">

                      <span className="text-zinc-500">
                        Portador:
                      </span>

                      <p className="text-zinc-300 mt-1">
                        {bearer?.name ?? "Desconocido"}
                      </p>

                    </div>

                  </div>
                </article>
              );
            })}
          </div>

          {filteredFlashes.length === 0 && (
            <p className="text-center text-zinc-500 mt-10">
              No se encontraron destellos.
            </p>
          )}

        </div>
      </section>
    </main>
  );
}