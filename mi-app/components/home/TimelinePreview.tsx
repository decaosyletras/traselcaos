import Link from "next/link";

const eras = [
  {
    id: "era-1",
    name: "Era del Despertar",
    benevolentEvents: [
      { temi: "0000A1FF", title: "Fundación de Nerath" },
    ],
    hostileEvents: [
      { temi: "000012FF", title: "Ascenso del Imperio Solar" },
    ],
  },
  {
    id: "era-2",
    name: "Era de la Expansión",
    benevolentEvents: [
      { temi: "2000AB10", title: "Colonización de sectores" },
    ],
    hostileEvents: [
      { temi: "2100FF10", title: "Caída de Orion" },
    ],
  },
];

function positionFromTemi(temi: string) {
  const value = parseInt(temi, 16);
  const max = 0xffffffff;
  return (value / max) * 100;
}

export default function TimelinePreview() {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-center
          "
        >
          Cronología
        </h2>

        <p
          className="
            mt-6
            text-zinc-400
            text-center
            max-w-2xl
            mx-auto
          "
        >
          Cinco eras, incontables conflictos
          y acontecimientos que moldearon la galaxia.
        </p>

        <div
          className="
            mt-12
            rounded-2xl
            border
            border-cyan-900/20
            bg-zinc-900
            p-6
            md:p-8
          "
        >

          <div className="space-y-10">

            {eras.map((era) => (
              <div key={era.id}>

                <h3 className="text-cyan-400 font-semibold mb-4">
                  {era.name}
                </h3>

                <div className="relative h-20">

                  {/* línea */}
                  <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-cyan-500/60" />

                  {/* hostiles */}
                  {era.hostileEvents.map((event, i) => (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${positionFromTemi(event.temi)}%`,
                        top: "50%",
                      }}
                    >
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-4 w-px bg-red-500" />

                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500" />
                    </div>
                  ))}

                  {/* benevolos */}
                  {era.benevolentEvents.map((event, i) => (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${positionFromTemi(event.temi)}%`,
                        top: "50%",
                      }}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-px bg-green-500" />

                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-green-500" />
                    </div>
                  ))}

                </div>

              </div>
            ))}

          </div>

          <div className="mt-8 flex justify-center gap-6 text-sm">

            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-zinc-400">
                Benévolos
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-zinc-400">
                Hostiles
              </span>
            </div>

          </div>

          <div className="text-center">

            <Link
              href="/cronologia"
              className="
                inline-block
                mt-8
                text-cyan-400
                hover:text-cyan-300
              "
            >
              Ver cronología completa →
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}