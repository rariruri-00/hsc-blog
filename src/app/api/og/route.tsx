import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

async function loadFont() {
  const res = await fetch(
    "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap"
  );
  const css = await res.text();
  const match = css.match(/src: url\((.+?)\) format/);
  if (!match) return null;
  const fontRes = await fetch(match[1]);
  return fontRes.arrayBuffer();
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const rawTitle = searchParams.get("title") || "HSCノート";
  const category = searchParams.get("category") || "";

  // 全角パイプなど表示できない文字を置換
  const title = rawTitle.replace(/｜/g, " | ");

  const fontData = await loadFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #e8f5ee 0%, #f9f7f4 50%, #fdf0f0 100%)",
          fontFamily: fontData ? '"Noto Sans JP"' : "sans-serif",
          padding: "60px",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#5bb591",
          }}
        />

        {/* Category badge */}
        {category && (
          <div
            style={{
              display: "flex",
              background: "#5bb591",
              color: "white",
              fontSize: "24px",
              fontWeight: 700,
              padding: "8px 24px",
              borderRadius: "50px",
              marginBottom: "24px",
            }}
          >
            {category}
          </div>
        )}

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: title.length > 30 ? "48px" : "56px",
            fontWeight: 700,
            color: "#333333",
            textAlign: "center",
            lineHeight: 1.4,
            maxWidth: "1000px",
            wordBreak: "break-word",
          }}
        >
          {title}
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "#e8f5ee",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
            }}
          >
            🌱
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              fontWeight: 700,
              color: "#5bb591",
            }}
          >
            HSCノート
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "18px",
              color: "#999",
              marginLeft: "4px",
            }}
          >
            繊細っ子の子育てガイド
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      ...(fontData
        ? {
            fonts: [
              {
                name: "Noto Sans JP",
                data: fontData,
                weight: 700 as const,
                style: "normal" as const,
              },
            ],
          }
        : {}),
    }
  );
}
