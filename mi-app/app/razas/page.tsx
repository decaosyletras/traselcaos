"use client";

import { useMemo, useState } from "react";
import { races } from "@/data/races";
import EntityGrid from "@/components/shared/EntityGrid";
import EntityCard from "@/components/shared/EntityCard";
import SectionTitle from "@/components/shared/SectionTitle";
import SearchBar from "@/components/shared/SearchBar";

export default function RacesPage() {
  const [search, setSearch] = useState("");

  const filteredRaces = useMemo(() => {
    const term = search.toLowerCase().trim();

    if (!term) return races;

    return races.filter(
      (race) =>
        race.name.toLowerCase().includes(term) ||
        race.homeworld.toLowerCase().includes(term)
    );
  }, [search]);

  return (
    <main className="min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Razas"
            subtitle="Civilizaciones conocidas del universo."
          />

          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Buscar por raza o planeta..."
          />

          <EntityGrid>
            {filteredRaces.map((race) => (
              <EntityCard
                key={race.id}
                title={race.name}
                description={race.description}
                image={race.image}
                href={`/razas/${race.slug}`}
                imageRatio="square"
              />
            ))}
          </EntityGrid>

          {filteredRaces.length === 0 && (
            <p className="mt-12 text-center text-zinc-500">
              No se encontraron razas.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}