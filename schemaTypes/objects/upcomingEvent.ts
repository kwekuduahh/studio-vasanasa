import {defineType, defineField} from 'sanity'

export const upcomingEvent = defineType({
  name: 'upcomingEvent',
  title: 'Upcoming Event',
  type: 'object',
  fields: [
    defineField({
      name: 'eventsDate',
      title: 'Event Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventsLocation',
      title: 'Event Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      date: 'eventsDate',
      location: 'eventsLocation',
    },
    prepare({date, location}) {
      return {
        title: location,
        subtitle: `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`,
      }
    },
  },
})
