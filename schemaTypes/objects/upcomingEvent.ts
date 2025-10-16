import {defineType, defineField} from 'sanity'

export const upcomingEvent = defineType({
  name: 'upcomingEvent',
  title: 'Upcoming Event',
  type: 'object',
  fields: [
    defineField({
      name: 'eventsDate',
      title: 'Event Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventsLocation',
      title: 'Event Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventTime',
      title: 'Event Time',
      type: 'string',
      description: 'e.g., "6:00 PM - 8:00 PM"',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      date: 'eventsDate',
      location: 'eventsLocation',
      time: 'eventTime',
    },
    prepare({date, location, time}) {
      return {
        title: location,
        subtitle: `${date} at ${time}`,
      }
    },
  },
})
