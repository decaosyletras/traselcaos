import EntityCard from "@/components/shared/EntityCard";
import { Book } from "@/types/Book";

interface Props {
  book: Book;
}

export default function BookCard({
  book,
}: Props) {
  return (
    <EntityCard
      title={book.title}
      description={book.synopsis}
      image={book.cover}
      href={`/libros/${book.slug}`}
      subtitle={book.publishYear.toString()}
    />
  );
}