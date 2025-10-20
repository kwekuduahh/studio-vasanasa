import {defineType, defineField} from 'sanity'

export const homepageType = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heroTitle',
          title: 'Hero Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'heroBody',
          title: 'Hero Body',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'ctaSlug',
          title: 'CTA Slug',
          type: 'slug',
          options: {
            source: 'heroSection.heroTitle',
            maxLength: 96,
          },
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // Founder Quote Section
    defineField({
      name: 'founderQuoteSection',
      title: 'Founder Quote Section',
      type: 'object',
      fields: [
        defineField({
          name: 'quote',
          title: 'Quote',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'founderImage',
          title: 'Founder Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'roleTitle',
          title: 'Role Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // Business Stats Section
    defineField({
      name: 'businessStatsSection',
      title: 'Business Stats Section',
      type: 'object',
      fields: [
        defineField({
          name: 'statistics',
          title: 'Statistics',
          type: 'array',
          of: [{type: 'businessStat'}],
          validation: (Rule) => Rule.required().length(4),
        }),
        defineField({
          name: 'sectionImage',
          title: 'Section Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // Train With Vasanasa Section
    defineField({
      name: 'trainWithVasanasaSection',
      title: 'Train With Vasanasa Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // Instructors Section
    defineField({
      name: 'instructorsSection',
      title: 'Instructors Section',
      type: 'object',
      fields: [
        defineField({
          name: 'instructors',
          title: 'Instructors',
          type: 'array',
          of: [{type: 'instructor'}],
          validation: (Rule) => Rule.required().length(2),
        }),
      ],
    }),

    // Workshops Section
    defineField({
      name: 'workshopsSection',
      title: 'Workshops Section',
      type: 'object',
      fields: [
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
    }),

    // Upcoming Events Section
    defineField({
      name: 'upcomingEventsSection',
      title: 'Upcoming Events Section',
      type: 'array',
      of: [{type: 'upcomingEvent'}],
    }),

    // Testimonials Section
    defineField({
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'array',
      of: [{type: 'testimonial'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'heroSection.heroTitle',
    },
    prepare({title}) {
      return {
        title,
      }
    },
  },
})
