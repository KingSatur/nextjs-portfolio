import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../santiy";
import { SocialData } from "../../typings";

const query = groq`
    *[_type == "social"]
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SocialData[]>
) {
  const socialData: SocialData[] = await sanityClient.fetch(query);

  res.status(200).json(socialData);
}
