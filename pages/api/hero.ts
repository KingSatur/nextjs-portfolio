import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../santiy";
import { HeroSchema } from "../../typings";

const query = groq`
    *[_type == "hero"][0]
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HeroSchema | { message: string }>
) {
  if (req.method === "GET") {
    const heroData: HeroSchema = await sanityClient.fetch(query);

    return res.status(200).json(heroData);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
