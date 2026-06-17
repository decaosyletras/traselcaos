export interface Book {
  id: string;

  slug: string;

  title: string;
  
  year: string;

  cover: string;

  publishYear: number;

  timelineYear: number;

  synopsis: string;

  spoilerLevel?: number;
}