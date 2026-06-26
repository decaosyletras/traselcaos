import Link from "next/link";

interface EntityCardProps {
  title: string;
  description?: string;
  image?: string;
  href: string;
  subtitle?: string;
  imageRatio?: "square" | "book";
}

export default function EntityCard({
  title,
  description,
  image,
  href,
  subtitle,
  imageRatio = "square",
}: EntityCardProps) {
  return (
    <Link href={href}>
      <article
        className="
          group
          overflow-hidden
          rounded-xl
          border
          border-cyan-900/20
          bg-zinc-900
          transition
          hover:border-cyan-500/40
        "
      >
        {image && (
          <div className="overflow-hidden">
            <img
              src={image}
              alt={title}
              className={`
                w-full
                object-cover
                transition
                duration-700
                group-hover:scale-110
                ${imageRatio === "book" ? "aspect-[2/3]" : "aspect-square"}
              `}
            />
          </div>
        )}

        <div className="p-2">
          {subtitle && (
            <span className="text-cyan-400 text-[10px]">
              {subtitle}
            </span>
          )}

          <h2 className="text-sm font-bold mt-1 leading-tight">
            {title}
          </h2>

          {/*<p className="hidden sm:block mt-2 text-zinc-400 text-xs line-clamp-2">
            {description}
          </p>*/}
        </div>
      </article>
    </Link>
  );
}