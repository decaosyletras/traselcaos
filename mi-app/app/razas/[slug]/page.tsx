import { notFound } from "next/navigation";

import { races } from "@/data/races";
import { planets } from "@/data/planets";
import { sectors } from "@/data/sectors";
import { books } from "@/data/books";

import Link from "next/link";

import EntityHeader from "@/components/shared/EntityHeader";
import InfoPanel from "@/components/shared/InfoPanel";
import AppearanceTimeline from "@/components/shared/AppearanceTimeline";

export default async function RacePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const race = races.find((r) => r.slug === slug);

  if (!race) return notFound();

  const homeworld = planets.find(
    (p) => p.id === race.homeworldId
  );

  const sector = homeworld
    ? sectors.find((s) => s.id === homeworld.sectorId)
    : undefined;

  const appearances = Array.isArray(race.appearances)
    ? race.appearances
    : [];

  return (
    <main>
      <EntityHeader
        title={race.name}
        description={race.description}
        image={race.image}
      />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">

            <article className="rounded-2xl border border-cyan-900/20 bg-zinc-900 p-8">
              <h2 className="text-2xl font-bold mb-4">
                Historia
              </h2>

              <p className="text-zinc-300 leading-8">
                {race.description}
              </p>
            </article>

            <AppearanceTimeline
              items={appearances.map((a) => ({
                book: a.bookId,
                era: a.eraId,
                alignment: a.alignment,
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
                  label: "Planeta natal",
                  value: homeworld ? (homeworld.name
                  ) : (
                    "Desconocido"
                  ),
                },
                {
                  label: "Sector",
                  value: sector ? (sector.name
                  ) : (
                    "Desconocido"
                  ),
                },
                {
                  label: "Apariciones",
                  value: appearances.length,
                },
              ]}
            />

            {/* 📚 LIBROS */}
            {appearances.length > 0 && (
              <div className="mt-8 rounded-2xl border border-cyan-900/20 bg-zinc-900 p-6">
                <h3 className="text-lg font-bold mb-4">
                  Apariciones en libros
                </h3>

                <div className="space-y-2">
                  {appearances.map((a, index) => {
                    const book = books.find(
                      (b) => b.id === a.bookId
                    );

                    if (!book) return null;

                    return (
                      <Link
                        key={index}
                        href={`/libros/${book.slug}`}
                        className="block text-cyan-400 hover:text-cyan-300"
                      >
                        {book.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

        </div>
      </section>
    </main>
  );
}