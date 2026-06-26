import { notFound } from "next/navigation";

import { races } from "@/data/races";
import { planets } from "@/data/planets";
import { sectors } from "@/data/sectors";
import { books } from "@/data/books";
import { eras } from "@/data/eras";

import Link from "next/link";

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

  const homeworld = planets.find((p) => p.id === race.homeworldId);

  const sector = homeworld
    ? sectors.find((s) => s.id === homeworld.sectorId)
    : undefined;

  const appearances = Array.isArray(race.appearances)
    ? race.appearances
    : [];

  const timelineItems = appearances.map((a) => {
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
  });

  return (
    <main>
      {/* HEADER */}
      <section className="bg-zinc-950 border-b border-cyan-900/20">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-12">
          <div className="flex flex-row gap-4 md:gap-10 items-start">

            {/* LEFT */}
            <div className="w-[90px] md:w-[220px] flex-shrink-0">
              {race.image && (
                <div className="rounded-2xl overflow-hidden border border-cyan-900/30 shadow-lg w-[90px] md:w-[220px]">
                  <img
                    src={race.image}
                    alt={race.name}
                    className="w-[90px] h-[90px] md:w-[220px] md:h-[220px] object-cover"
                  />
                </div>
              )}

              <h1 className="mt-3 md:mt-4 text-xl md:text-2xl font-bold tracking-wide text-white">
                {race.name}
              </h1>

              <div className="mt-2 h-[2px] w-10 md:w-12 bg-cyan-500/60 rounded-full" />
            </div>

            {/* RIGHT */}
            <div className="flex-1 self-start">
              <div className="rounded-2xl border border-cyan-900/20 bg-zinc-900/60 backdrop-blur-sm p-5 md:p-8">
                <p className="text-zinc-300 leading-7 md:leading-8 text-sm md:text-base">
                  {race.description}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* MAIN */}
          <div className="lg:col-span-2">

            {/* MÓVIL */}
            <div className="lg:hidden flex flex-col gap-8">

              {appearances.length > 0 && (
                <div className="rounded-2xl border border-cyan-900/20 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-white mb-4">
                    Apariciones en libros
                  </h3>

                  <div className="divide-y divide-cyan-900/20">
                    {appearances.map((a, index) => {
                      const book = books.find((b) => b.id === a.bookId);

                      if (!book) return null;

                      return (
                        <Link
                          key={index}
                          href={`/libros/${book.slug}`}
                          className="block py-3 px-2 rounded-lg text-cyan-300 hover:text-white hover:bg-cyan-500/10 hover:pl-4 transition-all duration-200"
                        >
                          {book.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              <AppearanceTimeline items={timelineItems} />
            </div>

            {/* DESKTOP */}
            <div className="hidden lg:block">
              <AppearanceTimeline items={timelineItems} />
            </div>

          </div>

          {/* SIDEBAR DESKTOP */}
          <aside className="hidden lg:block space-y-6">
            {/*<InfoPanel
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
            />*/}

            {appearances.length > 0 && (
              <div className="rounded-2xl border border-cyan-900/20 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 shadow-lg">
                <h3 className="text-lg font-bold text-white mb-4">
                  Apariciones en libros
                </h3>

                <div className="divide-y divide-cyan-900/20">
                  {appearances.map((a, index) => {
                    const book = books.find((b) => b.id === a.bookId);

                    if (!book) return null;

                    return (
                      <Link
                        key={index}
                        href={`/libros/${book.slug}`}
                        className="block py-3 px-2 rounded-lg text-cyan-300 hover:text-white hover:bg-cyan-500/10 hover:pl-4 transition-all duration-200"
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
      </section>
    </main>
  );
}