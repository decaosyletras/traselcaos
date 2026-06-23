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
    <section className="bg-zinc-950 border-b border-cyan-900/20">

      <div className="max-w-6xl mx-auto px-6 py-6 md:py-10">

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-[220px_1fr] gap-x-8 gap-y-4 items-start">

          {/* IMAGE */}
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-56 object-cover rounded-2xl"
            />
          )}

          {/* DESCRIPTION (A LA DERECHA DE LA IMAGEN) */}
          <p className="text-zinc-300 leading-7 max-w-2xl">
            {description}
          </p>

          {/* TITLE (DEBAJO DE LA IMAGEN) */}
          <h1 className="text-4xl font-bold col-span-1">
            {title}
          </h1>

        </div>

        {/* MOBILE */}
        <div className="md:hidden space-y-3">

          {image && (
            <img
              src={image}
              alt={title}
              className="w-24 h-24 rounded-lg object-cover"
            />
          )}

          <h1 className="text-xl font-bold">
            {title}
          </h1>

        </div>

      </div>
    </section>
  );
}