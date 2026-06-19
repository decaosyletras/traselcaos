import { Character } from "@/types/Character";

export const characters: Character[] = [
  {
    id: "arsuen",
    slug: "arsuen",
    name: "Arsuen",
    description:
      "Comandante militar que desempeñó un papel clave durante la expansión imperial.",
    image: "/images/characters/kael.jpg",
    raceId: "nastajiri",
    relationships: [
        {
        label: "Padre",
        characterId: "sorie",
        },
        {
        label: "Amigo",
        characterId: "NombreAmigo",
        }
    ],
  },
  {
    id: "venet",
    slug: "venet",
    name: "Venet",
    description:
      "Exploradora vinculada a los secretos del Anillo.",
    image: "/images/characters/lyra.jpg",
    raceId: "vel-fatith",
    relationships: [],
  },
  {
    id: "sorie",
    slug: "sorie",
    name: "Sorie",
    description:
      "Líder de la Unidad tecnológica",
    image: "/images/characters/lyra.jpg",
    raceId: "vel-fatith",
    relationships: [],
  },
];