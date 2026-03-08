import { getPostBySlug, getAllPosts } from "@/lib/queries";
import { urlFor } from "@/sanity/image";
import PortableTextRenderer from "@/components/PortableTextRenderer";
import Image from "next/image";
import Link from "next/link";
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
      {/* パンくずリスト */}
      <nav className="mb-6 text-sm text-gray-400">
        <Link href="/" className="hover:text-[var(--primary)]">ホーム</Link>
        <span className="mx-2">›</span>
        <Link href="/blog" className="hover:text-[var(--primary)]">記事一覧</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600">{post.title}</span>
      </nav>

      {post.category && (
        <span className="inline-block rounded-full bg-[var(--primary-light)] px-3 py-1 text-xs font-medium text-[var(--primary)]">
          {post.category.title}
        </span>
      )}
      <h1 className="mt-3 text-2xl font-bold leading-tight text-gray-800 sm:text-3xl">
        {post.title}
      </h1>
      {post.publishedAt && (
        <time className="mt-3 block text-sm text-gray-400">
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

      {/* 記事本文 */}
      <div className="prose-koharu mt-10">
        {post.body && <PortableTextRenderer value={post.body} />}
      </div>

      {/* 記事下CTA */}
      <div className="mt-14 rounded-xl bg-[var(--primary-light)] p-6 text-center">
        <p className="text-base font-medium text-gray-700">
          最後まで読んでくれてありがとうございます🌿
        </p>
        <p className="mt-2 text-sm text-gray-600">
          「うちもそう！」と思ったら、ぜひ他の記事も読んでみてね。
        </p>
        <Link
          href="/blog"
          className="mt-4 inline-block rounded-full bg-[var(--primary)] px-6 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          記事一覧を見る
        </Link>
      </div>
    </article>
  );
}
