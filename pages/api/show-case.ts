import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../santiy";
import { ShowCaseSchema } from "../../typings";

const query = groq`
  *[_type == "showcase"]
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ShowCaseSchema[] | { message: string }>
) {
  if (req.method === "GET") {
    const showCase: ShowCaseSchema[] = await sanityClient.fetch(query);

    return res.status(200).json(showCase);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
