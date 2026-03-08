import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "こはる｜HSCの子育て",
    template: "%s | こはる｜HSCの子育て",
  },
  description:
    "HSPママが繊細な子（HSC）の気持ちを言葉にするブログ。HSCきょうだい（小4娘・小2息子）の日常と気づき。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="flex min-h-screen flex-col bg-gray-50 text-gray-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
