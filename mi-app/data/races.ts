import { Race } from "@/types/Race";

export const races: Race[] = [
  {
    id: "nastajiri",
    slug: "nastajiri",
    name: "Nastajiri",
    summary: "Resumen",
    description: "Mercenarios nómadas presentes en distintos conflictos galácticos.",
    image: "/images/races/nastajiri.jpg",
    homeworldId: "naidul",
    bookIds: ["book1","book3"],
    appearances: [
      {
        bookId: "book1",
        eraId: "era-1",
        alignment: "Benévolos",
        faction: "Imperio Solar",
        organizations: [""],
      },
      {
        bookId: "book3",
        eraId: "era-2",
        alignment: "Benévolos",
        faction: "Imperio Solar 2",
        organizations: ["Orden Cealtar"],
      }
    ]
  },
  {
    id: "vel-fatith",
    slug: "vel-fatith",
    name: "Vel-Fatith",
    summary: "Resumen2",
    description: "Hostiles experimentadores.",
    image: "/images/races/fatith.jpg",
    homeworldId: "enderith-ka",
    bookIds: ["book1"],
    appearances: [
      {
        bookId: "book1",
        eraId: "era-1",
        alignment: "Hostiles",
        faction: "Imperio Solar",
        organizations: ["Orden Cealtar"],
      }
    ]
  },
];