import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "カテゴリ",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "カテゴリ名",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "スラッグ",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "説明",
      type: "text",
    }),
  ],
});
