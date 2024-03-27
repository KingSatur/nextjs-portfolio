import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../santiy";
import { ContactSchema } from "../../typings";

const query = groq`
    *[_type == "contact"][0]
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactSchema | { message: string }>
) {
  if (req.method === "GET") {
    const contactData: ContactSchema = await sanityClient.fetch(query);

    return res.status(200).json(contactData);
  }
  return res.status(405).json({ message: "Method not allowed" });
}
