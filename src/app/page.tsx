import { getAllPosts } from "@/lib/queries";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-col gap-10 lg:flex-row">
        {/* メインコンテンツ */}
        <div className="flex-1">
          {/* ヒーローセクション */}
          <section
            className="relative overflow-hidden rounded-2xl bg-white p-8 sm:p-10"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="relative z-10">
              <p className="inline-block rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-medium text-white">
                HSCノートへようこそ
              </p>
              <h2 className="mt-4 text-2xl font-bold text-gray-800">
                <span className="marker-green">繊細な子</span>の子育て、
                <br className="sm:hidden" />
                ひとりで抱えないで🌱
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                HSPママ × HSCきょうだい（小4娘・小2息子）。
                <br />
                「うちの子、大丈夫かな…？」「慣れれば大丈夫」って言われるけど、ほんとに？
              </p>
              <p className="mt-3 text-sm font-medium text-[var(--primary)]">
                同じ気持ちのママパパと繋がりたい🌿
              </p>
            </div>
            <div className="absolute -bottom-6 -right-6 text-[140px] opacity-[0.06]">
              🍀
            </div>
          </section>

          {/* 記事セクション */}
          <section className="mt-12">
            <h2 className="mb-6 border-b-2 border-[var(--primary)] pb-2 text-lg font-bold text-gray-800">
              📝 最新の記事
            </h2>
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
          </section>
        </div>

        {/* サイドバー */}
        <div className="w-full shrink-0 lg:sticky lg:top-24 lg:w-72 lg:self-start">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
