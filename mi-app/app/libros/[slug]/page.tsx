import Link from "next/link";
import { notFound } from "next/navigation";
import { books } from "@/data/books";
import BookNavigation from "@/components/BookNavigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

function getBookOrderText(position: number) {
  const map: Record<number, string> = {
    1: "Primer libro de la saga",
    2: "Segundo libro de la saga",
    3: "Tercer libro de la saga",
    4: "Cuarto libro de la saga",
    5: "Quinto libro de la saga"
  };

  return map[position] ?? `Libro ${position} de la saga`;
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
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-zinc-950 to-zinc-950" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">

          <div className="grid lg:grid-cols-[380px_1fr] gap-8 lg:gap-14 items-start">

            {/* PORTADA */}
            <div className="mx-auto lg:mx-0 w-full max-w-[280px] sm:max-w-[340px]">
              <div
                className="
                  overflow-hidden
                  rounded-3xl
                  border border-cyan-900/30
                  bg-zinc-900
                  shadow-[0_0_40px_rgba(34,211,238,0.08)]
                "
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full aspect-[2/3] object-cover"
                />
              </div>
            </div>

            {/* INFORMACIÓN */}
            <div className="text-center lg:text-left">

              <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs md:text-sm">
                {getBookOrderText(book.timelineYear)}
              </p>

              <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
                Tras el caos de la existencia:
                <span className="block text-cyan-400 mt-2">
                  {book.title}
                </span>
              </h1>

              <div
                className="
                  mt-6
                  inline-flex
                  items-center
                  rounded-full
                  border border-cyan-900/30
                  bg-zinc-900/80
                  px-4 py-2
                  text-sm text-zinc-300
                "
              >
                Publicado en {book.publishYear}
              </div>

              <p className="mt-8 text-zinc-400 leading-relaxed max-w-3xl">
                {book.heroDescription}
              </p>

              {/* BOTONES */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                <a
                  href={book.LinkAmazon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-500
                    px-6
                    py-3
                    font-semibold
                    text-black
                    transition-all
                    hover:bg-cyan-400
                    hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]
                  "
                >
                  Comprar en Amazon
                </a>

                <Link
                  href="/libros"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-cyan-900/30
                    px-6
                    py-3
                    text-zinc-300
                    transition-all
                    hover:border-cyan-500/50
                    hover:text-cyan-300
                  "
                >
                  Ver todos los libros
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SINOPSIS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">

        <div
          className="
            rounded-3xl
            border border-cyan-900/30
            bg-gradient-to-b
            from-zinc-900
            to-zinc-950
            p-6 md:p-10
          "
        >
          <h2 className="text-xl md:text-2xl font-bold text-cyan-400">
            Sinopsis
          </h2>

          <p className="mt-6 text-zinc-300 leading-relaxed text-base md:text-lg">
            {book.synopsis}
          </p>
        </div>

      </section>

      {/* NAVEGACIÓN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <BookNavigation
          previousBook={previousBook}
          nextBook={nextBook}
        />
      </section>

    </main>
  );
}

export function generateStaticParams() {
  return books.map((book) => ({
    slug: book.slug,
  }));
}