import {defineType, defineField} from 'sanity'

export const instructor = defineType({
  name: 'instructor',
  title: 'Instructor',
  type: 'object',
  fields: [
    defineField({
      name: 'instructorImage',
      title: 'Instructor Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'instructorTitle',
      title: 'Instructor Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'instructorName',
      title: 'Instructor Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'instructorBio',
      title: 'Instructor Bio',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'instructorName',
      subtitle: 'instructorTitle',
      media: 'instructorImage',
    },
  },
})
