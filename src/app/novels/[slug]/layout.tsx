import Link from "next/link";

export default function NovelDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-4">
        <Link href="/novels" className="text-sm text-blue-600 hover:underline">
          ← Back to novels
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
