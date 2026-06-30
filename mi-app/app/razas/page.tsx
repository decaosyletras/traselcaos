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
          planets.find((p) => p.id === race.homeworldId)?.name ?? "",
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
    <main>
      <section className="py-4 md:py-6">
        <div className="mx-auto max-w-[1500px] px-5 xl:px-8">
          <SectionTitle title="Especies" />

          <div className="mt-8">
            <SmartSearch
              value={search}
              onChange={setSearch}
              placeholder="Buscar especie o planeta..."
              items={searchItems}
            />
          </div>

          <div className="mt-12">
            {racesByBook.map(({ book, races }) => {
              if (!races.length) return null;

              return (
                <section
                  key={book.id}
                  className="mt-16 first:mt-0"
                >
                  <h2 className="mb-8 border-b border-zinc-800 pb-3 text-2xl font-semibold tracking-tight text-cyan-300">
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
                </section>
              );
            })}

            {!hasResults && (
              <p className="mt-20 text-center text-zinc-500">
                No se encontraron especies.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}