export interface Book {
  id: string;
  slug: string;
  title: string;
  cover: string;
  publishYear: number;
  LinkAmazon: string;
  timelineYear: number;
  synopsis: string;
  spoilerLevel?: number;
  heroDescription: string;
}