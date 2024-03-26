export default {
  name: 'certification',
  title: 'Certifications',
  type: 'document',
  fields: [
    {
      name: 'certificationTitle',
      title: 'Certification title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Certificate Image',
      type: 'image',
    },
    {
      name: 'issuedAt',
      title: 'Issued At',
      type: 'date',
    },
    {
      name: 'credentialUrl',
      title: 'Credential Url',
      type: 'url',
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ['https'],
        }),
    },
  ],
}
