export const Paths = {
  GET_HERO_DATA: "hero",
  GET_ABOUT_DATA: "about",
  GET_SKILL_DATA: "skill",
  GET_JOB_DATA: "jobs",
  GET_SHOW_CASE: "show-case",
  GET_CONTACT_DATA: "contact",
  GET_SOCIAL_DATA: "social",
  GET_CERTIFICATION_DATA: "certification",
};

export const getData = async <T>(path: string): Promise<T> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${path}`);

    console.log({ res });

    const data = await res.json();

    const dataCast: T = data as T;

    return dataCast;
  } catch (error) {
    console.log("strange error", error);
    return Promise.reject(error);
  }
};
