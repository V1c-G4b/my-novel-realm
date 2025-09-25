export const metadata = {
  title: "Novels - My Novel Realm",
};

export default function NovelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-8">
      <div className="flex-1">{children}</div>
    </div>
  );
}
