export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'role',
      type: 'string',
    },
    {
      name: 'photo',
      title: 'photo',
      type: 'image',
    },
    {
      name: 'words',
      title: 'words',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
}
