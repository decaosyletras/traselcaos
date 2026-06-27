"use client";

import { eras, positionFromTemi } from "@/data/eras";
import SectionTitle from "@/components/shared/SectionTitle";

export default function CronologiaPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* HERO */}
      <SectionTitle title="Cronología" />

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

              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-cyan-500/40" />

              <div className="absolute top-0 left-0 text-[10px] text-zinc-500">
                {era.startTemi}
              </div>

              <div className="absolute top-0 right-0 text-[10px] text-zinc-500">
                {era.endTemi}
              </div>

              {/* HOSTILES */}
              {era.hostileEvents.map((event) => {
                const left = `${positionFromTemi(
                  event.temi,
                  era.startTemi,
                  era.endTemi
                )}%`;

                return (
                  <div
                    key={`h-${event.temi}`}
                    className="absolute"
                    style={{ left, top: "50%" }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-5 bg-red-500/80" />

                    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-[9px] font-bold text-white shadow-[0_0_10px_rgba(239,68,68,.5)]">
                      {event.id}
                    </div>
                  </div>
                );
              })}

              {/* BENÉVOLOS */}
              {era.benevolentEvents.map((event) => {
                const left = `${positionFromTemi(
                  event.temi,
                  era.startTemi,
                  era.endTemi
                )}%`;

                return (
                  <div
                    key={`b-${event.temi}`}
                    className="absolute"
                    style={{ left, top: "50%" }}
                  >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-5 bg-green-500/80" />

                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-[9px] font-bold text-black shadow-[0_0_10px_rgba(34,197,94,.5)]">
                      {event.id}
                    </div>
                  </div>
                );
              })}

            </div>

            {/* LISTA */}
            <div className="mt-8 grid gap-2 md:grid-cols-2">

              {/* BENÉVOLOS */}
              {era.benevolentEvents
                .sort((a, b) => parseInt(a.temi, 16) - parseInt(b.temi, 16))
                .map((event) => (
                  <div
                    key={event.temi}
                    className="
                      rounded-lg
                      border
                      border-green-500/15
                      bg-green-500/5
                      px-3
                      py-2.5
                    "
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500 text-black flex items-center justify-center text-[10px] font-bold shrink-0">
                        {event.id}
                      </div>

                      <h3 className="flex-1 text-sm font-medium">
                        {event.title}
                      </h3>

                      <span className="text-[11px] text-zinc-500 font-mono">
                        {event.temi}
                      </span>
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
                      rounded-lg
                      border
                      border-red-500/15
                      bg-red-500/5
                      px-3
                      py-2.5
                    "
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                        {event.id}
                      </div>

                      <h3 className="flex-1 text-sm font-medium">
                        {event.title}
                      </h3>

                      <span className="text-[11px] text-zinc-500 font-mono">
                        {event.temi}
                      </span>
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