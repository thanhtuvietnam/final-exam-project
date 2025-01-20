import { JSX } from 'react';

import { cn } from '@/lib/utils';
import { logger } from '@/lib/utils/misc/logger';
import { SecondSlider } from '@/components/molecules';
import { getQueryClient } from '@/api/get-query-client';
import { categoryListOptions } from '@/api/endpoints/apimovieLists';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Carousel, SectionFilmOutline } from '@/components/organisms';

// export const revalidate = 60;
logger.info({
  msg: 'PrefetchingData and HydrateData',
  fileName: 'Home.tsx',
  action: 'Home Render',
  details: {
    prefetchingData: true,
    hydrateData: true,
    component: ['Carousel', 'SecondSlider', 'SectionFilmOutline'],
  },
});

export default async function Home(): Promise<JSX.Element> {
  const queryClient = getQueryClient();

  await Promise.all(
    categoryListOptions
      // .filter(options => options.queryKey.includes('danh-sach'))
      .map((options) => queryClient.prefetchQuery(options)),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className={cn('group relative rounded-3xl shadow-lg')}>
        <Carousel />
      </div>
      <SecondSlider />
      <SectionFilmOutline />
    </HydrationBoundary>
  );
}
