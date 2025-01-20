'use client';
import { JSX } from 'react';

import { cn } from '@/lib/utils';

import { SkeletonIconImage } from '../CommonSkeleton';

const CardInfoSkeleton = (): JSX.Element => {
  return (
    <div className="relative h-[450px]">
      {/* Image Skeleton */}
      <div className="skeleton size-full overflow-hidden rounded-3xl" />
      {/* Top Buttons Skeleton */}
      <div className="tw-flex absolute top-1 w-full px-1.5">
        {/* BookMark Button */}
        <div className="skeleton-slider h-8 w-8 rounded-lg" />
        {/* Trailer Button */}
        <div className="skeleton-slider ml-2 h-8 w-20 animate-pulse rounded-full" />
      </div>

      <SkeletonIconImage size={70} />
      {/* Bottom Buttons Skeleton */}
      <div className="tw-flex absolute bottom-3 w-full gap-2 px-1.5">
        {/* Episodes Button */}
        <div className={cn('skeleton-slider h-12 w-40 rounded-full')} />
        {/* Play Button */}
        <div className={cn('skeleton-slider h-12 w-40 rounded-full')} />
      </div>
    </div>
  );
};

export default CardInfoSkeleton;
