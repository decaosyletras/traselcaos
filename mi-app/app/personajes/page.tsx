"use client";

import { useMemo, useState } from "react";

import { characters } from "@/data/characters";
import { races } from "@/data/races";
import { planets } from "@/data/planets";
import { sectors } from "@/data/sectors";
import SectionTitle from "@/components/shared/SectionTitle";

import SmartSearch from "@/components/shared/SmartSearch";

export default function CharactersPage() {
  const [search, setSearch] = useState("");

  const [raceFilter, setRaceFilter] = useState("");
  const [planetFilter, setPlanetFilter] = useState("");
  const [sectorFilter, setSectorFilter] = useState("");

  const racesMap = useMemo(
    () => Object.fromEntries(races.map((r) => [r.id, r])),
    []
  );

  const planetsMap = useMemo(
    () => Object.fromEntries(planets.map((p) => [p.id, p])),
    []
  );

  const sectorsMap = useMemo(
    () => Object.fromEntries(sectors.map((s) => [s.id, s])),
    []
  );

  const filteredCharacters = useMemo(() => {
    const term = search.toLowerCase().trim();

    return characters.filter((character) => {
      const race = racesMap[character.raceId];

      const planet = race
        ? planets.find((p) => p.id === race.homeworldId)
        : undefined;

      const sector = planet
        ? sectors.find((s) => s.id === planet.sectorId)
        : undefined;

      const matchesSearch =
        !term ||
        character.name.toLowerCase().includes(term);

      const matchesRace =
        !raceFilter || race?.id === raceFilter;

      const matchesPlanet =
        !planetFilter || planet?.id === planetFilter;

      const matchesSector =
        !sectorFilter || sector?.id === sectorFilter;

      return (
        matchesSearch &&
        matchesRace &&
        matchesPlanet &&
        matchesSector
      );
    });
  }, [
    search,
    raceFilter,
    planetFilter,
    sectorFilter,
    racesMap,
  ]);

  const searchItems = useMemo(
    () =>
      characters.map((character) => ({
        id: character.id,
        title: character.name,
      })),
    []
  );

  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">

          <SectionTitle
            title="personajes"
          />

          <SmartSearch
            value={search}
            onChange={setSearch}
            placeholder="Buscar personaje..."
            items={searchItems}
          />

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            <select
              value={raceFilter}
              onChange={(e) =>
                setRaceFilter(e.target.value)
              }
              className="
                rounded-xl
                bg-zinc-900
                border
                border-zinc-800
                px-4
                py-3
              "
            >
              <option value="">
                Todas las razas
              </option>

              {races.map((race) => (
                <option key={race.id} value={race.id}>
                  {race.name}
                </option>
              ))}
            </select>

            <select
              value={planetFilter}
              onChange={(e) =>
                setPlanetFilter(e.target.value)
              }
              className="
                rounded-xl
                bg-zinc-900
                border
                border-zinc-800
                px-4
                py-3
              "
            >
              <option value="">
                Todos los planetas
              </option>

              {planets.map((planet) => (
                <option key={planet.id} value={planet.id}>
                  {planet.name}
                </option>
              ))}
            </select>

            <select
              value={sectorFilter}
              onChange={(e) =>
                setSectorFilter(e.target.value)
              }
              className="
                rounded-xl
                bg-zinc-900
                border
                border-zinc-800
                px-4
                py-3
              "
            >
              <option value="">
                Todos los sectores
              </option>

              {sectors.map((sector) => (
                <option key={sector.id} value={sector.id}>
                  {sector.name}
                </option>
              ))}
            </select>

          </div>

          <div className="mt-8 space-y-4">
            {filteredCharacters.map((character) => {
              const race =
                racesMap[character.raceId];

              const planet = race
                ? planetsMap[race.homeworldId]
                : undefined;

              const sector = planet
                ? sectorsMap[planet.sectorId]
                : undefined;

              return (
                <article
                  key={character.id}
                  className="
                    rounded-xl
                    border
                    border-cyan-900/20
                    bg-zinc-900/50
                    p-5
                    md:p-6
                  "
                >
                  <h2 className="text-xl md:text-2xl font-bold">
                    {character.name}
                  </h2>

                  <div className="flex flex-wrap gap-2 text-sm mt-2">
                    <span className="text-cyan-400">
                      {race?.name}
                    </span>

                    {planet && (
                      <>
                        <span className="text-zinc-600">
                          •
                        </span>
                        <span className="text-zinc-400">
                          {planet.name}
                        </span>
                      </>
                    )}

                    {sector && (
                      <>
                        <span className="text-zinc-600">
                          •
                        </span>
                        <span className="text-zinc-400">
                          {sector.name}
                        </span>
                      </>
                    )}
                  </div>

                  <p className="mt-3 text-zinc-400 leading-7">
                    {character.description}
                  </p>
                </article>
              );
            })}
          </div>

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