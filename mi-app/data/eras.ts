export const eras = [
  {
    id: "era-3",
    name: "Ciclo 3 / Era de la Expansión",
    startTemi: "E6E971EC",
    endTemi: "E6EA2FFF",

    benevolentEvents: [
      { id: 1, temi: "E6EA132A", title: "Arsuen y Venet" },
    ],

    hostileEvents: [
      { id: 2, temi: "E6E9A7EC", title: "Fundación de los Trece" },
      { id: 3, temi: "E6EA15E6", title: "Segundo pacto Nak'adan" },
    ],
  },

  {
    id: "era-4",
    name: "Ciclo 4 / Era del Conflicto",
    startTemi: "3DA82C49",
    endTemi: "3DF82C49",

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