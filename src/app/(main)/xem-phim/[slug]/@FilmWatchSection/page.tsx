import { FilmWatchSection } from '@/components/organisms';

async function FilmWatchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  // console.log(slug);

  return (
    <>
      <FilmWatchSection slug={slug} />
    </>
  );
}
export default FilmWatchPage;
