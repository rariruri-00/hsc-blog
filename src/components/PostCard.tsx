import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/queries";
import { urlFor } from "@/sanity/image";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/blog/${post.slug.current}`} className="block">
        {post.mainImage && (
          <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
            <Image
              src={urlFor(post.mainImage).width(640).height(360).url()}
              alt={post.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-5">
          {post.category && (
            <span className="inline-block rounded-full bg-[var(--primary-light)] px-3 py-0.5 text-xs font-medium text-[var(--primary)]">
              {post.category.title}
            </span>
          )}
          <h2 className="mt-2 text-lg font-bold text-gray-800 group-hover:text-[var(--primary)]">
            {post.title}
          </h2>
          {post.description && (
            <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-2">
              {post.description}
            </p>
          )}
          {post.publishedAt && (
            <time className="mt-3 block text-xs text-gray-400">
              {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
            </time>
          )}
        </div>
      </Link>
    </article>
  );
}
