import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to My Novel Realm</h1>
      <p className="mb-4">Discover, read and track your favorite web novels.</p>
      <div className="flex gap-3">
        <Link href="/novels" className="text-blue-600 hover:underline">
          Browse Novels
        </Link>
        <Link href="/search" className="text-blue-600 hover:underline">
          Search
        </Link>
      </div>

    </div>
  );
}
