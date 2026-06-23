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
      {/* HEADER (desktop sigue igual) */}
      <EntityHeader
        title={race.name}
        description={race.summary}
        image={race.image}
      />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* MAIN CONTENT */}
          <div className="lg:col-span-2">

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
                const book = books.find(
                  (b) => b.id === a.bookId
                );

                const era = eras.find(
                  (e) => e.id === a.eraId
                );

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

          {/* SIDEBAR DESKTOP (igual) */}
          <div className="hidden lg:block">
            <InfoPanel
              title="Datos"
              items={[
                {
                  label: "Planeta natal",
                  value: homeworld
                    ? homeworld.name
                    : "Desconocido",
                },
                {
                  label: "Sector",
                  value: sector
                    ? sector.name
                    : "Desconocido",
                },
              ]}
            />

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

          {/* MOBILE INFO BLOCK (NUEVO) */}
          <div className="lg:hidden">
            <div className="flex gap-4 items-start rounded-2xl border border-cyan-900/20 bg-zinc-900 p-4">

              {/* imagen pequeña */}
              <img
                src={race.image}
                alt={race.name}
                className="w-16 h-16 rounded-lg object-cover"
              />

              <div className="flex-1">

                <h2 className="text-lg font-bold leading-tight">
                  {race.name}
                </h2>

                <div className="mt-2 text-sm text-zinc-400 space-y-1">

                  <p>
                    <span className="text-zinc-500">
                      Planeta:
                    </span>{" "}
                    {homeworld?.name ??
                      "Desconocido"}
                  </p>

                  <p>
                    <span className="text-zinc-500">
                      Sector:
                    </span>{" "}
                    {sector?.name ?? "Desconocido"}
                  </p>

                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}