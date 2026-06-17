import { characters } from "@/data/characters";
import EntityGrid from "@/components/shared/EntityGrid";
import EntityCard from "@/components/shared/EntityCard";

export default function CharactersPage() {
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
            Personajes
          </h1>

          <EntityGrid>

            {characters.map((character) => (
              <EntityCard
                key={character.id}
                title={character.name}
                description={character.description}
                image={character.image}
                href={`/personajes/${character.slug}`}
                imageRatio="square"
              />
            ))}

          </EntityGrid>

        </div>

      </section>

    </main>
  );
}