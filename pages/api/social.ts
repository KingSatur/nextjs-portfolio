import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../santiy";
import { SocialSchema } from "../../typings";

const query = groq`
    *[_type == "social"]
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SocialSchema[] | { message: string }>
) {
  if (req.method === "GET") {
    const socialData: SocialSchema[] = await sanityClient.fetch(query);

    return res.status(200).json(socialData);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
