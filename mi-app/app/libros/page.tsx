import { books } from "@/data/books";

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* HERO */}
      <section className="relative py-16 md:py-28 text-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-zinc-950 to-zinc-950" />

        <div className="relative z-10 px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black">
            Libros
          </h1>

          <p className="mt-4 md:mt-6 text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
            Explora las novelas de la saga y descubre cómo evoluciona el universo a través del tiempo.
          </p>
        </div>

      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">

        <div
          className="
            mt-10 md:mt-12

            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5

            gap-4 sm:gap-6
          "
        >

          {books.map((book) => (
            <a
              key={book.id}
              href={`/libros/${book.slug}`}
              className="
                group
                overflow-hidden
                rounded-xl sm:rounded-2xl
                border border-cyan-900/30
                bg-gradient-to-b from-zinc-900 to-zinc-950

                transition-all duration-300
                hover:border-cyan-500/50
                hover:-translate-y-1
                hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]
              "
            >
              {/* COVER */}
              <div className="overflow-hidden">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="
                    w-full
                    aspect-[3/4] sm:aspect-[2/3]
                    object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* INFO */}
              <div className="p-3 sm:p-4">
                <p className="text-cyan-400 text-[10px] sm:text-xs uppercase tracking-widest">
                  {book.publishYear}
                </p>

                <h3 className="mt-1 sm:mt-2 text-sm sm:text-lg font-bold group-hover:text-cyan-300 transition-colors">
                  {book.title}
                </h3>

                <p className="mt-2 text-[11px] sm:text-xs text-zinc-400 line-clamp-2 sm:line-clamp-3">
                  {book.synopsis}
                </p>

                <div className="mt-3 sm:mt-4 text-cyan-400 text-xs sm:text-sm">
                  Ver detalles →
                </div>
              </div>
            </a>
          ))}

        </div>

      </section>

    </main>
  );
}