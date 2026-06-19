export const eras = [
  {
    id: "era-1",
    name: "Ciclo 1 / Era del Vacío",

    benevolentEvents: [
      { id: 1, temi: "0000A1FF", title: "Fundación de Nerath" },
      { id: 2, temi: "1200B3AA", title: "Primer Contacto Interestelar" },
      { id: 3, temi: "1F10C0DE", title: "Alianza de Sistemas Libres" },
    ],

    hostileEvents: [
      { id: 1, temi: "000012FF", title: "Ascenso del Imperio Solar" },
      { id: 2, temi: "0A0A33FF", title: "Guerra de las Fronteras" },
      { id: 3, temi: "1A00FF10", title: "Purga de Arkon" },
    ],
  },

  {
    id: "era-2",
    name: "Ciclo 2 / Era del Despertar",

    benevolentEvents: [
      { id: 1, temi: "2200AB10", title: "Colonización de Sectores" },
      { id: 2, temi: "3000CC11", title: "Red de Puertas Estelares" },
      { id: 3, temi: "3A10DD22", title: "Tratado de Helion" },
    ],

    hostileEvents: [
      { id: 1, temi: "2100FF10", title: "Caída de Orion" },
      { id: 2, temi: "2B00FF22", title: "Rebelión de Talos" },
      { id: 3, temi: "3F00FF99", title: "Bloqueo de Vega" },
    ],
  },

  {
    id: "era-3",
    name: "Ciclo 3 / Era de la Expansión",

    benevolentEvents: [
      { id: 1, temi: "4000AA01", title: "Guardia Estelar Formada" },
      { id: 2, temi: "4500BB11", title: "Pacto de Centauri" },
      { id: 3, temi: "4A00CC22", title: "Reconstrucción de Altair" },
    ],

    hostileEvents: [
      { id: 1, temi: "4100FF22", title: "Purga del Sector Norte" },
      { id: 2, temi: "4800FF33", title: "Asedio de Kron" },
      { id: 3, temi: "4F00FF44", title: "Guerra de los Tres Soles" },
    ],
  },

  {
    id: "era-4",
    name: "Ciclo 4 / Era del Conflicto",

    benevolentEvents: [
      { id: 1, temi: "4000AA01", title: "Guardia Estelar Formada" },
      { id: 2, temi: "4500BB11", title: "Pacto de Centauri" },
      { id: 3, temi: "4A00CC22", title: "Reconstrucción de Altair" },
    ],

    hostileEvents: [
      { id: 1, temi: "4100FF22", title: "Purga del Sector Norte" },
      { id: 2, temi: "4800FF33", title: "Asedio de Kron" },
      { id: 3, temi: "4F00FF44", title: "Guerra de los Tres Soles" },
    ],
  },

  {
    id: "era-5",
    name: "Ciclo 5 / Era del Conflicto",

    benevolentEvents: [
      { id: 1, temi: "4000AA01", title: "Guardia Estelar Formada" },
      { id: 2, temi: "4500BB11", title: "Pacto de Centauri" },
      { id: 3, temi: "4A00CC22", title: "Reconstrucción de Altair" },
    ],

    hostileEvents: [
      { id: 1, temi: "4100FF22", title: "Purga del Sector Norte" },
      { id: 2, temi: "4800FF33", title: "Asedio de Kron" },
      { id: 3, temi: "4F00FF44", title: "Guerra de los Tres Soles" },
    ],
  },
];

export function positionFromTemi(temi: string) {
  const value = parseInt(temi, 16);

  // rango real de 32 bits
  const max = 0xffffffff;

  return (value / max) * 100;
}