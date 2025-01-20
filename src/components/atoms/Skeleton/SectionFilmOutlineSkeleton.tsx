import { JSX } from 'react';

import { TrendingSectionSkeleton } from './index';
import { SectionTitleSkeleton } from './CommonSkeleton';
import CardSkeleton from './MovieTemplateSkeleton/CardSkeleton';

function SectionFilmOutlineSkeletonSkeleton(): JSX.Element {
  return (
    <div className="flex w-full flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-3">
      <ul className="w-full grow space-y-4 lg:w-2/3">
        {Array.from({ length: 4 }).map((_, index) => (
          <li key={index}>
            <section aria-labelledby={`section-outline-skeleton`}>
              <SectionTitleSkeleton showBtn={true} />

              <ul className="grid grid-cols-4 gap-2">
                {Array.from({ length: 12 }).map((_, index) => (
                  <CardSkeleton key={index} />
                ))}
              </ul>
            </section>
          </li>
        ))}
      </ul>
      {/* <section */}
      {/*   aria-labelledby="trending-section" */}
      {/*   className="relative w-full grow-0 lg:w-1/3" */}
      {/* > */}
      <TrendingSectionSkeleton />
      {/* </section> */}
    </div>
  );
}

export default SectionFilmOutlineSkeletonSkeleton;
