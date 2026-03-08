import { client } from "@/sanity/client";

export type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  category: { title: string; slug: { current: string } } | null;
  mainImage: any;
  publishedAt: string;
  body: any[];
};

const postFields = `
  _id,
  title,
  slug,
  description,
  category->{title, slug},
  mainImage,
  publishedAt,
  body
`;

export async function getAllPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {${postFields}}`
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {${postFields}}`,
    { slug }
  );
}

export async function getPostsByCategory(
  categorySlug: string
): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post" && defined(publishedAt) && category->slug.current == $categorySlug] | order(publishedAt desc) {${postFields}}`,
    { categorySlug }
  );
}

export type Category = {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
};

export async function getAllCategories(): Promise<Category[]> {
  return client.fetch(
    `*[_type == "category"] | order(title asc) { _id, title, slug, description }`
  );
}
