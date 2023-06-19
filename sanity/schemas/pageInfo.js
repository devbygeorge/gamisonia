export default {
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  fields: [
    {
      name: "heroImage",
      title: "HeroImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "description",
          title: "Description",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "aboutParagraph1",
      title: "AboutParagraph1",
      type: "localeText",
    },
    {
      name: "aboutParagraph2",
      title: "AboutParagraph2",
      type: "localeText",
    },
    {
      name: "aboutParagraph3",
      title: "AboutParagraph3",
      type: "localeText",
    },
    {
      name: "aboutImageLegacy",
      title: "AboutImageLegacy",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "description",
          title: "Description",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "aboutImageNew",
      title: "AboutImageNew",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "description",
          title: "Description",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "contactText",
      title: "ContactText",
      type: "localeText",
    },
  ],
};
