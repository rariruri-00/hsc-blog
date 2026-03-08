import { getPostBySlug, getAllPosts } from "@/lib/queries";
import { urlFor } from "@/sanity/image";
import PortableTextRenderer from "@/components/PortableTextRenderer";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug.current }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      {post.category && (
        <span className="text-sm font-medium text-emerald-600">
          {post.category.title}
        </span>
      )}
      <h1 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
        {post.title}
      </h1>
      {post.publishedAt && (
        <time className="mt-2 block text-sm text-gray-400">
          {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
        </time>
      )}

      {post.mainImage && (
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl">
          <Image
            src={urlFor(post.mainImage).width(960).height(540).url()}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      <div className="mt-8">{post.body && <PortableTextRenderer value={post.body} />}</div>
    </article>
  );
}
