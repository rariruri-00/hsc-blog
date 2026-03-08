import { getPostBySlug, getAllPosts } from "@/lib/queries";
import { urlFor } from "@/sanity/image";
import PortableTextRenderer from "@/components/PortableTextRenderer";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
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
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-col gap-10 lg:flex-row">
        {/* メインコンテンツ */}
        <article className="flex-1">
          {/* パンくずリスト */}
          <nav className="mb-6 text-xs text-gray-400">
            <Link href="/" className="hover:text-[var(--primary)]">ホーム</Link>
            <span className="mx-1.5">›</span>
            <Link href="/blog" className="hover:text-[var(--primary)]">記事一覧</Link>
            <span className="mx-1.5">›</span>
            <span className="text-gray-500">{post.title}</span>
          </nav>

          <div
            className="overflow-hidden rounded-xl bg-white"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            {post.mainImage && (
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={urlFor(post.mainImage).width(960).height(540).url()}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            )}

            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <div className="flex items-center gap-3">
                {post.category && (
                  <span className="inline-block rounded-full bg-[var(--primary)] px-2.5 py-0.5 text-xs font-medium text-white">
                    {post.category.title}
                  </span>
                )}
                {post.publishedAt && (
                  <time className="text-xs text-gray-400">
                    {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
                  </time>
                )}
              </div>

              <h1 className="mt-4 text-2xl font-bold leading-tight text-gray-800 sm:text-3xl">
                {post.title}
              </h1>

              {/* 記事本文 */}
              <div className="mt-10">
                {post.body && <PortableTextRenderer value={post.body} />}
              </div>
            </div>
          </div>

          {/* 記事下CTA */}
          <div
            className="mt-8 rounded-xl bg-white p-8 text-center"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <p className="text-lg font-bold text-gray-800">
              最後まで読んでくれてありがとうございます🌿
            </p>
            <p className="mt-2 text-sm text-gray-500">
              「うちもそう！」と思ったら、ぜひ他の記事も読んでみてね。
            </p>
            <Link
              href="/blog"
              className="mt-5 inline-block rounded-full bg-[var(--primary)] px-8 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--primary-dark)]"
            >
              記事一覧を見る →
            </Link>
          </div>
        </article>

        {/* サイドバー */}
        <div className="w-full shrink-0 lg:sticky lg:top-24 lg:w-72 lg:self-start">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
