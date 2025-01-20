import { JSX } from 'react';

import { cn } from '@/lib/utils';

const FilmBoxContentSkeleton = (): JSX.Element => {
  return (
    <section
      aria-labelledby="FilmBoxContent"
      className="tw-themes-3 rounded-lg px-2 py-1"
    >
      {/* Title Skeleton */}
      <h4 className={cn('tw-text-color-2 flex items-center gap-2 py-2')}>
        <div className="skeleton h-12 w-3/4 rounded-lg" />
      </h4>

      {/* Button Skeleton */}
      <div className="tw-flex-1 tw-border-themes border-b pb-1">
        <div className="flex items-center gap-2 **:rounded-lg">
          <div className="skeleton h-6 w-32" />
          <div className="skeleton h-6 w-6" />
        </div>
      </div>
    </section>
  );
};

export default FilmBoxContentSkeleton;
