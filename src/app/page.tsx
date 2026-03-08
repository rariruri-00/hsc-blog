import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import CategoryNav from "@/components/CategoryNav";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      {/* カテゴリナビ */}
      <div className="border-b border-gray-100 bg-white">
        <CategoryNav />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* メインコンテンツ */}
          <div className="flex-1">
            {/* サイト説明 */}
            <section
              className="overflow-hidden rounded-xl bg-white p-6 sm:p-8"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <h2 className="text-lg font-bold text-gray-800">
                HSCノートへようこそ
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                HSC（Highly Sensitive Child）は、生まれつき感受性が強く、周りの刺激に敏感な子どものこと。5人に1人がHSCだと言われています。
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                このブログでは、内向型HSPママの私が、HSCきょうだい（小4娘・小2息子）との日常で気づいた声かけや対応をまとめています。「うちの子、大丈夫かな…」と不安なママパパのヒントになれたらうれしいです🌿
              </p>
            </section>

            {/* 記事セクション */}
            <section className="mt-10">
              <h2 className="mb-6 flex items-center gap-3 border-b-2 border-[var(--primary)] pb-3 text-lg font-bold text-gray-800">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-sm text-white">📝</span>
                最新の記事
              </h2>
              {posts.length === 0 ? (
                <div className="rounded-xl bg-white p-10 text-center" style={{ boxShadow: "var(--card-shadow)" }}>
                  <p className="text-4xl">📗</p>
                  <p className="mt-3 text-sm text-gray-500">まだ記事がありません。</p>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2">
                  {posts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* サイドバー */}
          <div className="w-full shrink-0 lg:sticky lg:top-24 lg:w-80 lg:self-start">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
