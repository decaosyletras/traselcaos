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
    id: "ignua",
    slug: "ignua",
    name: "Ignua",
    description: "El rey temporal que enfrenta las eras bélicas.",
    image: "/images/characters/lyra.jpg",
    raceId: "guas",
    relationships: [],
  },

  {
    id: "agaer",
    slug: "agaer",
    name: "Agaer",
    description: "La reina que no teme ceder su lugar a fin de declarar la guerra.",
    image: "/images/characters/lyra.jpg",
    raceId: "guas",
    relationships: [],
  },
  

  {
    id: "trisal",
    slug: "trisal",
    name: "Trisal",
    description: "Consejero de la Orden Cósmica cuyo papel implica acercamiento a los hostiles.",
    image: "/images/characters/lyra.jpg",
    raceId: "fegiste",
    relationships: [],
  },
  

  {
    id: "erv",
    slug: "erv",
    name: "Erv",
    description: "La reina que terminó de cerrar tratos fuera de la Orden Cósmica. La que dio continuidad al legado de Tae.",
    image: "/images/characters/lyra.jpg",
    raceId: "assul",
    relationships: [],
  },


  {
    id: "olen",
    slug: "olen",
    name: "Olen",
    description: "El líder que rompió con las leyes de las dos líneas sanguineas Nandianas.",
    image: "/images/characters/lyra.jpg",
    raceId: "nandia",
    relationships: [],
  },
  {
    id: "mil",
    slug: "mil",
    name: "Mil",
    description: "Consejero de Ariyis.",
    image: "/images/characters/lyra.jpg",
    raceId: "nandia",
    relationships: [],
  },
  {
    id: "ariyis",
    slug: "ariyis",
    name: "Ariyis",
    description: "Sucesor original de Olen, a quien se le arrebató el puesto que le correspondería.",
    image: "/images/characters/lyra.jpg",
    raceId: "nandia",
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
  {
    id: "immte",
    slug: "immte",
    name: "Immte",
    description: "Viajero accidentado perteneciente a «la Mezcla».",
    image: "/images/characters/lyra.jpg",
    raceId: "noc-auli",
    relationships: [],
  },
  {
    id: "edres",
    slug: "edres",
    name: "Edres",
    description: "Viajero accidentado perteneciente a «la Mezcla».",
    image: "/images/characters/lyra.jpg",
    raceId: "noc-auli",
    relationships: [],
  },
  {
    id: "dala",
    slug: "dala",
    name: "Dala",
    description: "Viajero accidentado perteneciente a «la Mezcla».",
    image: "/images/characters/lyra.jpg",
    raceId: "noc-auli",
    relationships: [],
  },
  {
    id: "turid",
    slug: "turid",
    name: "Turid",
    description: "Viajero accidentado perteneciente a «la Mezcla».",
    image: "/images/characters/lyra.jpg",
    raceId: "noc-auli",
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
  {
    id: "aluum",
    slug: "aluum",
    name: "Aluum",
    description: "Majestuoso susurro del poder en el viento. Perteneciente al círculo de «los Trece».",
    image: "/images/characters/lyra.jpg",
    raceId: "krks",
    relationships: [],
  },
  
  {
    id: "jucent",
    slug: "jucent",
    name: "Jucent",
    description: "Conocedores del pasado, y transmisores de información.",
    image: "/images/characters/lyra.jpg",
    raceId: "egiara",
    relationships: [],
  },
  
  {
    id: "arbilia",
    slug: "arbilia",
    name: "Arbilia",
    description: "Historiadores y transmisores de información.",
    image: "/images/characters/lyra.jpg",
    raceId: "dutim",
    relationships: [],
  },
  
  {
    id: "neis",
    slug: "neis",
    name: "Neís",
    description: "La de la vida eterna. La que nunca muere. La posible solución a la enfermedad del envejecimiento.",
    image: "/images/characters/lyra.jpg",
    raceId: "Raugari",
    relationships: [],
  },
  
  {
    id: "legiar",
    slug: "legiar",
    name: "Legiar",
    description: "Aliados importantes de los Rugari. Los creadores de los clones vigilantes.",
    image: "/images/characters/lyra.jpg",
    raceId: "Itsher",
    relationships: [],
  },

  
  {
    id: "lura",
    slug: "lura",
    name: "Lura",
    description: "Principal persuasivo en la decisión de Encoa en favor de la Vinculación de Prevención.",
    image: "/images/characters/lyra.jpg",
    raceId: "ecdaum",
    relationships: [],
  },

  
  {
    id: "naulbe",
    slug: "naulbe",
    name: "Naúlbe",
    description: "Junto a Lura, es de los pincipales interesados en prevenir que los Aliados cumplan con su meta.",
    image: "/images/characters/lyra.jpg",
    raceId: "ania",
    relationships: [],
  },
  {
    id: "noen",
    slug: "noen",
    name: "Noen",
    description: "Consejero principal de Naúlbe.",
    image: "/images/characters/lyra.jpg",
    raceId: "ania",
    relationships: [],
  },
  
  {
    id: "sissef",
    slug: "sissef",
    name: "Sissef",
    description: "Estratega de guerra. Líder de ataque para la Vinculación de Prevención.",
    image: "/images/characters/lyra.jpg",
    raceId: "ittu",
    relationships: [],
  },
  
  {
    id: "au-lert",
    slug: "au-lert",
    name: "Au-lert",
    description: "Estratega de guerra. Líder de defensa para la Vinculación de Prevención.",
    image: "/images/characters/lyra.jpg",
    raceId: "au-lert",
    relationships: [],
  },
  
  
  {
    id: "fos",
    slug: "fos",
    name: "Fos",
    description: "El que brinda consuelo y una salida a los Taílyas.",
    image: "/images/characters/lyra.jpg",
    raceId: "astaronte",
    relationships: [],
  },

];