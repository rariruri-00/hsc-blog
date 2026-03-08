import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "HSCちゃんねる｜繊細っ子の子育てブログ",
    template: "%s | HSCちゃんねる｜繊細っ子の子育てブログ",
  },
  description:
    "繊細な子（HSC）の子育て情報サイト。HSPママがHSCきょうだい（小4娘・小2息子）との日常から気づいたことをお届けします。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
