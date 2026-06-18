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

            {/* LÍNEA BASE */}
            <div className="relative h-16 md:h-20 border-t border-zinc-700">

              {/* 🔴 HOSTILES (ARRIBA) */}
              {era.hostileEvents.map((event, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 -translate-y-full"
                  style={{ left: `${positionFromTemi(event.temi)}%` }}
                >
                  <p className="text-[9px] md:text-[10px] text-red-400 mb-1 whitespace-nowrap text-center">
                    {event.title}
                  </p>
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-red-500 rounded-full mx-auto" />
                </div>
              ))}

              {/* 🔵 BENÉVOLOS (ABAJO) */}
              {era.benevolentEvents.map((event, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 translate-y-0"
                  style={{ left: `${positionFromTemi(event.temi)}%` }}
                >
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-cyan-400 rounded-full mx-auto" />
                  <p className="text-[9px] md:text-[10px] text-cyan-300 mt-1 whitespace-nowrap text-center">
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