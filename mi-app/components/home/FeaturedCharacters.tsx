export default function FeaturedCharacters() {
  return (
    <section className="py-24">

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >
        <h2
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-center
          "
        >
          Personajes Destacados
        </h2>

        <div
          className="
            mt-16
            grid
            md:grid-cols-3
            gap-8
          "
        >
          <div className="rounded-2xl bg-zinc-900 p-8">
            Personaje 1
          </div>

          <div className="rounded-2xl bg-zinc-900 p-8">
            Personaje 2
          </div>

          <div className="rounded-2xl bg-zinc-900 p-8">
            Personaje 3
          </div>
        </div>
      </div>

    </section>
  );
}