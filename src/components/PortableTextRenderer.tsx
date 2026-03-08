import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || ""}
            width={800}
            height={450}
            className="rounded-xl"
          />
        </figure>
      );
    },
    checklist: ({ value }) => (
      <div className="my-8 rounded-xl border-2 border-[var(--primary)] border-opacity-30 bg-[var(--primary-light)] p-6">
        {value.title && (
          <h3 className="mb-4 text-lg font-bold text-[var(--primary)]">
            ✅ {value.title}
          </h3>
        )}
        <ul className="space-y-3">
          {value.items?.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-[var(--primary)] bg-white text-xs opacity-50">
                {" "}
              </span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
    affiliateBox: ({ value }) => (
      <div className="my-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row">
          {value.image && (
            <div className="shrink-0">
              <Image
                src={urlFor(value.image).width(160).height(160).url()}
                alt={value.productName || ""}
                width={160}
                height={160}
                className="rounded-lg"
              />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800">
              {value.productName}
            </h3>
            {value.description && (
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{value.description}</p>
            )}
            {value.url && (
              <a
                href={value.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="mt-4 inline-block rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-opacity hover:opacity-90"
              >
                {value.buttonText || "詳しく見る →"}
              </a>
            )}
          </div>
        </div>
      </div>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-[var(--primary)] underline decoration-[var(--primary)]/30 underline-offset-2 hover:decoration-[var(--primary)]"
      >
        {children}
      </a>
    ),
    highlight: ({ children }) => (
      <span className="bg-yellow-100 px-1 font-medium">{children}</span>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mb-4 mt-12 border-l-4 border-[var(--primary)] pl-4 text-xl font-bold text-gray-800">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 text-lg font-bold text-gray-800">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-2 mt-6 font-bold text-gray-800">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 rounded-r-lg border-l-4 border-[var(--primary)] bg-[var(--primary-light)] py-4 pl-4 pr-4 text-gray-700">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="my-4 leading-[1.9] text-gray-700">{children}</p>
    ),
  },
};

export default function PortableTextRenderer({ value }: { value: any[] }) {
  return <PortableText value={value} components={components} />;
}
