export default {
  name: 'job',
  title: 'Jobs',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
    },
    {
      name: 'starDate',
      title: 'Star Date',
      type: 'date',
    },
    {
      name: 'finishDate',
      title: 'Finish Date',
      type: 'date',
    },
    {
      name: 'keyAchievements',
      title: 'Key Achievements',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'skill',
            },
          ],
        },
      ],
    },
    {
      name: 'isCurrentlyWorking',
      title: 'Is Currently Working',
      type: 'boolean',
    },
    {
      name: 'relevance',
      title: 'Relevance',
      type: 'number',
    },
  ],
}
