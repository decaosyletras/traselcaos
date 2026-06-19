import Link from "next/link";
import { eras, positionFromTemi } from "@/data/eras";

export default function TimelinePreview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Historia Galáctica
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Cronología
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-zinc-400">
            Línea temporal real basada en el espacio hexadecimal completo del universo.
          </p>
        </div>

        <div className="mt-16 space-y-6">

          {eras.slice(0, 2).map((era) => (
            <div
              key={era.id}
              className="
                rounded-2xl
                border
                border-cyan-900/30
                bg-gradient-to-b
                from-zinc-900
                to-zinc-950
                p-6
              "
            >
              <h3 className="text-xl font-bold text-cyan-400">
                {era.name}
              </h3>

              {/* LÍNEA HEX REAL */}
              <div className="relative h-20 mt-6">

                {/* base: 0 → FFFFFFFF */}
                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-cyan-500/40" />

                {/* labels extremos */}
                <div className="absolute top-0 left-0 text-[10px] text-zinc-500">
                  0x00000000
                </div>

                <div className="absolute top-0 right-0 text-[10px] text-zinc-500">
                  0xFFFFFFFF
                </div>

                {/* eventos hostiles */}
                {era.hostileEvents.map((event) => (
                  <div
                    key={event.temi}
                    className="absolute"
                    style={{
                      left: `${positionFromTemi(event.temi)}%`,
                      top: "50%",
                    }}
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-[10px] font-bold">
                      {event.id}
                    </div>
                  </div>
                ))}

                {/* eventos benévolos */}
                {era.benevolentEvents.map((event) => (
                  <div
                    key={event.temi}
                    className="absolute"
                    style={{
                      left: `${positionFromTemi(event.temi)}%`,
                      top: "50%",
                    }}
                  >
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-[10px] font-bold text-black">
                      {event.id}
                    </div>
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

        <div className="text-center mt-10">
          <Link
            href="/cronologia"
            className="text-cyan-400 hover:text-cyan-300 transition"
          >
            Ver cronología completa →
          </Link>
        </div>

      </div>
    </section>
  );
}