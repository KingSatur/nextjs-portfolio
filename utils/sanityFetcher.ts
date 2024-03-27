import { groq } from "next-sanity";
import { sanityClient } from "../santiy";

export const Querys = {
  GET_HERO_DATA_QUERY: `*[_type == "hero"][0]`,
  GET_ABOUT_DATA_QUERY: `*[_type == "about"][0]`,
  GET_SKILL_DATA_QUERY: `*[_type == "skills"]`,
  GET_JOB_DATA_QUERY: `
  *[_type == "job"] | order(relevance desc) {
    ...,
    techStack[]->
  }
  `,
  GET_SHOW_CASE_QUERY: `*[_type == "showcase"]`,
  GET_CONTACT_DATA_QUERY: `*[_type == "certification"] | order(issuedAt desc)`,
  GET_SOCIAL_DATA_QUERY: `*[_type == "social"]`,
  GET_CERTIFICATION_DATA_QUERY: `*[_type == "certification"] | order(issuedAt desc)`,
};

export async function fetchWithSanityQuery<T>(query: string): Promise<T> {
  const mappedQuery = groq`${query}`;

  return await sanityClient.fetch(mappedQuery);
}
