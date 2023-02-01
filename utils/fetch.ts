export const Paths = {
  GET_HERO_DATA: "getHero",
  GET_ABOUT_DATA: "getAbout",
  GET_SKILL_DATA: "getSkill",
  GET_JOB_DATA: "getJobs",
};

export const getData = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${path}`);

  const data = await res.json();

  const dataCast: T = data as T;

  return dataCast;
};
