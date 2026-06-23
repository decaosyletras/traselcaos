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
    <section className="relative bg-zinc-950 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 py-6 md:py-14">

        {/* ================= MOBILE ================= */}
        <div className="md:hidden space-y-4">

          {/* TOP ROW: image + title */}
          <div className="flex items-center gap-4">

            {image && (
              <img
                src={image}
                alt={title}
                className="w-14 h-14 rounded-lg object-cover"
              />
            )}

            <h1 className="text-xl font-bold leading-tight">
              {title}
            </h1>

          </div>

          {/* DESCRIPTION */}
          <p className="text-sm text-zinc-300 leading-6">
            {description}
          </p>

        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex gap-10 items-start">

          {/* IMAGE */}
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

            {/* TITLE */}
            <h1 className="text-5xl font-bold">
              {title}
            </h1>

            {/* DESCRIPTION (A LA DERECHA DE LA IMAGEN, ABAJO DEL TÍTULO) */}
            <p className="mt-6 text-zinc-300 leading-8 max-w-2xl">
              {description}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}