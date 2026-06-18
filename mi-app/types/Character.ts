import { CharacterAppearance } from "./CharacterAppearance";

export interface Character {
  id: string;
  slug: string;
  name: string;
  description: string;
  image?: string;

  raceId: string;

  appearances: CharacterAppearance[];
}