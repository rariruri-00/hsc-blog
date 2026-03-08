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
            className="rounded-lg"
          />
        </figure>
      );
    },
    checklist: ({ value }) => (
      <div className="my-8 rounded-xl border-2 border-emerald-200 bg-emerald-50 p-6">
        {value.title && (
          <h3 className="mb-4 text-lg font-bold text-emerald-800">
            ✅ {value.title}
          </h3>
        )}
        <ul className="space-y-3">
          {value.items?.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-emerald-300 bg-white text-xs">
                {" "}
              </span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
    affiliateBox: ({ value }) => (
      <div className="my-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
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
            <h3 className="text-lg font-bold text-gray-900">
              {value.productName}
            </h3>
            {value.description && (
              <p className="mt-2 text-sm text-gray-600">{value.description}</p>
            )}
            {value.url && (
              <a
                href={value.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="mt-4 inline-block rounded-lg bg-emerald-600 px-6 py-2 text-sm font-bold text-white hover:bg-emerald-700"
              >
                {value.buttonText || "詳しく見る"}
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
        className="text-emerald-600 underline hover:text-emerald-800"
      >
        {children}
      </a>
    ),
    highlight: ({ children }) => (
      <span className="bg-yellow-100 px-1">{children}</span>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mb-4 mt-12 border-l-4 border-emerald-400 pl-4 text-xl font-bold text-gray-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 text-lg font-bold text-gray-900">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-2 mt-6 font-bold text-gray-900">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-gray-300 pl-4 text-gray-600 italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="my-4 leading-relaxed text-gray-700">{children}</p>
    ),
  },
};

export default function PortableTextRenderer({ value }: { value: any[] }) {
  return <PortableText value={value} components={components} />;
}
