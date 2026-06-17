interface TimelineItem {
  book: string;
  era: string;
  role?: string;
  alignment?: string;
  faction?: string;
  organizations?: string[];
}

interface Props {
  items: TimelineItem[];
}

export default function AppearanceTimeline({
  items,
}: Props) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Apariciones
      </h2>

      <div className="relative">
        <div
          className="
            absolute left-4 top-0 bottom-0
            w-px bg-cyan-900/40
          "
        />

        <div className="space-y-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative pl-12"
            >
              <div
                className="
                  absolute left-1.5 top-2
                  w-5 h-5 rounded-full
                  bg-cyan-400
                  shadow-lg shadow-cyan-500/50
                "
              />

              <div
                className="
                  rounded-xl
                  border border-cyan-900/20
                  bg-zinc-900
                  p-5
                "
              >
                <div className="flex flex-wrap gap-2">
                  <span
                    className="
                      px-3 py-1 rounded-full
                      bg-cyan-500/10
                      text-cyan-300
                      text-sm
                    "
                  >
                    {item.book}
                  </span>

                  <span
                    className="
                      px-3 py-1 rounded-full
                      bg-zinc-800
                      text-zinc-300
                      text-sm
                    "
                  >
                    {item.era}
                  </span>
                </div>

                {item.role && (
                  <p className="mt-4 font-semibold">
                    {item.role}
                  </p>
                )}

                {item.alignment && (
                  <p className="mt-2 text-zinc-400">
                    Alineación: {item.alignment}
                  </p>
                )}

                {item.faction && (
                  <p className="mt-2 text-zinc-400">
                    Facción: {item.faction}
                  </p>
                )}

                {item.organizations?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.organizations.map(
                      (organization) => (
                        <span
                          key={organization}
                          className="
                            px-3 py-1 rounded-full
                            bg-cyan-900/20
                            text-cyan-200
                            text-sm
                          "
                        >
                          {organization}
                        </span>
                      )
                    )}
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