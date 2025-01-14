'use client';
// import { cn } from '@/lib/utils';
import React from 'react';
// import { SectionTitleSkeleton, ButtonSkeleton } from './CommonSkeleton';

import { SectionTitleSkeleton } from './CommonSkeleton';
import TrendingCardSkeleton from './TrendingCardSkeleton';

const TrendingSectionSkeleton = (): JSX.Element => {
  return (
    <section
      aria-labelledby="trending-section-skeleton"
      className="relative w-full grow-0 lg:w-1/3"
    >
      <SectionTitleSkeleton showfetchBtn={true} />
      {/* Skeleton cho danh sách Trending Cards */}
      <ul className="">
        {[...Array(20)].map((_, index) => (
          <li key={index}>
            <TrendingCardSkeleton />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrendingSectionSkeleton;
