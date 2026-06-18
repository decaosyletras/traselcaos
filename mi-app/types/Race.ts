import { RaceAppearance } from "./RaceAppearance";

export interface Race {
  id: string;
  slug: string;
  name: string;
  description: string;
  image?: string;
  homeworld: string;
  appearances: RaceAppearance[];
}