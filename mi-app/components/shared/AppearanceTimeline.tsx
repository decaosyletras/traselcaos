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
    <section className="mt-16">

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

          transition-all
          duration-300
        "
      >
        <div className="text-left">
          <h2 className="text-lg md:text-xl font-bold text-cyan-300 flex items-center gap-2">
            ⚠ Ver apariciones
          </h2>

          <p className="text-sm text-zinc-400 mt-1">
            Puede contener leves spoilers de la historia
          </p>
        </div>

        {/* ICONO MÁS CLARO */}
        <div className="flex items-center gap-3 text-cyan-400">
          <span className="text-sm hidden sm:inline">
            {open ? "Ocultar" : "Ver"}
          </span>
          <span className="text-cyan-400 text-xl">
            {open ? "−" : "+"}
          </span>
        </div>
      </button>

      {/* CONTENT */}
      <div
        className={`
          relative overflow-hidden transition-all duration-500 ease-in-out
          ${open ? "max-h-[5000px] opacity-100 mt-8" : "max-h-0 opacity-0 mt-0"}
        `}
      >
        {/* línea central */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-cyan-900/40" />

        <div className="space-y-10">
          {items.map((item, index) => (
            <div key={index} className="relative pl-12">

              {/* nodo */}
              <div className="absolute left-1.5 top-2 w-5 h-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50" />

              <div className="rounded-xl border border-cyan-900/20 bg-zinc-900 p-5 hover:border-cyan-500/30 transition">

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-sm">
                    {item.book}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-sm">
                    {item.era}
                  </span>
                </div>

                {item.text && (
                  <p className="mt-4 text-zinc-300 leading-7">
                    {item.text}
                  </p>
                )}

                {item.role && (
                  <p className="mt-4 font-semibold text-zinc-200">
                    {item.role}
                  </p>
                )}

                {item.alignment && (
                  <p className="mt-2 text-zinc-400">
                    Alineación:{" "}
                    <span className="text-zinc-200">
                      {item.alignment}
                    </span>
                  </p>
                )}

                {item.faction && (
                  <p className="mt-2 text-zinc-400">
                    Facción:{" "}
                    <span className="text-zinc-200">
                      {item.faction}
                    </span>
                  </p>
                )}

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