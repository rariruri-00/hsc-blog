import { getAllPosts, getAllCategories } from "@/lib/queries";
import PostCard from "@/components/PostCard";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "記事一覧",
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-col gap-10 lg:flex-row">
        {/* メインコンテンツ */}
        <div className="flex-1">
          <h1 className="mb-6 border-b-2 border-[var(--primary)] pb-2 text-lg font-bold text-gray-800">
            📝 記事一覧
          </h1>

          {categories.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              <Link
                href="/blog"
                className="rounded-full border border-[var(--primary)] px-4 py-1.5 text-sm font-medium text-[var(--primary)] transition-colors hover:bg-[var(--primary)] hover:text-white"
              >
                すべて
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat._id}
                  href={`/blog?cat=${cat.slug.current}`}
                  className="rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          )}

          {posts.length === 0 ? (
            <div className="rounded-xl bg-white p-8 text-center" style={{ boxShadow: "var(--card-shadow)" }}>
              <p className="text-4xl">📗</p>
              <p className="mt-3 text-sm text-gray-500">まだ記事がありません。</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>

        {/* サイドバー */}
        <div className="w-full shrink-0 lg:sticky lg:top-24 lg:w-72 lg:self-start">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
