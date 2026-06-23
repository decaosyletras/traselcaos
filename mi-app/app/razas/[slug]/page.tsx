import { notFound } from "next/navigation";

import { races } from "@/data/races";
import { planets } from "@/data/planets";
import { sectors } from "@/data/sectors";
import { books } from "@/data/books";
import { eras } from "@/data/eras";

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
        description={race.summary}
        image={race.image}
      />

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* MAIN */}
          <div className="lg:col-span-2 space-y-8">

            <article className="rounded-2xl border border-cyan-900/20 bg-zinc-900 p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Historia
              </h2>

              <p className="text-zinc-300 leading-7 md:leading-8">
                {race.description}
              </p>
            </article>

            <AppearanceTimeline
              items={appearances.map((a) => {
                const book = books.find((b) => b.id === a.bookId);
                const era = eras.find((e) => e.id === a.eraId);

                return {
                  book: book?.title ?? "Desconocido",
                  era: era?.name ?? "Desconocido",
                  text: a.text,
                  alignment: a.alignment,
                  faction: a.faction,
                  organizations: a.organizations,
                };
              })}
            />

          </div>

          {/* DESKTOP SIDEBAR */}
          <aside className="hidden lg:block space-y-6">

            <InfoPanel
              title="Datos"
              items={[
                {
                  label: "Planeta natal",
                  value: homeworld?.name ?? "Desconocido",
                },
                {
                  label: "Sector",
                  value: sector?.name ?? "Desconocido",
                },
              ]}
            />

            {appearances.length > 0 && (
              <div className="rounded-2xl border border-cyan-900/20 bg-zinc-900 p-6">
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

          </aside>

        </div>

        {/* MOBILE ORDER FIX (ESTO ES CLAVE) */}
        <div className="lg:hidden mt-8 space-y-6">

          {/* DATOS PRIMERO */}
          <InfoPanel
            title="Datos"
            items={[
              {
                label: "Planeta natal",
                value: homeworld?.name ?? "Desconocido",
              },
              {
                label: "Sector",
                value: sector?.name ?? "Desconocido",
              },
            ]}
          />

          {/* APARICIONES PRIMERO QUE LIBROS */}
          {appearances.length > 0 && (
            <div className="rounded-2xl border border-cyan-900/20 bg-zinc-900 p-6">
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

      </section>
    </main>
  );
}