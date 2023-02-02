interface SanityResponse {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface AboutData extends SanityResponse {
  background: string;
  photo: Image;
}

export interface SkillData extends SanityResponse {
  name: string;
  imagePath: string;
  logo: Image;
}

export interface JobData extends SanityResponse {
  name: string;
  role: string;
  photo: Image;
  starDate: Date;
  finishDate: Date;
  keyAchievements: string[];
  techStack: SkillData[];
  isCurrentlyWorking: boolean;
  relevance: number;
}

export interface ShowCase extends SanityResponse {
  name: string;
  screenshot: Image;
  facts: string[];
  link: string;
  relevance: number;
}

export interface ContactData extends SanityResponse {
  email: string;
}

export interface SocialData extends SanityResponse {
  _type: "social";
  title: string;
  url: string;
}

export interface HeroData extends SanityResponse {
  _type: "hero";
  name: string;
  role: string;
  words: string[];
  photo: Image;
}
