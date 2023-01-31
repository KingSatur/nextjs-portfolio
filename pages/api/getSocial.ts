import { createClient, groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../santiy";
import { HeroData } from "../../typings";

const query = groq`
    *[_type == "hero"][0]
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HeroData>
) {
  const heroData: HeroData = await sanityClient.fetch(query);

  res.status(200).json({ ...heroData });
}
