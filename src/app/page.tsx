import { getAllPosts } from "@/lib/queries";
import PostCard from "@/components/PostCard";

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <section className="mb-12 rounded-2xl bg-emerald-50 p-8">
        <p className="text-lg leading-relaxed text-gray-700">
          HSPママ × HSCきょうだい（小4娘・小2息子）
        </p>
        <p className="mt-2 text-lg leading-relaxed text-gray-700">
          「うちの子、大丈夫かな…？」
          <br />
          「慣れれば大丈夫」って言われるけど、ほんとに？
        </p>
        <p className="mt-2 text-lg leading-relaxed text-gray-700">
          同じ気持ちのママパパと繋がりたい🌱
        </p>
      </section>

      <section>
        <h2 className="mb-6 text-xl font-bold">最新の記事</h2>
        {posts.length === 0 ? (
          <p className="text-gray-500">まだ記事がありません。</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
