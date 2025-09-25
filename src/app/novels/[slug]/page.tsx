import Link from "next/link";

type Props = { params: { slug: string } };

export default function NovelDetail({ params }: Props) {
  const { slug } = params;

  return (
    <article>
      <h1 className="text-2xl font-bold mb-2">{slug.replace(/-/g, " ")}</h1>
      <p className="mb-4">
        This is a detail page for <strong>{slug}</strong>. Add synopsis, cover,
        author, etc.
      </p>

      <div>
        <h3 className="font-semibold">Chapters</h3>
        <ul className="list-disc pl-6">
          <li>
            <Link
              href={`/novels/${slug}/chapters/1`}
              className="text-blue-600 hover:underline"
            >
              Chapter 1
            </Link>
          </li>
          <li>
            <Link
              href={`/novels/${slug}/chapters/2`}
              className="text-blue-600 hover:underline"
            >
              Chapter 2
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
