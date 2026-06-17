import EntityHeader from "@/components/shared/EntityHeader";
import InfoPanel from "@/components/shared/InfoPanel";
import AppearanceTimeline from "@/components/shared/AppearanceTimeline";
import RelatedEntities from "@/components/shared/RelatedEntities";

export default function CharacterPage() {
  return (
    <main>

      <EntityHeader
        title="Kael"
        description="Veterano militar de la era imperial."
        image="/images/characters/kael.jpg"
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
                bg-zinc-900
                p-8
              "
            >
              Historia del personaje...
            </article>

            <AppearanceTimeline
              items={[]}
            />

          </div>

          <div>

            <InfoPanel
              title="Datos"
              items={[
                {
                  label: "Raza",
                  value: "Seoseres",
                },
                {
                  label: "Planeta",
                  value: "Nerath",
                },
              ]}
            />

          </div>
        </div>

        <RelatedEntities
          title="Personajes Relacionados"
          entities={[]}
        />

      </section>

    </main>
  );
}