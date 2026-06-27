import Link from "next/link";
import { eras, positionFromTemi } from "@/data/eras";

export default function TimelinePreview() {
  const previewEras = eras.slice(0, 2);

  return (
    <section className="py-12 md:py-10">
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
        <div className="mt-2 md:mt-4 space-y-8">

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