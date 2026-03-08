export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white py-8">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} HSCノート｜繊細っ子の子育てガイド
        </p>
        <p className="mt-1 text-xs text-gray-400">
          繊細な子（HSC）の子育て情報サイト
        </p>
      </div>
    </footer>
  );
}
