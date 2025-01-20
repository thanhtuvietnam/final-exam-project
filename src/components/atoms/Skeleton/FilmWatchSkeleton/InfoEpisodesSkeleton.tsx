'use client';
import { JSX } from 'react';

const InfoEpisodesSkeleton = (): JSX.Element => {
  return (
    <section className="h-60 w-full overflow-y-scroll rounded-lg scheme-light dark:scheme-dark">
      {/* Header Skeleton */}
      <h4 className="tw-border-themes mb-4 flex items-center gap-2 border-b-[0.5px] p-3 font-sans **:rounded-sm">
        <div className="skeleton h-5 w-32" />
      </h4>

      {/* Episodes Grid Skeleton */}
      <ul className="tw-themes-3 flex flex-wrap items-center gap-1 rounded-lg p-1">
        {[...Array(63)].map((_, index) => (
          <li
            key={index}
            style={{ width: '40px', height: '40px' }}
            className="tw-bounce-effect tw-flex-1 skeleton rounded-lg"
          />
        ))}
      </ul>
    </section>
  );
};

export default InfoEpisodesSkeleton;
