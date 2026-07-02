export interface Book {
  id: string;
  slug: string;
  title: string;
  cover: string;
  publishYear: number;
  amazon: {
    es: string,
    mx: string,
    us: string,
  },
  LinkAmazon: string;
  timelineYear: number;
  synopsis: string;
  spoilerLevel?: number;
  heroDescription: string;
}