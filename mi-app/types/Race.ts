import { RaceAppearance } from "./RaceAppearance";

export interface Race {
  id: string;
  slug: string;
  name: string;
  description: string;
  image?: string;

  homeworldId: string; // 🔥 antes era string libre

  appearances: RaceAppearance[];

  bookIds?: string[]; // 📚 nuevas apariciones en libros
}