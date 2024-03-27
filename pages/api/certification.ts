import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../santiy";
import { CertificationSchema } from "../../typings";

const query = groq`
    *[_type == "certification"] | order(issuedAt desc)
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CertificationSchema[] | { message: string }>
) {
  if (req.method === "GET") {
    const certificationData: CertificationSchema[] = await sanityClient.fetch(
      query
    );

    return res.status(200).json(certificationData);
  }
  return res.status(405).json({ message: "Method not allowed" });
}
