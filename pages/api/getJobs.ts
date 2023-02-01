import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../santiy";
import { JobData } from "../../typings";

const query = groq`
  *[_type == "job"] {
    ...,
    techStack[]->
  }
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JobData[]>
) {
  const jobData: JobData[] = await sanityClient.fetch(query);

  res.status(200).json(jobData);
}
