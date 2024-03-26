export default {
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'imagePath',
      title: 'Image path',
      type: 'url',
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ['https'],
        }),
    },
  ],
}
