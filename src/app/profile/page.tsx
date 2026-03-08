import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プロフィール",
  description:
    "こはる｜内向型HSPママ × HSCきょうだい育児中。小4の娘と小2の息子、ふたりともHSC。同じ気持ちのママパパへ向けて書いています。",
};

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      {/* パンくず */}
      <nav className="mb-6 text-xs text-gray-400">
        <Link href="/" className="hover:text-[var(--primary)]">
          ホーム
        </Link>
        <span className="mx-1.5">›</span>
        <span className="text-gray-500">プロフィール</span>
      </nav>

      <div
        className="overflow-hidden rounded-xl bg-white"
        style={{ boxShadow: "var(--card-shadow)" }}
      >
        {/* ヘッダー */}
        <div className="bg-[var(--primary)] px-6 py-8 text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-white/30 bg-white text-4xl">
            🌱
          </div>
          <h1 className="mt-3 text-2xl font-bold text-white">こはる</h1>
          <p className="mt-1 text-sm text-white/80">
            内向型HSPママ × HSCきょうだい育児中
          </p>
        </div>

        {/* 本文 */}
        <div className="px-6 py-8 sm:px-10 sm:py-10">
          <div className="space-y-6 text-[15px] leading-[1.9] text-gray-700">
            <p>
              はじめまして、こはるです。
            </p>
            <p>
              小4の娘と小2の息子、ふたりともHSC（繊細な子）。
              <br />
              私自身も内向型HSPで、子どもの気持ちがわかるぶん、一緒にしんどくなることも多いです。
            </p>

            <h2 className="!mt-10 flex items-center gap-3 border-b-2 border-[var(--primary)] pb-3 text-lg font-bold text-gray-800">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-sm text-white">
                ✦
              </span>
              このブログを始めたきっかけ
            </h2>
            <p>
              息子が小1のとき、発表会で顔がこわばってるのを見て胸が苦しくなりました。
            </p>
            <p>
              家ではあんなにうるさいのに、外では別人みたいに固まってしまう。
              <br />
              「この子、大丈夫かな…」って毎日心配してました。
            </p>
            <p>
              旦那は非HSPなので「大丈夫でしょ」って言うけど、私にはわかる。
              <br />
              だって私も子どもの頃、同じだったから。
            </p>
            <p>
              HSCを知って「この子はダメなんじゃない、感じる力が強いだけ」と気づいてから、少しずつ楽になりました。
            </p>

            <h2 className="!mt-10 flex items-center gap-3 border-b-2 border-[var(--primary)] pb-3 text-lg font-bold text-gray-800">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-sm text-white">
                ✦
              </span>
              このブログについて
            </h2>
            <p>
              このブログでは、同じように悩むママパパへ向けて、
              私が試して「これは効いた」と思った声かけや対応をまとめています。
            </p>
            <p>
              完璧な正解じゃなくて、うちはこうだったよ、という話。
              <br />
              読んだあと、ちょっとだけ気持ちが軽くなってくれたらうれしいです🌿
            </p>

            <h2 className="!mt-10 flex items-center gap-3 border-b-2 border-[var(--primary)] pb-3 text-lg font-bold text-gray-800">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-sm text-white">
                ✦
              </span>
              こはるの家族
            </h2>
            <div className="rounded-xl bg-[var(--primary-light)] p-5">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span>🌱</span>
                  <span>
                    <strong>こはる（私）</strong>
                    ：内向型HSP。人が多い場所が苦手。子どもの頃から一人が楽だった
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>👨</span>
                  <span>
                    <strong>旦那</strong>
                    ：非HSP。「大丈夫でしょ」が口ぐせ。温度差に悩むことも
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>👧</span>
                  <span>
                    <strong>娘（小4）</strong>
                    ：HSC傾向あり。人見知りが強いけど、やるべきことはきちんとやるしっかり者
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>👦</span>
                  <span>
                    <strong>息子（小2）</strong>
                    ：HSC傾向強め。緊張しやすい・音に敏感・怒られるのが怖い。家ではめちゃくちゃ元気
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-block rounded-full bg-[var(--primary)] px-8 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--primary-dark)]"
            >
              記事を読む →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
