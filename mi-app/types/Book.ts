export interface Book {
  id: string;

  slug: string;

  title: string;

  cover: string;

  publishYear: number;

  timelineYear: number;

  synopsis: string;

  spoilerLevel?: number;
}