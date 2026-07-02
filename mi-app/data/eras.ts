export const eras = [
  {
    id: "era-3",
    name: "Ciclo 3 / Era de la Expansión",
    startTemi: "E6E9A4FF",
    endTemi: "E6EA17FF",

    benevolentEvents: [
      { id: 1, temi: "E6E9A7ED", title: "Pacto Nak'an" },
      { id: 2, temi: "E6EA132A", title: "Contacto Xaofeir-Nastajiri" },
      { id: 3, temi: "E6EA15E6", title: "Pacto Nak'adan" },
    ],

    hostileEvents: [
      { id: 4, temi: "E6E9A7EC", title: "Fundación de los Trece" },
      { id: 5, temi: "E6E9E9ED", title: "El dibujante que dió luz a los sigilos" },
    ],
  },

  {
    id: "era-4",
    name: "Ciclo 4 / Era del Conflicto",
    startTemi: "3DB7EFFF",
    endTemi: "3DB95FFF",

    benevolentEvents: [
      { id: 1, temi: "3DB82C49", title: "La conjunción del espacio-tiempo" },
    ],

    hostileEvents: [],
  },
];

export function positionFromTemi(temi: string, start: string, end: string) {
  const t = parseInt(temi, 16);
  const s = parseInt(start, 16);
  const e = parseInt(end, 16);

  return ((t - s) / (e - s)) * 100;
}