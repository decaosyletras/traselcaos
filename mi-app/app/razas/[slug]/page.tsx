import EntityHeader from "@/components/shared/EntityHeader";
import InfoPanel from "@/components/shared/InfoPanel";
import AppearanceTimeline from "@/components/shared/AppearanceTimeline";

export default function RacePage() {
  return (
    <main>
      <EntityHeader
        title="Seoseres"
        description="
          Antigua raza nómada que ha servido a distintos
          poderes galácticos a lo largo de la historia.
        "
        image="/images/races/seoseres.jpg"
      />

      <section
        className="
          max-w-7xl
          mx-auto
          px-6
          py-12
        "
      >
        <div
          className="
            grid
            lg:grid-cols-3
            gap-8
          "
        >
          <div className="lg:col-span-2">
            <article
              className="
                rounded-2xl
                border
                border-cyan-900/20
                bg-zinc-900
                p-8
              "
            >
              <h2
                className="
                  text-2xl
                  font-bold
                  mb-4
                "
              >
                Historia
              </h2>

              <p className="text-zinc-300 leading-8">
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </article>

            <AppearanceTimeline
              items={[
                {
                  book: "Libro I",
                  era: "Era Imperial",
                  alignment: "Hostiles",
                  faction: "Imperio Solar",
                  organizations: [
                    "Orden Cealtar",
                  ],
                },
                {
                  book: "Libro IV",
                  era: "Era del Colapso",
                  alignment: "Neutrales",
                  faction: "Alianza Libre",
                  organizations: [
                    "Anillo",
                  ],
                },
              ]}
            />
          </div>

          <div>
            <InfoPanel
              title="Datos"
              items={[
                {
                  label: "Planeta natal",
                  value: "Nerath",
                },
                {
                  label: "Sector",
                  value: "Sector Exterior",
                },
                {
                  label: "Primera aparición",
                  value: "Libro I",
                },
                {
                  label: "Estado",
                  value: "Activo",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}