"use client";

import { useMemo, useState } from "react";

import { races } from "@/data/races";
import { planets } from "@/data/planets";
import { books } from "@/data/books";

import SmartSearch from "@/components/shared/SmartSearch";
import EntityGrid from "@/components/shared/EntityGrid";
import EntityCard from "@/components/shared/EntityCard";
import SectionTitle from "@/components/shared/SectionTitle";

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

  const searchItems = useMemo(
    () =>
      races.map((race) => ({
        id: race.id,
        title: race.name,
        description:
          planets.find((p) => p.id === race.homeworldId)
            ?.name ?? "",
      })),
    []
  );

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

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-xl">
            Especies
          </p>

          {/* SEARCH PRO */}
          <SmartSearch
            value={search}
            onChange={setSearch}
            placeholder="Buscar especie o planeta..."
            items={searchItems}
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