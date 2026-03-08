import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/queries";
import { urlFor } from "@/sanity/image";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug.current}`} className="block">
        {post.mainImage && (
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(post.mainImage).width(640).height(360).url()}
              alt={post.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}
        <div className="mt-3">
          {post.category && (
            <span className="text-xs font-medium text-emerald-600">
              {post.category.title}
            </span>
          )}
          <h2 className="mt-1 text-lg font-bold text-gray-900 group-hover:text-emerald-600">
            {post.title}
          </h2>
          {post.description && (
            <p className="mt-1 text-sm text-gray-600 line-clamp-2">
              {post.description}
            </p>
          )}
          {post.publishedAt && (
            <time className="mt-2 block text-xs text-gray-400">
              {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
            </time>
          )}
        </div>
      </Link>
    </article>
  );
}
