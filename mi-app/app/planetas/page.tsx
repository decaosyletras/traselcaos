"use client";

import { useMemo, useState } from "react";
import { planets } from "@/data/planets";
import { sectors } from "@/data/sectors";

import EntityGrid from "@/components/shared/EntityGrid";
import EntityCard from "@/components/shared/EntityCard";
import SearchBar from "@/components/shared/SearchBar";

export default function PlanetsPage() {
  const [search, setSearch] = useState("");

  const filteredPlanets = useMemo(() => {
    const term = search.toLowerCase().trim();

    if (!term) return planets;

    return planets.filter(
      (planet) =>
        planet.name.toLowerCase().includes(term) ||
        planet.description.toLowerCase().includes(term)
    );
  }, [search]);

  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12">
            Planetas
          </h1>

          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Buscar planeta..."
          />

          {/* 🌌 AGRUPADO POR SECTOR */}
          {sectors.map((sector) => {
            const planetsInSector = filteredPlanets.filter(
              (p) => p.sectorId === sector.id
            );

            if (planetsInSector.length === 0) return null;

            return (
              <section key={sector.id} className="mb-12">

                <h2 className="text-xl md:text-2xl font-bold mb-4 text-cyan-400">
                  {sector.name}
                </h2>

                <EntityGrid>
                  {planetsInSector.map((planet) => (
                    <EntityCard
                      key={planet.id}
                      title={planet.name}
                      description={planet.description}
                      /*image={planet.image}*/
                      href={`/planetas/${planet.slug}`}
                      imageRatio="square"
                    />
                  ))}
                </EntityGrid>

              </section>
            );
          })}

          {filteredPlanets.length === 0 && (
            <p className="text-center text-zinc-500 mt-10">
              No se encontraron planetas.
            </p>
          )}

        </div>
      </section>
    </main>
  );
}