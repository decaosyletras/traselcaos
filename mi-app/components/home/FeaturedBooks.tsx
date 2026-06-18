import Link from "next/link";
import { books } from "@/data/books";

export default function FeaturedBooks() {
  return (
    <section className="py-16 md:py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Libros
        </h2>

        <div
          className="
            mt-16
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-4
            md:gap-8
          "
        >
          {books.slice(0, 5).map((book) => (
            <Link
              key={book.id}
              href={`/libros/${book.slug}`}
              className="
                rounded-2xl
                overflow-hidden
                bg-zinc-900
                border
                border-cyan-900/20
              "
            >
              <img
                src={book.cover}
                alt={book.title}
                className="
                  w-full
                  aspect-[2/3]
                  object-cover
                "
              />

              <div className="p-4">
                <h3 className="font-bold">
                  {book.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>

    </section>
  );
}