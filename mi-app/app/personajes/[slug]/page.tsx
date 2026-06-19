import { notFound } from "next/navigation";
import Link from "next/link";

import { characters } from "@/data/characters";
import { races } from "@/data/races";
import { planets } from "@/data/planets";
import { sectors } from "@/data/sectors";

import EntityHeader from "@/components/shared/EntityHeader";
import InfoPanel from "@/components/shared/InfoPanel";

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const character = characters.find(
    (c) => c.slug === slug
  );

  if (!character) {
    notFound();
  }

  const race = races.find(
    (r) => r.id === character.raceId
  );

  const homeworld = race
    ? planets.find(
        (p) => p.id === race.homeworldId
      )
    : undefined;

  const sector = homeworld
    ? sectors.find(
        (s) => s.id === homeworld.sectorId
      )
    : undefined;

  return (
    <main>
      <EntityHeader
        title={character.name}
        description={character.description}
        image={character.image}
      />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* CONTENIDO */}
          <div className="lg:col-span-2">

            <article className="rounded-2xl border border-cyan-900/20 bg-zinc-900 p-8">
              <h2 className="text-2xl font-bold mb-4">
                Historia
              </h2>

              <p className="text-zinc-300 leading-8">
                {character.description}
              </p>
            </article>

          </div>

          {/* SIDEBAR */}
          <div>

            <InfoPanel
              title="Datos"
              items={[
                {
                  label: "Raza",
                  value: race?.name ?? "Desconocida",
                },
                {
                  label: "Planeta natal",
                  value:
                    homeworld?.name ??
                    "Desconocido",
                },
                {
                  label: "Sector",
                  value:
                    sector?.name ??
                    "Desconocido",
                },
              ]}
            />

            {/* RELACIONES */}
            {/*character.relationships &&
              character.relationships.length > 0 && (
                <div className="mt-8 rounded-2xl border border-cyan-900/20 bg-zinc-900 p-6">
                  <h3 className="text-lg font-bold mb-4">
                    Relaciones
                  </h3>

                  <div className="space-y-3">

                    {character.relationships.map(
                      (relation, index) => {
                        const relatedCharacter =
                          characters.find(
                            (c) =>
                              c.id ===
                              relation.characterId
                          );

                        if (!relatedCharacter)
                          return null;

                        return (
                          <div
                            key={index}
                            className="flex items-center justify-between gap-4"
                          >
                            <span className="text-zinc-500 text-sm">
                              {relation.label}
                            </span>

                            <Link
                              href={`/personajes/${relatedCharacter.slug}`}
                              className="text-cyan-400 hover:text-cyan-300 transition-colors text-right"
                            >
                              {relatedCharacter.name}
                            </Link>
                          </div>
                        );
                      }
                    )}

                  </div>
                </div>
              )*/}

          </div>

        </div>
      </section>
    </main>
  );
}