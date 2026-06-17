import { books } from "@/data/books";
import BookCard from "@/components/books/BookCard";

export default function BooksPage() {
  return (
    <main className="min-h-screen">

      <section className="py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold">
          Libros
        </h1>

        <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
          Explora las novelas de la saga y descubre
          cómo evoluciona el universo a través del tiempo.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
            />
          ))}

        </div>

      </section>

    </main>
  );
}