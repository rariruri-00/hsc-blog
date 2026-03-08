import { getAllPosts } from "@/lib/queries";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col gap-10 lg:flex-row">
        {/* メインコンテンツ */}
        <div className="flex-1">
          {/* プロフィールセクション */}
          <section className="relative overflow-hidden rounded-2xl bg-[var(--primary-light)] p-8 sm:p-10">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-[var(--primary)]">
                HSCノートへようこそ🌱
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
                HSPママ × HSCきょうだい（小4娘・小2息子）
              </p>
              <p className="mt-2 text-base leading-relaxed text-gray-700">
                「うちの子、大丈夫かな…？」
                <br />
                「慣れれば大丈夫」って言われるけど、ほんとに？
              </p>
              <p className="mt-3 text-base font-medium text-[var(--primary)]">
                同じ気持ちのママパパと繋がりたい🌿
              </p>
            </div>
            <div className="absolute -right-4 -top-4 text-[120px] opacity-10">
              🍀
            </div>
          </section>

          {/* 記事セクション */}
          <section className="mt-14">
            <h2 className="mb-8 flex items-center gap-2 text-xl font-bold text-gray-800">
              <span className="inline-block h-6 w-1 rounded-full bg-[var(--primary)]" />
              最新の記事
            </h2>
            {posts.length === 0 ? (
              <p className="text-gray-500">まだ記事がありません。</p>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2">
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            )}
          </section>
        </div>

        {/* サイドバー */}
        <div className="w-full shrink-0 lg:w-72">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
