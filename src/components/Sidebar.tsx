import Link from "next/link";
import { getAllCategories, getAllPosts } from "@/lib/queries";

export default async function Sidebar() {
  const [categories, posts] = await Promise.all([
    getAllCategories(),
    getAllPosts(),
  ]);

  const recentPosts = posts.slice(0, 5);

  return (
    <aside className="space-y-8">
      {/* プロフィール */}
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary-light)] text-2xl">
            🌱
          </div>
          <div>
            <p className="font-bold text-gray-800">こはる</p>
            <p className="text-xs text-gray-500">HSCノート運営</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-gray-600">
          HSPママ × HSCきょうだい（小4娘・小2息子）。「うちの子、大丈夫かな…？」同じ気持ちのママパパへ、繊細な子との暮らしで気づいたことを書いています🌿
        </p>
      </div>

      {/* カテゴリ */}
      {categories.length > 0 && (
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 font-bold text-gray-800">
            <span className="inline-block h-5 w-1 rounded-full bg-[var(--primary)]" />
            カテゴリ
          </h3>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat._id}>
                <Link
                  href={`/blog?cat=${cat.slug.current}`}
                  className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-[var(--primary-light)] hover:text-[var(--primary)]"
                >
                  {cat.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 人気記事 */}
      {recentPosts.length > 0 && (
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 font-bold text-gray-800">
            <span className="inline-block h-5 w-1 rounded-full bg-[var(--primary)]" />
            最近の記事
          </h3>
          <ul className="space-y-3">
            {recentPosts.map((post, i) => (
              <li key={post._id}>
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="group flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary-light)] text-xs font-bold text-[var(--primary)]">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-600 group-hover:text-[var(--primary)]">
                    {post.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 検索 */}
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="mb-4 flex items-center gap-2 font-bold text-gray-800">
          <span className="inline-block h-5 w-1 rounded-full bg-[var(--primary)]" />
          検索
        </h3>
        <form action="/blog" method="GET">
          <input
            type="text"
            name="q"
            placeholder="キーワードで探す..."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-[var(--primary)] focus:bg-white"
          />
        </form>
      </div>
    </aside>
  );
}
