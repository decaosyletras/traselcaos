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

      <div className="max-w-6xl mx-auto px-6 py-6 md:py-12">

        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 md:gap-10 items-start">

          {/* IMAGE */}
          {image && (
            <div className="w-full">
              <img
                src={image}
                alt={title}
                className="w-full aspect-square object-cover rounded-2xl"
              />
            </div>
          )}

          {/* TEXT */}
          <div>

            <h1 className="text-2xl md:text-5xl font-bold">
              {title}
            </h1>

            <p className="mt-4 md:mt-6 text-zinc-300 leading-7 md:leading-8 max-w-2xl">
              {description}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}