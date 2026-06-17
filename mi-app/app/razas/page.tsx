import { races } from "@/data/races";
import EntityGrid from "@/components/shared/EntityGrid";
import EntityCard from "@/components/shared/EntityCard";
import SectionTitle from "@/components/shared/SectionTitle";

export default function RacesPage() {
  return (
    <main className="min-h-screen">

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            title="Razas"
            subtitle="Civilizaciones conocidas del universo."
          />

          <EntityGrid>

            {races.map((race) => (
              <EntityCard
                key={race.id}
                title={race.name}
                description={race.description}
                image={race.image}
                href={`/razas/${race.slug}`}
              />
            ))}

          </EntityGrid>

        </div>

      </section>

    </main>
  );
}