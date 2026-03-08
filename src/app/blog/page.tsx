import { getAllPosts, getAllCategories } from "@/lib/queries";
import PostCard from "@/components/PostCard";
import Link from "next/link";
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
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 text-2xl font-bold">記事一覧</h1>

      {categories.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat._id}
              href={`/blog?cat=${cat.slug.current}`}
              className="rounded-full bg-emerald-100 px-4 py-1 text-sm text-emerald-700 hover:bg-emerald-200"
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
  );
}
