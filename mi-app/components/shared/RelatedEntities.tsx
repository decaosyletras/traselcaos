import EntityCard from "@/components/shared/EntityCard";

interface RelatedEntity {
  id: string;
  title: string;
  description: string;
  image?: string;
  href: string;
}

interface Props {
  title: string;
  entities: RelatedEntity[];
}

export default function RelatedEntities({
  title,
  entities,
}: Props) {
  if (!entities.length) return null;

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-8">
        {title}
      </h2>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
      >
        {entities.map((entity) => (
          <EntityCard
            key={entity.id}
            title={entity.title}
            description={entity.description}
            image={entity.image}
            href={entity.href}
          />
        ))}
      </div>
    </section>
  );
}