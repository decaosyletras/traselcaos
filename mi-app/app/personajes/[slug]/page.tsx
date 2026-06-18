import { notFound } from "next/navigation";
import Link from "next/link";

import { characters } from "@/data/characters";
import { races } from "@/data/races";
import { planets } from "@/data/planets";
import { books } from "@/data/books";

import EntityHeader from "@/components/shared/EntityHeader";
import InfoPanel from "@/components/shared/InfoPanel";
import AppearanceTimeline from "@/components/shared/AppearanceTimeline";
import RelatedEntities from "@/components/shared/RelatedEntities";

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const character = characters.find(
    (c) => c.slug === slug
  );

  if (!character) return notFound();

  const race = races.find(
    (r) => r.id === character.raceId
  );

  const planet = race
    ? planets.find((p) => p.id === race.homeworldId)
    : undefined;

  const appearances = Array.isArray(character.appearances)
    ? character.appearances
    : [];

  return (
    <main>

      <EntityHeader
        title={character.name}
        description={character.description}
        image={character.image}
      />

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">

            <article className="rounded-2xl bg-zinc-900 p-8">
              <p className="text-zinc-300 leading-8">
                {character.description}
              </p>
            </article>

            <AppearanceTimeline
              items={appearances.map((a) => ({
                book: a.bookId,
                era: a.eraId,
                faction: a.faction,
                organizations: a.organizations,
              }))}
            />

          </div>

          <div>

            <InfoPanel
              title="Datos"
              items={[
                {
                  label: "Raza",
                  value: race ? (
                    <Link href={`/razas/${race.slug}`}>
                      {race.name}
                    </Link>
                  ) : (
                    "Desconocido"
                  ),
                },
                {
                  label: "Planeta",
                  value: planet ? (
                    planet.name
                  ) : (
                    "Desconocido"
                  ),
                },
              ]}
            />

          </div>

        </div>

        <RelatedEntities
          title="Personajes Relacionados"
          entities={characters
            .filter((c) => c.id !== character.id)
            .slice(0, 3)
            .map((c) => ({
              title: c.name,
              href: `/personajes/${c.slug}`,
              image: c.image,
            }))}
        />

      </section>

    </main>
  );
}