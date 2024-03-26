export default {
  name: 'showCase',
  title: 'Show cases',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'screenshot',
      title: 'Screenshot',
      type: 'image',
    },
    {
      name: 'facts',
      title: 'Facts',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'relevance',
      title: 'Relevance',
      type: 'number',
    },
  ],
}
