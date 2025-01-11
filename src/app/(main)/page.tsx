import { JSX, memo } from 'react';

import { cn } from '@/lib/utils';
import { SecondSlider } from '@/components/molecules';
import { getQueryClient } from '@/api/get-query-client';
import { categoryListOptions } from '@/api/endpoints/apimovieLists';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Carousel, SectionFilmOutline } from '@/components/organisms';

const MemoizedCarousel = memo(Carousel);
const MemoizedSecondSlider = memo(SecondSlider);
const MemoizedSectionFilmOutline = memo(SectionFilmOutline);

// export const revalidate = 60;

export default async function Home(): Promise<JSX.Element> {
  const queryClient = getQueryClient();

  // await Promise.all(
  //   categoryListOptions
  //     .filter(options => options.queryKey.includes('danh-sach'))
  //     .map(options => queryClient.prefetchQuery(options))
  // );
  //
  await Promise.all(
    categoryListOptions
      // .filter(options => options.queryKey.includes('danh-sach'))
      .map((options) => queryClient.prefetchQuery(options)),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {/* <Suspense fallback={<Loading />}> */}
      <div className={cn('group relative rounded-3xl shadow-lg select-none')}>
        <MemoizedCarousel />
      </div>
      <MemoizedSecondSlider />
      <MemoizedSectionFilmOutline />
      {/* </Suspense> */}
    </HydrationBoundary>
  );
}
// import {
//   categoryListOptions,
//   // movieListsOptions,
// } from '@/api/endpoints/apimovieLists';
//
// import { getQueryClient } from '@/api/get-query-client';
//
// import { SecondSlider } from '@/components/molecules';
// import { Carousel, SectionFilmOutline } from '@/components/organisms';
// import { cn } from '@/lib/utils';
// import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
// import { JSX, Suspense } from 'react';
//
// import Loading from './loading';
//
// export default async function Home(): Promise<JSX.Element> {
//   const queryClient = getQueryClient();
//
//   // await Promise.all(movieListsOptions.map((options) => queryClient.prefetchQuery(options)));
//   const mainListOptions = categoryListOptions.filter(
//     // (options) => options.queryKey[0] === 'danh-sach',
//     (options) => options.queryKey.includes('danh-sach'),
//   );
//   if (mainListOptions) {
//     console.log(mainListOptions);
//   }
//   //
//   await Promise.all(
//     mainListOptions.map((options) => queryClient.prefetchQuery(options)),
//   );
//   return (
//     <>
//       <HydrationBoundary state={dehydrate(queryClient)}>
//         <Suspense fallback={<Loading />}>
//           <div
//             className={cn('group relative select-none rounded-3xl shadow-lg')}
//           >
//             <Carousel />
//           </div>
//           <SecondSlider />
//           <SectionFilmOutline />
//         </Suspense>
//       </HydrationBoundary>
//     </>
//   );
// }
