import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../santiy";
import { SkillData } from "../../typings";

const query = groq`
    *[_type == "skills"]
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SkillData[]>
) {
  const skillData: SkillData[] = await sanityClient.fetch(query);

  res.status(200).json(skillData);
}
