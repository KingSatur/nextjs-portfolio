import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../santiy";
import { ContactData } from "../../typings";

const query = groq`
    *[_type == "contact"][0]
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactData>
) {
  const contactData: ContactData = await sanityClient.fetch(query);

  res.status(200).json(contactData);
}
