import Link from "next/link";
import { books } from "@/data/books";

export default function FeaturedBooks() {
  return (
    <section className="py-10 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-cyan-400 uppercase tracking-[0.25em] text-[10px] md:text-sm">
            La Saga
          </p>

          <h2 className="mt-2 md:mt-4 text-2xl md:text-5xl font-bold">
            Libros
          </h2>

          <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-zinc-400 text-sm md:text-base leading-relaxed">
            Descubre las novelas que narran la evolución
            de imperios galácticos y los secretos del universo.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            mt-10 md:mt-16

            flex gap-4 overflow-x-auto pb-2
            sm:grid sm:overflow-visible
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
          "
        >
          {books.map((book) => (
            <Link
              key={book.id}
              href={`/libros/${book.slug}`}
              className="
                min-w-[70%] sm:min-w-0

                group
                overflow-hidden
                rounded-xl md:rounded-2xl
                border border-cyan-900/30
                bg-gradient-to-b
                from-zinc-900
                to-zinc-950

                transition-all
                duration-300

                hover:border-cyan-500/50
                hover:-translate-y-1
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

              {/* INFO */}
              <div className="p-3 md:p-5">
                <p className="text-cyan-400 text-[10px] md:text-xs uppercase tracking-widest">
                  {book.publishYear}
                </p>

                <h3 className="mt-1 md:mt-2 text-sm md:text-xl font-bold group-hover:text-cyan-300 transition-colors">
                  {book.title}
                </h3>

                <p className="mt-2 text-[11px] md:text-sm text-zinc-400 line-clamp-2 md:line-clamp-3">
                  {book.synopsis}
                </p>

                <div className="mt-3 md:mt-4 text-cyan-400 text-xs md:text-sm">
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