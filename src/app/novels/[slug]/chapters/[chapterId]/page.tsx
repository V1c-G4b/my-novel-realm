type Props = { params: { slug: string; chapterId: string } };

export default function ChapterPage({ params }: Props) {
  const { slug, chapterId } = params;

  return (
    <article>
      <h2 className="text-xl font-bold mb-2">{`Chapter ${chapterId}`}</h2>
      <p className="mb-4 text-sm text-neutral-700">
        Content for chapter {chapterId} of {slug} will go here.
      </p>
    </article>
  );
}
