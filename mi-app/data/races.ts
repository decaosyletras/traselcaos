import { Race } from "@/types/Race";

export const races: Race[] = [
  {
    id: "nastajiri",
    slug: "nastajiri",
    name: "Nastajiri",
    summary: "",
    description: "Especie cuya existencia representó un punto de inflexión en la historia universal, al albergar al primer Destello que alcanzó el dominio consciente de sus habilidades.",
    image: "/images/races/nastajiri.jpg",
    homeworldId: "naidul",
    FirstBook: ["book1"],
    appearances: [
      {
        bookId: "book1",
        eraId: "era-1",
        text: "Tras el inesperado encuentro con una especie procedente de otro planeta, los Nastajiri comprenden la verdadera naturaleza de aquello que define a una civilización avanzada.",
        alignment: "Benévolos",
        faction: "",
        organizations: [""],
      },
      {
        bookId: "book3",
        eraId: "era-3",
        text: "Ya consolidados dentro de la Asociación Cealtar Universal, los Nastajiri se ven envueltos en un acontecimiento que los llevará a reencontrarse con el legado de Arsuen.",
        alignment: "Benévolos",
        faction: "",
        organizations: ["Orden Cealtar"],
      }
    ]
  },
  {
    id: "vel-fatith",
    slug: "vel-fatith",
    name: "Vel-Fatith",
    summary: "",
    description: "Especie que, impulsada por la desesperación de preservar su linaje genético, ha llevado a cabo experimentos con numerosas especies de los sistemas cercanos a su planeta.",
    image: "/images/races/fatith.jpg",
    homeworldId: "enderith-ka",
    FirstBook: ["book1"],
    appearances: [
      {
        bookId: "book1",
        eraId: "era-1",
        text: "La desesperación por mantener viva su genética, y el desconocimiento de sus orígenes y su pasado han creado un ambiente lleno de traiciones entre los Fatith, quienes, sin saberlo, han creado a un ser poderoso, cuya única finalidad es la venganza.",
        alignment: "Hostiles",
        faction: "Imperio Solar",
        organizations: ["Orden Cealtar"],
      }
    ]
  },
  {
    id: "tailyas",
    slug: "tailyas",
    name: "Taílyas",
    summary: "Resumen",
    description: "Mercenarios nómadas presentes en distintos conflictos galácticos.",
    image: "/images/races/nastajiri.jpg",
    homeworldId: "naidul",
    FirstBook: ["book2"],
    appearances: [
      {
        bookId: "book2",
        eraId: "era-1",
        text: "Historia 1",
        alignment: "Benévolos",
        faction: "Imperio Solar",
        organizations: [""],
      },
      {
        bookId: "book3",
        eraId: "era-2",
        text: "Historia 1",
        alignment: "Benévolos",
        faction: "Imperio Solar 2",
        organizations: ["Orden Cealtar"],
      }
    ]
  },
];