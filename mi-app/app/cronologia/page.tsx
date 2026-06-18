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
  {
    id: "era-3",
    name: "Era del Conflicto",
    benevolentEvents: [
      { temi: "4000AA01", title: "Guardia Estelar formada" },
    ],
    hostileEvents: [
      { temi: "4100FF22", title: "Purga del Sector Norte" },
    ],
  },
  {
    id: "era-4",
    name: "Era del Colapso",
    benevolentEvents: [
      { temi: "6000FFAA", title: "Evacuación masiva" },
    ],
    hostileEvents: [
      { temi: "6100CCDD", title: "Fragmentación imperial" },
    ],
  },
  {
    id: "era-5",
    name: "Era del Nuevo Orden",
    benevolentEvents: [
      { temi: "8000AAAA", title: "Reunificación" },
    ],
    hostileEvents: [
      { temi: "FFFF0001", title: "Señal del vacío" },
    ],
  },
];

function positionFromTemi(temi: string) {
  const value = parseInt(temi, 16);
  const max = 0xffffffff;
  return (value / max) * 100;
}

export default function CronologiaPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      <section className="py-16 md:py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          Cronología del Universo
        </h1>
        <p className="mt-3 text-zinc-400 text-sm md:text-base">
          Línea temporal por eras (Temi)
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-24 space-y-14">

        {eras.map((era) => (
          <div key={era.id} className="relative">

            <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4 md:mb-6">
              {era.name}
            </h2>

            <div className="relative h-24">

              {/* Línea temporal */}
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-cyan-500/60" />

              {/* HOSTILES */}
              {era.hostileEvents.map((event, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${positionFromTemi(event.temi)}%`,
                    top: "50%",
                  }}
                >
                  {/* línea de conexión */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-6 bg-red-500" />

                  {/* punto */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 shadow shadow-red-500/50" />

                  {/* texto */}
                  <p className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-red-400">
                    {event.title}
                  </p>
                </div>
              ))}

              {/* BENÉVOLOS */}
              {era.benevolentEvents.map((event, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${positionFromTemi(event.temi)}%`,
                    top: "50%",
                  }}
                >
                  {/* línea de conexión */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-6 bg-green-500" />

                  {/* punto */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-green-500 shadow shadow-green-500/50" />

                  {/* texto */}
                  <p className="absolute top-11 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-green-400">
                    {event.title}
                  </p>
                </div>
              ))}

            </div>

          </div>
        ))}

      </section>
    </main>
  );
}