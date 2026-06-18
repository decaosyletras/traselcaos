"use client";

import { useMemo, useState } from "react";
import { flashes } from "@/data/flashes";
import { characters } from "@/data/characters";
import SearchBar from "@/components/shared/SearchBar";
import Link from "next/link";

export default function FlashesPage() {
  const [search, setSearch] = useState("");

  const filteredFlashes = useMemo(() => {
    const term = search.toLowerCase().trim();

    if (!term) return flashes;

    return flashes.filter((flash) =>
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
            placeholder="Buscar destello, color, habilidad o era..."
          />

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">

            {filteredFlashes.map((flash) => {
              const bearer = characters.find(
                (c) => c.id === flash.bearerId
              );

              return (
                <div
                  key={flash.id}
                  className="
                    rounded-xl
                    border
                    border-cyan-900/20
                    bg-zinc-900
                    p-3 md:p-5
                    transition
                    hover:border-cyan-500/50
                  "
                >
                  {/* Link al detalle */}
                  <Link href={`/destellos/${flash.slug}`}>
                    <h2 className="text-sm md:text-lg font-bold">
                      {flash.name}
                    </h2>

                    <p className="text-xs text-zinc-400 mt-1">
                      {flash.color}
                    </p>

                    <p className="text-xs text-zinc-400">
                      {flash.ability}
                    </p>

                    <p className="text-xs text-zinc-400">
                      {flash.era}
                    </p>
                  </Link>

                  {/* Link al personaje (SEPARADO, sin anidar links) */}
                  {bearer && (
                    <Link
                      href={`/personajes/${bearer.slug}`}
                      className="mt-3 inline-block text-xs text-cyan-400 hover:text-cyan-300"
                    >
                      Portador: {bearer.name}
                    </Link>
                  )}
                </div>
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