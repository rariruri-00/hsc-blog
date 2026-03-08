import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary-light)] text-lg">
            📗
          </span>
          <div>
            <span className="text-2xl font-bold text-[var(--primary)] sm:text-3xl">
              HSCノート
            </span>
            <span className="ml-2 hidden text-sm text-gray-400 sm:inline">
              繊細っ子の子育てガイド
            </span>
          </div>
        </Link>
        <nav className="flex items-center gap-1">
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-[var(--primary-light)] hover:text-[var(--primary)]"
          >
            ホーム
          </Link>
          <Link
            href="/blog"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-[var(--primary-light)] hover:text-[var(--primary)]"
          >
            記事一覧
          </Link>
          <Link
            href="/profile"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-[var(--primary-light)] hover:text-[var(--primary)]"
          >
            プロフィール
          </Link>
        </nav>
      </div>
    </header>
  );
}
