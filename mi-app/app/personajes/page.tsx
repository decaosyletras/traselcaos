"use client";

import { useMemo, useState } from "react";

import { characters } from "@/data/characters";
import { races } from "@/data/races";

import EntityGrid from "@/components/shared/EntityGrid";
import EntityCard from "@/components/shared/EntityCard";
import SearchBar from "@/components/shared/SearchBar";

export default function CharactersPage() {
  const [search, setSearch] = useState("");

  // Mapa para resolver raceId -> nombre de raza
  const racesMap = useMemo(
    () =>
      Object.fromEntries(
        races.map((race) => [race.id, race])
      ),
    []
  );

  const filteredCharacters = useMemo(() => {
    const term = search.toLowerCase().trim();

    if (!term) return characters;

    return characters.filter(
      (character) =>
        character.name.toLowerCase().includes(term) ||
        character.description.toLowerCase().includes(term)
    );
  }, [search]);

  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1
            className="
              text-3xl
              md:text-5xl
              font-bold
              text-center
              mb-8
              md:mb-12
            "
          >
            Personajes
          </h1>

          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Buscar personaje..."
          />

          <EntityGrid>
            {filteredCharacters.map((character) => (
              <EntityCard
                key={character.id}
                title={character.name}
                description={
                  racesMap[character.raceId]?.name ??
                  "Raza desconocida"
                }
                image={character.image}
                href={`/personajes/${character.slug}`}
                imageRatio="square"
              />
            ))}
          </EntityGrid>

          {filteredCharacters.length === 0 && (
            <p className="text-center text-zinc-500 mt-10">
              No se encontraron personajes.
            </p>
          )}

        </div>
      </section>
    </main>
  );
}