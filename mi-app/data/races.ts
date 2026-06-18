import { Race } from "@/types/Race";

export const races: Race[] = [
  {
    id: "seoseres",
    slug: "seoseres",
    name: "Seoseres",
    description: "Mercenarios nómadas presentes en distintos conflictos galácticos.",
    image: "/images/races/seoseres.jpg",
    homeworldId: "nerath",
    bookIds: ["book1"],
    appearances: [
      {
        bookId: "book1",
        eraId: "era-imperial",
        alignment: "Hostiles",
        faction: "Imperio Solar",
        organizations: ["Orden Cealtar"],
      },
      {
        bookId: "book3",
        eraId: "era-imperial",
        alignment: "Hostiles",
        faction: "Imperio Solar",
        organizations: ["Orden Cealtar"],
      }
    ]
  },
];