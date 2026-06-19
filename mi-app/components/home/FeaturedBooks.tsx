import Link from "next/link";
import { books } from "@/data/books";

export default function FeaturedBooks() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            La Saga
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Libros
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-zinc-400">
            Descubre las novelas que narran la evolución
            de imperios galácticos, guerras ancestrales
            y los secretos ocultos del universo.
          </p>
        </div>

        {/* GRID RESPONSIVE REAL */}
        <div
          className="
            mt-16

            flex
            gap-6
            overflow-x-auto
            pb-4
            scroll-smooth

            sm:grid
            sm:grid-cols-2

            md:grid
            md:grid-cols-3

            lg:grid
            lg:grid-cols-5
            lg:gap-5
          "
        >

          {books.map((book) => (
            <Link
              key={book.id}
              href={`/libros/${book.slug}`}
              className="
                min-w-[75%]
                sm:min-w-0

                group
                overflow-hidden
                rounded-2xl
                border
                border-cyan-900/30
                bg-gradient-to-b
                from-zinc-900
                to-zinc-950

                transition-all
                duration-300

                hover:border-cyan-500/50
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
              "
            >
              {/* COVER */}
              <div className="overflow-hidden">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="
                    w-full
                    aspect-[2/3]
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <p className="text-cyan-400 text-xs uppercase tracking-widest">
                  Publicado en {book.publishYear}
                </p>

                <h3 className="mt-2 text-xl font-bold group-hover:text-cyan-300 transition-colors">
                  {book.title}
                </h3>

                <p className="mt-3 text-sm text-zinc-400 line-clamp-3">
                  {book.synopsis}
                </p>

                <div className="mt-5 text-cyan-400 font-medium text-sm">
                  Ver detalles →
                </div>
              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}