import Link from "next/link";

interface EntityCardProps {
  title: string;
  description: string;
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
          rounded-2xl
          border
          border-cyan-900/20
          bg-zinc-900
          transition
          hover:border-cyan-500/40
          hover:-translate-y-1
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
                ${
                  imageRatio === "book"
                    ? "aspect-[2/3]"
                    : "aspect-square"
                }
              `}
            />
          </div>
        )}

        <div className="p-5">

          {subtitle && (
            <span className="text-cyan-400 text-sm">
              {subtitle}
            </span>
          )}

          <h2 className="text-xl font-bold mt-2">
            {title}
          </h2>

          <p
            className="
              mt-3
              text-zinc-400
              line-clamp-3
            "
          >
            {description}
          </p>

        </div>

      </article>

    </Link>
  );
}