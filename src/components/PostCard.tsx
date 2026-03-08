import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { getCategoryTitle } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group overflow-hidden rounded-xl bg-white transition-all duration-200 hover:-translate-y-1 [box-shadow:var(--card-shadow)] hover:[box-shadow:var(--card-shadow-hover)]">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="flex aspect-[16/9] items-center justify-center bg-[var(--primary-light)]">
          <span className="text-5xl opacity-30">📗</span>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2">
            {post.category && (
              <span className="inline-block rounded-full bg-[var(--primary)] px-2.5 py-0.5 text-xs font-medium text-white">
                {getCategoryTitle(post.category)}
              </span>
            )}
            {post.publishedAt && (
              <time className="text-xs text-gray-400">
                {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
              </time>
            )}
          </div>
          <h2 className="mt-2.5 text-base font-bold leading-snug text-gray-800 group-hover:text-[var(--primary)]">
            {post.title}
          </h2>
          {post.description && (
            <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-2">
              {post.description}
            </p>
          )}
        </div>
      </Link>
    </article>
  );
}
