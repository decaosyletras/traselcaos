"use client";

import { useMemo, useState } from "react";

import { races } from "@/data/races";
import { planets } from "@/data/planets";
import { books } from "@/data/books";

import EntityGrid from "@/components/shared/EntityGrid";
import EntityCard from "@/components/shared/EntityCard";
import SectionTitle from "@/components/shared/SectionTitle";
import SearchBar from "@/components/shared/SearchBar";

export default function RacesPage() {
  const [search, setSearch] = useState("");

  const filteredRaces = useMemo(() => {
    const term = search.toLowerCase().trim();

    if (!term) return races;

    return races.filter((race) => {
      const planetName =
        planets.find((p) => p.id === race.homeworldId)?.name ?? "";

      return (
        race.name.toLowerCase().includes(term) ||
        planetName.toLowerCase().includes(term)
      );
    });
  }, [search]);

  const racesByBook = books.map((book) => ({
    book,
    races: filteredRaces.filter((race) =>
      race.FirstBook.includes(book.id)
    ),
  }));

  const hasResults = racesByBook.some(
    (group) => group.races.length > 0
  );

  return (
    <main className="min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            title="Especies"
            subtitle="Civilizaciones conocidas del universo."
          />

          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Buscar por especie o planeta..."
          />

          {racesByBook.map(({ book, races }) => {
            if (races.length === 0) return null;

            return (
              <div key={book.id} className="mt-14">
                <h2 className="mb-6 text-2xl md:text-3xl font-bold text-cyan-400">
                  {book.title}
                </h2>

                <EntityGrid>
                  {races.map((race) => {
                    const planet = planets.find(
                      (p) => p.id === race.homeworldId
                    );

                    return (
                      <EntityCard
                        key={race.id}
                        title={race.name}
                        description={
                          planet
                            ? `Planeta: ${planet.name}`
                            : race.description
                        }
                        image={race.image}
                        href={`/razas/${race.slug}`}
                        imageRatio="square"
                      />
                    );
                  })}
                </EntityGrid>
              </div>
            );
          })}

          {!hasResults && (
            <p className="mt-12 text-center text-zinc-500">
              No se encontraron especies.
            </p>
          )}

        </div>
      </section>
    </main>
  );
}