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
            {/* ヒーロー + 吹き出し */}
            <section
              className="overflow-hidden rounded-xl bg-white p-6 sm:p-8"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              {/* 吹き出し会話 */}
              <div className="balloon balloon-right">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl"
                  style={{ background: "var(--pink-light)" }}
                >
                  👩
                </div>
                <div className="balloon-text">
                  うちの子、繊細すぎて学校がつらそう…。<br />
                  「慣れれば大丈夫」って言われるけど、ほんとに？
                </div>
              </div>

              <div className="balloon">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl"
                  style={{ background: "var(--primary-light)" }}
                >
                  🌱
                </div>
                <div className="balloon-text">
                  わかります。私もずっとそう思ってました。<br />
                  <strong>HSCきょうだい（小4娘・小2息子）</strong>を育てるHSPママが、同じ気持ちのママパパへ向けて書いています🌿
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  繊細な子の子育て、ひとりで抱えないで。
                </p>
              </div>
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
