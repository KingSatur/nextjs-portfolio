interface SanityResponse {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface HeroData extends SanityResponse {
  _type: "hero";
  name: string;
  role: string;
  words: string[];
}
