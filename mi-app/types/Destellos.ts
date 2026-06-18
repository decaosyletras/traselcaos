export interface Flash {
  id: string;
  slug: string;
  name: string;
  color: string;
  ability: string;
  era: string;
  bearerId: string; // 👈 referencia al personaje
}