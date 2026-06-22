import { RaceAppearance } from "./RaceAppearance";

export interface Race {
  id: string;
  slug: string;
  name: string;
  summary: string;
  description: string;
  image?: string;
  homeworldId: string;
  appearances: RaceAppearance[];
  FirstBook: string[];
}