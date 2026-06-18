import Link from "next/link";

interface RelatedEntity {
  title: string;
  href: string;
  image?: string;
}

interface RelatedEntitiesProps {
  title: string;
  entities: RelatedEntity[];
}

export default function RelatedEntities({
  title,
  entities,
}: RelatedEntitiesProps) {
  if (!entities || entities.length === 0) return null;

  return (
    <div className="mt-12 rounded-2xl border border-cyan-900/20 bg-zinc-900 p-6">
      
      <h3 className="text-lg font-bold mb-4">
        {title}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {entities.map((entity) => (
          <Link
            key={entity.href}
            href={entity.href}
            className="group flex items-center gap-3 p-3 rounded-xl border border-zinc-800 hover:border-cyan-500/40 transition"
          >
            {entity.image && (
              <img
                src={entity.image}
                alt={entity.title}
                className="w-12 h-12 object-cover rounded-lg"
              />
            )}

            <span className="text-sm font-medium group-hover:text-cyan-400 transition-colors">
              {entity.title}
            </span>
          </Link>
        ))}

      </div>
    </div>
  );
}