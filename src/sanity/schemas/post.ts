import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "記事",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "タイトル",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "スラッグ",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "説明文（SEO）",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "category",
      title: "カテゴリ",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "mainImage",
      title: "アイキャッチ画像",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "publishedAt",
      title: "公開日",
      type: "datetime",
    }),
    defineField({
      name: "body",
      title: "本文",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      date: "publishedAt",
    },
    prepare({ title, media, date }) {
      return {
        title,
        media,
        subtitle: date
          ? new Date(date).toLocaleDateString("ja-JP")
          : "下書き",
      };
    },
  },
});
