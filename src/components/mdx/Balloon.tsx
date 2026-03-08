export default function Balloon({
  speaker,
  children,
}: {
  speaker: "koharu" | "reader";
  children: React.ReactNode;
}) {
  const isReader = speaker === "reader";
  return (
    <div className={`balloon ${isReader ? "balloon-right" : ""}`}>
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl"
        style={{
          background: isReader ? "var(--pink-light)" : "var(--primary-light)",
        }}
      >
        {isReader ? "👩" : "🌱"}
      </div>
      <div className="balloon-text">{children}</div>
    </div>
  );
}
