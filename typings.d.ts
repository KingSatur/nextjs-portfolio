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

export interface AboutSchema extends SanityResponse {
  description: string;
  photo: Image;
}

export interface SkillSchema extends SanityResponse {
  name: string;
  imagePath: string;
  logo: Image;
}

export interface JobSchema extends SanityResponse {
  name: string;
  role: string;
  photo: Image;
  starDate: Date;
  finishDate: Date;
  keyAchievements: string[];
  techStack: SkillSchema[];
  isCurrentlyWorking: boolean;
  relevance: number;
}

export interface ShowCaseSchema extends SanityResponse {
  name: string;
  screenshot: Image;
  facts: string[];
  link: string;
  relevance: number;
}

export interface ContactSchema extends SanityResponse {
  email: string;
}

export interface SocialSchema extends SanityResponse {
  _type: "social";
  title: string;
  url: string;
}

export interface HeroSchema extends SanityResponse {
  _type: "hero";
  name: string;
  role: string;
  words: string[];
  photo: Image;
}
