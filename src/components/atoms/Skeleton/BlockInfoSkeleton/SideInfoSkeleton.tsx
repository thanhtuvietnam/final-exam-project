import { JSX } from 'react';

import { cn } from '@/lib/utils';

const SideInfoSkeleton = (): JSX.Element => {
  return (
    <section className="ml-5 flex w-2/3 flex-col gap-2">
      {/* Title & Original Name */}
      <div className="skeleton h-10 w-3/4 rounded-lg" />
      <div className="skeleton h-8 w-1/2 rounded-lg" />

      {/* Meta Info Row */}
      <div className="flex gap-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="skeleton h-5 w-5 rounded-lg" />
            <div className="skeleton h-5 w-16 rounded-lg" />
          </div>
        ))}
      </div>

      {/* Info Rows */}
      {[...Array(8)].map((_, index) => (
        <div key={index} className="flex items-center gap-2">
          {/* Label Skeleton */}
          <div className="skeleton h-5 w-24 rounded-sm" />
          {/* Content Skeleton */}
          <div
            className={cn(
              'skeleton h-5 rounded-sm',
              index === 5 || index === 6 ? 'w-3/4' : 'w-32',
            )}
          />
        </div>
      ))}
    </section>
  );
};

export default SideInfoSkeleton;
