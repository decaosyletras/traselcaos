import { Book } from "@/types/Book";

export const books: Book[] = [
  {
    id: "book1",
    slug: "primer-libro",
    title: "Primer Libro",
    year: "2025",
    cover: "/images/books/book1.jpg",
    publishYear: 2023,
    timelineYear: 0,
    synopsis:
      "La historia comienza en los límites del espacio conocido.",
  },
  {
    id: "book2",
    slug: "segundo-libro",
    title: "Segundo Libro",
    year: "2025",
    cover: "/images/books/book2.jpg",
    publishYear: 2024,
    timelineYear: 150,
    synopsis:
      "Nuevos conflictos amenazan el equilibrio galáctico.",
  },
];