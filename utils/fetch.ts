export const Paths = {
  GET_HERO_DATA: "hero",
  GET_ABOUT_DATA: "about",
  GET_SKILL_DATA: "skill",
  GET_JOB_DATA: "jobs",
  GET_SHOW_CASE: "show-case",
  GET_CONTACT_DATA: "contact",
  GET_SOCIAL_DATA: "social",
};

export const getData = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${path}`);

  const data = await res.json();

  const dataCast: T = data as T;

  return dataCast;
};
