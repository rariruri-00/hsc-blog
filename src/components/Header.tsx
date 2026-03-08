import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-4xl px-4 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="block">
            <span className="text-2xl font-bold text-[var(--primary)]">
              🌱 こはる
            </span>
            <span className="ml-2 text-sm text-gray-500">
              HSCの子育て
            </span>
          </Link>
          <nav className="flex gap-5 text-sm font-medium">
            <Link
              href="/"
              className="text-gray-600 transition-colors hover:text-[var(--primary)]"
            >
              ホーム
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 transition-colors hover:text-[var(--primary)]"
            >
              記事一覧
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
