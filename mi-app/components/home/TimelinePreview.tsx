import Link from "next/link";
import { eras, positionFromTemi } from "@/data/eras";

export default function TimelinePreview() {
  const previewEras = eras.slice(0, 2);

  return (
    <section className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center">
          {/*<p className="text-cyan-400 uppercase tracking-[0.25em] text-[10px] md:text-sm">
            Cronología
          </p>*/}

          {/*<h3 className="mt-2 md:mt-4 text-lg md:text-5xl font-bold">
            Línea del tiempo
          </h3>*/}

          {/*<p className="mt-4 md:mt-6 text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
            Eventos clave que marcaron la historia del universo.
          </p>*/}
        </div>

        {/* ERAS */}
        <div className="mt-10 md:mt-16 space-y-8">

          {previewEras.map((era) => (
            <div
              key={era.id}
              className="
                rounded-xl md:rounded-2xl
                border border-cyan-900/30
                bg-gradient-to-b from-zinc-900 to-zinc-950
                p-4 md:p-6
              "
            >
              {/* TÍTULO */}
              <h3 className="text-cyan-400 font-semibold text-sm md:text-lg mb-6">
                {era.name}
              </h3>

              {/* TIMELINE */}
              <div className="relative h-16 md:h-20">

                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-cyan-500/40" />

                {/* HOSTILES */}
                {era.hostileEvents.map((event) => (
                  <div
                    key={`h-${event.temi}`}
                    className="absolute"
                    style={{
                      left: `${positionFromTemi(event.temi)}%`,
                      top: "50%",
                    }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-4 md:h-6 bg-red-500/70" />

                    <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,.5)]" />
                  </div>
                ))}

                {/* BENÉVOLOS */}
                {era.benevolentEvents.map((event) => (
                  <div
                    key={`b-${event.temi}`}
                    className="absolute"
                    style={{
                      left: `${positionFromTemi(event.temi)}%`,
                      top: "50%",
                    }}
                  >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-4 md:h-6 bg-green-500/70" />

                    <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,.5)]" />
                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-14">
          <Link
            href="/cronologia"
            className="text-cyan-400 hover:text-cyan-300 text-sm md:text-base font-medium"
          >
            Ver cronología completa →
          </Link>
        </div>

      </div>
    </section>
  );
}