interface TimelineItem {
  book: string;
  era: string;
  text?: string;
  role?: string;
  alignment?: string;
  faction?: string;
  organizations?: string[];
}

interface Props {
  items: TimelineItem[];
}

export default function AppearanceTimeline({ items }: Props) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Apariciones
      </h2>

      <div className="relative">
        {/* línea central */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-cyan-900/40" />

        <div className="space-y-10">
          {items.map((item, index) => (
            <div key={index} className="relative pl-12">

              {/* nodo */}
              <div className="absolute left-1.5 top-2 w-5 h-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50" />

              <div className="rounded-xl border border-cyan-900/20 bg-zinc-900 p-5 hover:border-cyan-500/30 transition">

                {/* header */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-sm">
                    {item.book}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-sm">
                    {item.era}
                  </span>
                </div>

                {/* texto narrativo (CLAVE) */}
                {item.text && (
                  <p className="mt-4 text-zinc-300 leading-7">
                    {item.text}
                  </p>
                )}

                {/* role opcional */}
                {item.role && (
                  <p className="mt-4 font-semibold text-zinc-200">
                    {item.role}
                  </p>
                )}

                {/* alineación */}
                {item.alignment && (
                  <p className="mt-2 text-zinc-400">
                    Alineación:{" "}
                    <span className="text-zinc-200">
                      {item.alignment}
                    </span>
                  </p>
                )}

                {/* facción */}
                {item.faction && (
                  <p className="mt-2 text-zinc-400">
                    Facción:{" "}
                    <span className="text-zinc-200">
                      {item.faction}
                    </span>
                  </p>
                )}

                {/* organizaciones */}
                {item.organizations?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.organizations.map((org) => (
                      <span
                        key={org}
                        className="
                          px-3 py-1 rounded-full
                          bg-cyan-900/20
                          text-cyan-200
                          text-sm
                        "
                      >
                        {org}
                      </span>
                    ))}
                  </div>
                ) : null}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}