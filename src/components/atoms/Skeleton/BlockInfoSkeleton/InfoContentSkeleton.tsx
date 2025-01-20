import { JSX } from 'react';

const InfoContentSkeleton = (): JSX.Element => {
  return (
    <section className="tw-themes-3 rounded-lg px-2">
      {/* Title Skeleton */}
      <div className="flex items-center gap-2">
        <div className="skeleton h-6 w-40 rounded-lg" />
      </div>

      {/* Content Skeleton */}
      <div className="mt-2 space-y-2">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="skeleton h-4 w-full rounded-lg" />
        ))}
      </div>

      {/* Button Skeleton */}
      <div className="mt-2 flex">
        <div className="skeleton h-8 w-28 rounded-md" />
      </div>
    </section>
  );
};

export default InfoContentSkeleton;
