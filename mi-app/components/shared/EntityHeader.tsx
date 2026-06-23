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
        <div className="hidden md:flex gap-8 items-start">

          {image && (
            <img
              src={image}
              alt={title}
              className="w-40 h-40 object-cover rounded-xl"
            />
          )}

          <div className="flex-1">
            <h1 className="text-4xl font-bold">
              {title}
            </h1>

            <p className="mt-4 text-zinc-300 leading-7 max-w-2xl">
              {description}
            </p>
          </div>

        </div>

        {/* MOBILE */}
        <div className="md:hidden flex gap-4 items-start">

          {image && (
            <img
              src={image}
              alt={title}
              className="w-20 h-20 rounded-lg object-cover"
            />
          )}

          <div className="flex-1">

            <h1 className="text-xl font-bold">
              {title}
            </h1>

            <p className="mt-2 text-sm text-zinc-300 leading-6">
              {description}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}