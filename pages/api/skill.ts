import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../santiy";
import { SkillSchema } from "../../typings";

const query = groq`
    *[_type == "skills"]
`;

export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse<SkillSchema[] | { message: string }>
) {
  if (req.method === "GET") {
    const skillData: SkillSchema[] = await sanityClient.fetch(query);

    res.status(200).json(skillData);
  }

  res.status(405).json({ message: "Method not allowed" });
}
