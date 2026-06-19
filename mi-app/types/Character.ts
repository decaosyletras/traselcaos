export interface Character {
  id: string;
  slug: string;
  name: string;
  description: string;
  image?: string;
  raceId: string;

  relationships?: {
    label: string;
    characterId: string;
  }[];
}