import Link from "next/link";

const categories = [
  { icon: "📋", label: "HSCチェック", href: "/blog?cat=check" },
  { icon: "🏫", label: "学校の悩み", href: "/blog?cat=school" },
  { icon: "📚", label: "おうち学習", href: "/blog?cat=study" },
  { icon: "💬", label: "ママの本音", href: "/blog?cat=mama" },
];

export default function CategoryNav() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="cat-nav">
        {categories.map((cat) => (
          <Link key={cat.label} href={cat.href} className="cat-nav-item">
            <span className="cat-nav-icon">{cat.icon}</span>
            {cat.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
