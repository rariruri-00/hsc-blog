export default function Checklist({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-8 rounded-xl border-2 border-[var(--primary)] border-opacity-30 bg-[var(--primary-light)] p-6">
      {title && (
        <h3 className="mb-4 text-lg font-bold text-[var(--primary)]">
          ✅ {title}
        </h3>
      )}
      <div className="checklist-items">{children}</div>
    </div>
  );
}
