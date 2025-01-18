import { RecommendMovies } from '@/components/molecules';

async function RecommendMoviesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  // console.log(slug);

  return (
    <>
      <RecommendMovies />
    </>
  );
}
export default RecommendMoviesPage;
