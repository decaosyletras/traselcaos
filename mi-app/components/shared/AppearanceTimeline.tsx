"use client";

import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  return (
    <section className="mt-8">

      {/* TOGGLE HEADER */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="
          w-full
          flex items-center justify-between
          rounded-xl
          border border-cyan-900/30
          bg-zinc-900/60
          px-5 py-4
          cursor-pointer
          hover:border-cyan-400/60
          hover:bg-zinc-900
          hover:shadow-[0_0_20px_rgba(34,211,238,0.08)]
          transition-all duration-300
        "
      >
        <div className="text-left">
          <h2 className="text-base md:text-lg font-semibold text-cyan-300 flex items-center gap-2">
            ⚠ Ver apariciones
          </h2>

          <p className="text-xs md:text-sm text-zinc-400 mt-1">
            Puede contener leves spoilers de la historia
          </p>
        </div>

        <div className="flex items-center gap-3 text-cyan-400">
          <span className="text-xs sm:text-sm hidden sm:inline">
            {open ? "Ocultar" : "Ver"}
          </span>
          <span className="text-cyan-400 text-lg md:text-xl">
            {open ? "−" : "+"}
          </span>
        </div>
      </button>

      {/* CONTENT */}
      <div
        className={`
          relative overflow-hidden transition-all duration-500 ease-in-out
          ${open ? "max-h-[5000px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"}
        `}
      >
        {/* línea central */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-cyan-900/40" />

        <div className="space-y-8 md:space-y-10">
          {items.map((item, index) => (
            <div key={index} className="relative pl-12">

              {/* nodo */}
              <div className="absolute left-1.5 top-2 w-4 h-4 rounded-full bg-cyan-400 shadow-md shadow-cyan-500/40" />

              <div className="rounded-xl border border-cyan-900/20 bg-zinc-900/80 p-4 md:p-5 hover:border-cyan-500/30 transition">

                {/* BOOK / ERA */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs">
                    {item.book}
                  </span>

                  <span className="px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs">
                    {item.era}
                  </span>
                </div>

                {/* TEXT */}
                {item.text && (
                  <p className="mt-3 text-zinc-300 text-sm leading-6 md:leading-7">
                    {item.text}
                  </p>
                )}

                {/* ROLE */}
                {item.role && (
                  <p className="mt-3 text-sm font-medium text-zinc-200">
                    {item.role}
                  </p>
                )}

                {/* ALIGNMENT / FACTION */}
                {/*item.alignment && (
                  <p className="mt-2 text-xs md:text-sm text-zinc-400">
                    Alineación:{" "}
                    <span className="text-zinc-200">
                      {item.alignment}
                    </span>
                  </p>
                )*/}

                {item.faction && (
                  <p className="mt-1 text-xs md:text-sm text-zinc-400">
                    Facción:{" "}
                    <span className="text-zinc-200">
                      {item.faction}
                    </span>
                  </p>
                )}

                {/* ORGANIZATIONS */}
                {item.organizations?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.organizations.map((org) => (
                      <span
                        key={org}
                        className="
                          px-2.5 py-1 rounded-full
                          bg-cyan-900/20
                          text-cyan-200
                          text-xs
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