import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../santiy";
import { JobSchema } from "../../typings";

const query = groq`
  *[_type == "job"] | order(_createdAt desc) {
    ...,
    techStack[]->
  }
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JobSchema[] | { message: string }>
) {
  if (req.method === "GET") {
    const jobData: JobSchema[] = await sanityClient.fetch(query);

    res.status(200).json(jobData);
  }

  res.status(405).json({ message: "Method not allowed" });
}
