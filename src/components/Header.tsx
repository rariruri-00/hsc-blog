import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-6">
        <Link href="/" className="block">
          <h1 className="text-xl font-bold text-gray-900">
            こはる｜HSCの子育て
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            HSPママ × HSCきょうだい（小4娘・小2息子）
          </p>
        </Link>
        <nav className="mt-4 flex gap-4 text-sm">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            ホーム
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900">
            記事一覧
          </Link>
        </nav>
      </div>
    </header>
  );
}
