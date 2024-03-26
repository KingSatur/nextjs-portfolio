import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../santiy";
import { AboutSchema } from "../../typings";

const query = groq`
    *[_type == "about"][0]
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AboutSchema | { message: string }>
) {
  if (req.method === "GET") {
    const aboutData: AboutSchema = await sanityClient.fetch(query);

    res.status(200).json(aboutData);
  }
  res.status(405).json({ message: "Method not allowed" });
}
