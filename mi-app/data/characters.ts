import { Character } from "@/types/Character";

export const characters: Character[] = [
  {
    //LIBRO 1
    id: "arsuen",
    slug: "arsuen",
    name: "Arsuen",
    description: "El joven que miró más allá de las estrellas.",
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
    id: "sorie",
    slug: "sorie",
    name: "Sorie",
    description: "Líder que logró establecer contacto con los Mugtatarios.",
    image: "/images/characters/lyra.jpg",
    raceId: "nastajiri",
    relationships: [],
  },

  {
    id: "nafim",
    slug: "nafim",
    name: "Nafim",
    description: "El que trajo información a los Nastajiri. El desaparecido de forma misteriosa.",
    image: "/images/characters/lyra.jpg",
    raceId: "xaofeir",
    relationships: [],
  },

  {
    id: "saone",
    slug: "saone",
    name: "Saone",
    description: "El iniciador de la guerra interna de los Fatith. El traidor. El desterrado. El iniciador del legado más corto en su especie.",
    image: "/images/characters/lyra.jpg",
    raceId: "vel-fatith",
    relationships: [],
  },
  {
    id: "yumbe-il",
    slug: "yumbe-il",
    name: "Yumbe'il",
    description: "El rey único que sucumbió ante la locura de su puesto.",
    image: "/images/characters/lyra.jpg",
    raceId: "vel-fatith",
    relationships: [],
  },
  {
    id: "andec",
    slug: "andec",
    name: "Andec",
    description: "El máximo genetista entre los Fatith.",
    image: "/images/characters/lyra.jpg",
    raceId: "vel-fatith",
    relationships: [],
  },
  {
    id: "orioth",
    slug: "orioth",
    name: "Orioth",
    description: "Mano derecha del rey Yumb'il durante su gobierno. La representación de la lealtad Fatith.",
    image: "/images/characters/lyra.jpg",
    raceId: "vel-fatith",
    relationships: [],
  },
  {
    id: "viamine",
    slug: "viamine",
    name: "Viamine",
    description: "El oportunista. El de la compasión apenas reconocida.",
    image: "/images/characters/lyra.jpg",
    raceId: "vel-fatith",
    relationships: [],
  },
  {
    id: "venet",
    slug: "venet",
    name: "Venet",
    description: "La personificación de la justicia vengativa.",
    image: "/images/characters/lyra.jpg",
    raceId: "vel-fatith",
    relationships: [],
  },



  //LIBRO 2
  {
    id: "encoa",
    slug: "encoa",
    name: "Encoa",
    description: "Principal afectado de la interacción con los Mugtas. El primero de su especie en enfrentar el problema del libre albedrío.",
    image: "/images/characters/lyra.jpg",
    raceId: "tailyas",
    relationships: [],
  },
  {
    id: "aunala",
    slug: "aunala",
    name: "Aunala",
    description: "Líder de las relaciones interestelares que guía a los Taílyas al contacto con los Mugtatarios.",
    image: "/images/characters/lyra.jpg",
    raceId: "tailyas",
    relationships: [],
  },
  {
    id: "samsei",
    slug: "samsei",
    name: "Samsei",
    description: "Tecnólogo reservado con amplios conocimientos de la tecnología Mugta.",
    image: "/images/characters/lyra.jpg",
    raceId: "tailyas",
    relationships: [],
  },
  {
    id: "amba",
    slug: "amba",
    name: "Amba",
    description: "Principal recopiladora de información sobre los Mugtatarios.",
    image: "/images/characters/lyra.jpg",
    raceId: "tailyas",
    relationships: [],
  },
  
  {
    id: "valda",
    slug: "valda",
    name: "Valda",
    description: "Líder de la Orden Cósmica del Espacio en busca de hacer prevalecer sus ideologías.",
    image: "/images/characters/lyra.jpg",
    raceId: "mugtatarios",
    relationships: [],
  },
  {
    id: "nalika",
    slug: "nalika",
    name: "Nálika",
    description: "Poseedora de un don generacional. La poseedora de la bilocación.",
    image: "/images/characters/lyra.jpg",
    raceId: "mugtatarios",
    relationships: [],
  },
  
  {
    id: "egonnar",
    slug: "egonnar",
    name: "Égonnar",
    description: "Obediente a su deidad, es conocido como un guía de los Ratti hacia su mejor destino posible.",
    image: "/images/characters/lyra.jpg",
    raceId: "ratti-pem-ya",
    relationships: [],
  },
  {
    id: "ignnor",
    slug: "ignnor",
    name: "Ignnor",
    description: "El primer afectado tras la llega de de la Noc-Auli.",
    image: "/images/characters/lyra.jpg",
    raceId: "ratti-pem-ya",
    relationships: [],
  },
  {
    id: "delius",
    slug: "delius",
    name: "Delius",
    description: "Principal investigadora y apoyo para la Noc-Auli.",
    image: "/images/characters/lyra.jpg",
    raceId: "ratti-pem-ya",
    relationships: [],
  },



  //LIBRO 3
  {
    id: "itsssna",
    slug: "itsssna",
    name: "Itsssna",
    description: "Rebelde en desacuerdo con la estructura piramidal y su Soberano. El que trajo dos regalos al círculo de los Trece.",
    image: "/images/characters/lyra.jpg",
    raceId: "krks",
    relationships: [],
  },
  {
    id: "ak-oum",
    slug: "ak-oum",
    name: "Ak'oum",
    description: "Soberano que ejerce con mano dura el poder y el dominio. El que quiere estar por encima de los Trece.",
    image: "/images/characters/lyra.jpg",
    raceId: "krks",
    relationships: [],
  },

];