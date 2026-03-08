import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gray-800 py-10 text-gray-300">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div>
            <Link href="/" className="text-lg font-bold text-white">
              📗 HSCノート
            </Link>
            <p className="mt-1 text-xs text-gray-400">
              繊細っ子の子育てガイド
            </p>
          </div>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="transition-colors hover:text-white">
              ホーム
            </Link>
            <Link href="/blog" className="transition-colors hover:text-white">
              記事一覧
            </Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} HSCノート｜繊細っ子の子育てガイド
        </div>
      </div>
    </footer>
  );
}
