import Image from "next/image";

export default function AffiliateBox({
  title,
  url,
  image,
  buttonText = "詳しく見る →",
  children,
}: {
  title: string;
  url: string;
  image?: string;
  buttonText?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="my-8 overflow-hidden rounded-xl bg-white"
      style={{ boxShadow: "var(--card-shadow)" }}
    >
      <div className="bg-[var(--accent)] px-4 py-2 text-center text-sm font-bold text-white">
        おすすめ教材
      </div>
      <div className="p-6">
        <div className="flex flex-col gap-4 sm:flex-row">
          {image && (
            <div className="shrink-0">
              <Image
                src={image}
                alt={title}
                width={160}
                height={160}
                className="rounded-lg"
              />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>
            <div className="mt-2 text-sm leading-relaxed text-gray-600">
              {children}
            </div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-4 inline-block rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-bold text-white shadow-sm transition-all hover:brightness-110"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
