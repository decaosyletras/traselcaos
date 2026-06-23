import { eras, positionFromTemi } from "@/data/eras";

export default function CronologiaPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* HERO */}
      <section className="py-20 md:py-28 text-center">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-xl">
          Cronología
        </p>
        
      </section>

      {/* ERAS */}
      <section className="max-w-7xl mx-auto px-6 pb-24 space-y-10">

        {eras.map((era) => (
          <article
            key={era.id}
            className="
              rounded-3xl
              border
              border-cyan-900/30
              bg-gradient-to-b
              from-zinc-900
              to-zinc-950
              p-6 md:p-8
            "
          >
            <h2 className="text-2xl font-bold text-cyan-400">
              {era.name}
            </h2>

            {/* TIMELINE HEX REAL */}
            <div className="relative h-24 mt-10">

              {/* línea base */}
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-cyan-500/40" />

              {/* labels extremos */}
              <div className="absolute top-0 left-0 text-[10px] text-zinc-500">
                0x00000000
              </div>

              <div className="absolute top-0 right-0 text-[10px] text-zinc-500">
                0xFFFFFFFF
              </div>

              {/* HOSTILES (ABAJO) */}
              {era.hostileEvents.map((event) => {
                const left = `${positionFromTemi(event.temi)}%`;

                return (
                  <div
                    key={`h-${event.temi}`}
                    className="absolute"
                    style={{ left, top: "50%" }}
                  >
                    {/* línea conectora hacia abajo */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-6 bg-red-500/80" />

                    {/* punto */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-[10px] font-bold text-white shadow-[0_0_12px_rgba(239,68,68,.6)]">
                      {event.id}
                    </div>
                  </div>
                );
              })}

              {/* BENÉVOLOS (ARRIBA) */}
              {era.benevolentEvents.map((event) => {
                const left = `${positionFromTemi(event.temi)}%`;

                return (
                  <div
                    key={`b-${event.temi}`}
                    className="absolute"
                    style={{ left, top: "50%" }}
                  >
                    {/* línea conectora hacia arriba */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-6 bg-green-500/80" />

                    {/* punto */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-[10px] font-bold text-black shadow-[0_0_12px_rgba(34,197,94,.6)]">
                      {event.id}
                    </div>
                  </div>
                );
              })}

            </div>

            {/* LISTA DE EVENTOS */}
            <div className="mt-10 grid gap-4 md:grid-cols-2">

              {/* BENÉVOLOS */}
              {era.benevolentEvents
                .sort((a, b) => parseInt(a.temi, 16) - parseInt(b.temi, 16))
                .map((event) => (
                  <div
                    key={event.temi}
                    className="
                      rounded-2xl
                      border
                      border-green-500/20
                      bg-green-500/10
                      p-5
                    "
                  >
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500 text-black flex items-center justify-center font-bold">
                        {event.id}
                      </div>

                      <div>
                        <h3 className="mt-1 font-semibold">
                          {event.title}
                        </h3>

                        <p className="mt-2 text-xs text-zinc-500">
                          TEMI {event.temi}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

              {/* HOSTILES */}
              {era.hostileEvents
                .sort((a, b) => parseInt(a.temi, 16) - parseInt(b.temi, 16))
                .map((event) => (
                  <div
                    key={event.temi}
                    className="
                      rounded-2xl
                      border
                      border-red-500/20
                      bg-red-500/10
                      p-5
                    "
                  >
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
                        {event.id}
                      </div>

                      <div>
                        <h3 className="mt-1 font-semibold">
                          {event.title}
                        </h3>

                        <p className="mt-2 text-xs text-zinc-500">
                          TEMI {event.temi}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

            </div>

          </article>
        ))}

      </section>
    </main>
  );
}