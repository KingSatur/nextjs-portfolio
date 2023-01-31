import { HeroData } from "../typings";

export const getHeroData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocial`);

  const data = await res.json();

  const heroData: HeroData = data;

  return heroData;
};
