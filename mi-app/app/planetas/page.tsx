import { planets } from "@/data/planets";
import EntityGrid from "@/components/shared/EntityGrid";
import EntityCard from "@/components/shared/EntityCard";

export default function PlanetsPage() {
  return (
    <main className="min-h-screen">

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h1
            className="
              text-5xl
              font-bold
              text-center
              mb-16
            "
          >
            Planetas
          </h1>

          <EntityGrid>

            {planets.map((planet) => (
              <EntityCard
                key={planet.id}
                title={planet.name}
                description={planet.description}
                image={planet.image}
                href={`/planetas/${planet.slug}`}
                imageRatio="square"
              />
            ))}

          </EntityGrid>

        </div>

      </section>

    </main>
  );
}