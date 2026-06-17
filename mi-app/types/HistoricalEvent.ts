export interface HistoricalEvent {
  id: string;

  slug: string;

  name: string;

  description: string;

  year: number;

  eraId: string;

  relatedBooks: string[];
}