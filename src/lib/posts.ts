import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  content: string;
};

export type PostMeta = Omit<Post, "content">;

function isPublished(publishedAt: string): boolean {
  return new Date(publishedAt) <= new Date();
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug: data.slug || filename.replace(/\.mdx$/, ""),
        title: data.title || "",
        description: data.description || "",
        category: data.category || "",
        publishedAt: data.publishedAt || "",
      };
    })
    .filter((post) => post.publishedAt && isPublished(post.publishedAt))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  if (!fs.existsSync(postsDirectory)) return null;

  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));

  for (const filename of files) {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const fileSlug = data.slug || filename.replace(/\.mdx$/, "");

    if (fileSlug === slug && data.publishedAt && isPublished(data.publishedAt)) {
      return {
        slug: fileSlug,
        title: data.title || "",
        description: data.description || "",
        category: data.category || "",
        publishedAt: data.publishedAt || "",
        content,
      };
    }
  }

  return null;
}

// カテゴリ定義（MDXではファイルベースなので静的に定義）
export const categories = [
  { slug: "check", title: "HSCチェック" },
  { slug: "school", title: "学校の悩み" },
  { slug: "study", title: "おうち学習" },
  { slug: "daily", title: "日常の困りごと" },
  { slug: "mama", title: "ママの本音" },
];

export function getCategoryTitle(slug: string): string {
  return categories.find((c) => c.slug === slug)?.title || slug;
}
