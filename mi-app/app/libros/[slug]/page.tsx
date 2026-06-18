import Link from "next/link";
import { notFound } from "next/navigation";
import { books } from "@/data/books";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BookPage({
  params,
}: Props) {
  const { slug } = await params;

  const orderedBooks = [...books].sort(
    (a, b) => a.timelineYear - b.timelineYear
  );

  const currentIndex = orderedBooks.findIndex(
    (book) => book.slug === slug
  );

  if (currentIndex === -1) {
    notFound();
  }

  const book = orderedBooks[currentIndex];

  const previousBook =
    currentIndex > 0
      ? orderedBooks[currentIndex - 1]
      : null;

  const nextBook =
    currentIndex < orderedBooks.length - 1
      ? orderedBooks[currentIndex + 1]
      : null;

  return (
    <main className="min-h-screen bg-zinc-950">
      <section className="max-w-6xl mx-auto px-6 py-24">

        {/* Portada + información */}
        <div className="space-y-8">

          <div className="flex gap-4 lg:grid lg:grid-cols-[350px_1fr] lg:gap-12">

            <div className="w-32 shrink-0 lg:w-auto">
              <img
                src={book.cover}
                alt={book.title}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-zinc-800
                "
              />
            </div>

            <div>
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs md:text-sm">
                Libro de la Saga
              </p>

              <h1 className="mt-3 text-2xl md:text-5xl lg:text-6xl font-black">
                {book.title}
              </h1>

              <div className="mt-4 space-y-2 text-sm text-zinc-400">
                <p>
                  Publicado: {book.publishYear}
                </p>

                <p>
                  Cronología: Año {book.timelineYear}
                </p>
              </div>
            </div>

          </div>

          {/* Sinopsis */}
          <div>
            <p className="text-lg text-zinc-300 leading-relaxed">
              {book.synopsis}
            </p>
          </div>

        </div>

        {/* Navegación */}
        <div className="mt-20 border-t border-zinc-800 pt-8">
          <div className="flex justify-between items-center">

            <div>
              {previousBook && (
                <Link
                  href={`/libros/${previousBook.slug}`}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-4
                  "
                >
                  <span
                    className="
                      text-3xl
                      text-zinc-500
                      group-hover:text-cyan-400
                      transition-colors
                    "
                  >
                    ←
                  </span>

                  <div>
                    <p className="text-xs uppercase text-zinc-500">
                      Libro anterior
                    </p>

                    <p className="font-semibold group-hover:text-cyan-400 transition-colors">
                      {previousBook.title}
                    </p>
                  </div>
                </Link>
              )}
            </div>

            <div className="text-right">
              {nextBook && (
                <Link
                  href={`/libros/${nextBook.slug}`}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-4
                  "
                >
                  <div>
                    <p className="text-xs uppercase text-zinc-500">
                      Siguiente libro
                    </p>

                    <p className="font-semibold group-hover:text-cyan-400 transition-colors">
                      {nextBook.title}
                    </p>
                  </div>

                  <span
                    className="
                      text-3xl
                      text-zinc-500
                      group-hover:text-cyan-400
                      transition-colors
                    "
                  >
                    →
                  </span>
                </Link>
              )}
            </div>

          </div>
        </div>

      </section>
    </main>
  );
}

export function generateStaticParams() {
  return books.map((book) => ({
    slug: book.slug,
  }));
}