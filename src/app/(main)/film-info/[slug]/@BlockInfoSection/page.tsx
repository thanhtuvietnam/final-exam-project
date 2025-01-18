import { getQueryClient } from '@/api/get-query-client';
import { BlockInfoSection } from '@/components/organisms';
// import { getMovieDetails } from '@/api/endpoints/fetchData';
import { detailMovieOptions } from '@/api/endpoints/apimovieLists';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

async function BlockInfoSectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(detailMovieOptions(slug));

  // console.log(slug);
  // const data = await getMovieDetails(slug);
  // console.log(data);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BlockInfoSection slug={slug} />
    </HydrationBoundary>
  );
}
export default BlockInfoSectionPage;
