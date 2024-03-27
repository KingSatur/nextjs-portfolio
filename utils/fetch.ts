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

export const Querys = {
  GET_HERO_DATA_QUERY: `*[_type == "hero"][0]`,
  GET_ABOUT_DATA_QUERY: `*[_type == "about"][0]`,
  GET_SKILL_DATA_QUERY: `*[_type == "skills"]`,
  GET_JOB_DATA_QUERY: `
  *[_type == "job"] | order(starDate desc) {
    ...,
    techStack[]->
  }
  `,
  GET_SHOW_CASE_QUERY: `*[_type == "showcase"]`,
  GET_CONTACT_DATA_QUERY: `*[_type == "certification"] | order(issuedAt desc)`,
  GET_SOCIAL_DATA_QUERY: `*[_type == "social"]`,
  GET_CERTIFICATION_DATA_QUERY: `*[_type == "certification"] | order(issuedAt desc)`,
};

export const getData = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${path}`);
  const data = await res.json();

  const dataCast: T = data as T;

  return dataCast;
};
