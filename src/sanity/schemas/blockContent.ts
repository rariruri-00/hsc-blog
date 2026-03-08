import { defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "blockContent",
  title: "本文",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "本文", value: "normal" },
        { title: "見出し2", value: "h2" },
        { title: "見出し3", value: "h3" },
        { title: "見出し4", value: "h4" },
        { title: "引用", value: "blockquote" },
      ],
      lists: [
        { title: "箇条書き", value: "bullet" },
        { title: "番号付き", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "太字", value: "strong" },
          { title: "斜体", value: "em" },
          { title: "マーカー", value: "highlight" },
        ],
        annotations: [
          {
            name: "link",
            title: "リンク",
            type: "object",
            fields: [
              {
                name: "href",
                title: "URL",
                type: "url",
              },
              {
                name: "blank",
                title: "新しいタブで開く",
                type: "boolean",
                initialValue: true,
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
    }),
    defineArrayMember({
      name: "checklist",
      title: "チェックリスト",
      type: "object",
      fields: [
        {
          name: "title",
          title: "タイトル",
          type: "string",
        },
        {
          name: "items",
          title: "チェック項目",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
      preview: {
        select: { title: "title" },
        prepare({ title }) {
          return { title: `✅ ${title || "チェックリスト"}` };
        },
      },
    }),
    defineArrayMember({
      name: "balloon",
      title: "吹き出し",
      type: "object",
      fields: [
        {
          name: "speaker",
          title: "話者",
          type: "string",
          options: {
            list: [
              { title: "こはる（運営者）", value: "koharu" },
              { title: "読者ママ", value: "reader" },
            ],
          },
          initialValue: "koharu",
        },
        {
          name: "text",
          title: "セリフ",
          type: "text",
          rows: 3,
        },
      ],
      preview: {
        select: { title: "text", speaker: "speaker" },
        prepare({ title, speaker }) {
          const icon = speaker === "koharu" ? "🌱" : "👩";
          return { title: `${icon} ${title || "吹き出し"}` };
        },
      },
    }),
    defineArrayMember({
      name: "affiliateBox",
      title: "アフィリエイトボックス",
      type: "object",
      fields: [
        {
          name: "productName",
          title: "商品名",
          type: "string",
        },
        {
          name: "description",
          title: "説明",
          type: "text",
          rows: 2,
        },
        {
          name: "url",
          title: "アフィリエイトURL",
          type: "url",
        },
        {
          name: "image",
          title: "商品画像",
          type: "image",
        },
        {
          name: "buttonText",
          title: "ボタンテキスト",
          type: "string",
          initialValue: "詳しく見る",
        },
      ],
      preview: {
        select: { title: "productName" },
        prepare({ title }) {
          return { title: `🛒 ${title || "アフィリエイト"}` };
        },
      },
    }),
  ],
});
