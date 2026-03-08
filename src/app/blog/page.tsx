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
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col gap-10 lg:flex-row">
        {/* メインコンテンツ */}
        <div className="flex-1">
          <h1 className="mb-8 flex items-center gap-2 text-2xl font-bold text-gray-800">
            <span className="inline-block h-7 w-1 rounded-full bg-[var(--primary)]" />
            記事一覧
          </h1>

          {categories.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat._id}
                  href={`/blog?cat=${cat.slug.current}`}
                  className="rounded-full bg-[var(--primary-light)] px-4 py-1.5 text-sm font-medium text-[var(--primary)] transition-colors hover:bg-[var(--primary)] hover:text-white"
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          )}

          {posts.length === 0 ? (
            <p className="text-gray-500">まだ記事がありません。</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>

        {/* サイドバー */}
        <div className="w-full shrink-0 lg:w-72">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
