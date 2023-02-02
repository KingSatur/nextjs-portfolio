import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../santiy";
import { ShowCase } from "../../typings";

const query = groq`
  *[_type == "showcase"]
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ShowCase[]>
) {
  const showCase: ShowCase[] = await sanityClient.fetch(query);

  res.status(200).json(showCase);
}
