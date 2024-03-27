import { groq } from "next-sanity";
import { sanityClient } from "../santiy";

export async function fetchWithSanityQuery<T>(query: string): Promise<T> {
  const mappedQuery = groq`${query}`;

  return await sanityClient.fetch(mappedQuery);
}
