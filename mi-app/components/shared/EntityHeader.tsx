interface Props {
  title: string;
  description: string;
  image?: string;
}

export default function EntityHeader({
  title,
  description,
  image,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-zinc-950">

      <div className="max-w-6xl mx-auto px-6 py-6 md:py-14">

        {/* MOBILE */}
        <div className="flex items-center gap-4 md:hidden">

          {image && (
            <img
              src={image}
              alt={title}
              className="w-14 h-14 rounded-lg object-cover"
            />
          )}

          <div className="flex-1">
            <h1 className="text-xl font-bold leading-tight">
              {title}
            </h1>

            <p className="text-sm text-zinc-300 mt-1 line-clamp-2">
              {description}
            </p>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex gap-10 items-center">

          {/* IMAGE SIDE */}
          {image && (
            <div className="w-64 h-64 flex-shrink-0">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          )}

          {/* TEXT SIDE */}
          <div className="flex-1">

            <h1 className="text-5xl font-bold">
              {title}
            </h1>

            <p className="mt-6 text-zinc-300 leading-8 max-w-2xl">
              {description}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}