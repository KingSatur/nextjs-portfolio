import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../santiy";
import { AboutData } from "../../typings";

const query = groq`
    *[_type == "about"][0]
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AboutData>
) {
  const aboutData: AboutData = await sanityClient.fetch(query);

  res.status(200).json(aboutData);
}
