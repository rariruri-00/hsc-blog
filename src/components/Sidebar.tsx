import Link from "next/link";
import { getAllPosts, categories } from "@/lib/posts";

export default function Sidebar() {
  const posts = getAllPosts();
  const recentPosts = posts.slice(0, 5);

  return (
    <aside className="space-y-6">
      {/* プロフィール */}
      <div className="overflow-hidden rounded-xl bg-white" style={{ boxShadow: "var(--card-shadow)" }}>
        <div className="bg-[var(--primary)] px-6 py-4 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/30 bg-white text-3xl">
            🌱
          </div>
          <p className="mt-2 text-lg font-bold text-white">こはる</p>
          <p className="text-xs text-white/80">内向型HSPママ</p>
        </div>
        <div className="px-5 py-4">
          <p className="text-sm leading-relaxed text-gray-600">
            内向型HSPママ × HSCきょうだい（小4娘・小2息子）。子どもの気持ちがわかるぶん、一緒にしんどくなることも多い毎日です🌿
          </p>
          <Link
            href="/profile"
            className="mt-3 block text-center text-xs font-medium text-[var(--primary)] hover:underline"
          >
            プロフィールを見る →
          </Link>
        </div>
      </div>

      {/* カテゴリ */}
      <div className="rounded-xl bg-white p-5" style={{ boxShadow: "var(--card-shadow)" }}>
        <h3 className="mb-3 border-b-2 border-[var(--primary)] pb-2 text-sm font-bold text-gray-800">
          カテゴリ
        </h3>
        <ul className="space-y-1">
          {categories.map((cat) => (
            <li key={cat.slug}>
              <Link
                href={`/blog?cat=${cat.slug}`}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-[var(--primary-light)] hover:text-[var(--primary)]"
              >
                <span className="text-xs text-[var(--primary)]">▸</span>
                {cat.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 最近の記事 */}
      {recentPosts.length > 0 && (
        <div className="rounded-xl bg-white p-5" style={{ boxShadow: "var(--card-shadow)" }}>
          <h3 className="mb-3 border-b-2 border-[var(--primary)] pb-2 text-sm font-bold text-gray-800">
            最近の記事
          </h3>
          <ul className="space-y-3">
            {recentPosts.map((post, i) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[var(--primary)] text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-snug text-gray-600 group-hover:text-[var(--primary)]">
                    {post.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 検索 */}
      <div className="rounded-xl bg-white p-5" style={{ boxShadow: "var(--card-shadow)" }}>
        <h3 className="mb-3 border-b-2 border-[var(--primary)] pb-2 text-sm font-bold text-gray-800">
          検索
        </h3>
        <form action="/blog" method="GET">
          <div className="flex overflow-hidden rounded-lg border border-gray-200">
            <input
              type="text"
              name="q"
              placeholder="キーワードで探す..."
              className="flex-1 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none"
            />
            <button
              type="submit"
              className="bg-[var(--primary)] px-4 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              🔍
            </button>
          </div>
        </form>
      </div>
    </aside>
  );
}
