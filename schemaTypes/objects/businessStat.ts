import {defineType, defineField} from 'sanity'

export const businessStat = defineType({
  name: 'businessStat',
  title: 'Business Statistic',
  type: 'object',
  fields: [
    defineField({
      name: 'statisticsNumber',
      title: 'Statistics Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'statisticsNumber',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle,
      }
    },
  },
})
