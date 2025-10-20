import {defineType, defineField} from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',
  fields: [
    defineField({
      name: 'testorImage',
      title: 'Testimonial Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'testimonyBody',
      title: 'Testimony Body',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'testorTitle',
      title: 'Testimonial Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'testorTitleCaption',
      title: 'Testimonial Title Caption',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'testorTitle',
      subtitle: 'testorTitleCaption',
      media: 'testorImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle,
        media,
      }
    },
  },
})
