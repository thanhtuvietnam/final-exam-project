'use client';
import { cn } from '@/lib/utils';
import { icons } from '@/lib/declarations/icons';

import { SkeletonIconImage } from './CommonSkeleton';

const TrendingCardSkeleton: React.FC = () => {
  return (
    <div
      className={cn(
        'tw-flex group/TrendingCard relative h-full',
        'border-x-bgdark/50 dark:border-x-main-aliceBlue-500/50 rounded-3xl border-x',
      )}
    >
      <div className="relative w-1/4 p-2">
        {/* Skeleton Image */}
        <div className={cn('skeleton', 'h-48 w-full rounded-3xl')}>
          <SkeletonIconImage size={30} />
        </div>
      </div>

      <div className="w-3/4">
        <section className={`mt-2 sm:mt-0`}>
          {/* Skeleton Title */}
          <div
            className={cn(
              'skeleton mb-2 h-6 w-3/4 rounded-sm',
              // 'text-xs font-semibold sm:text-sm md:text-base lg:text-lg',
            )}
          />
          {/* Skeleton Description */}
          <div
            className={cn(
              'skeleton mb-4 h-4 w-1/2 rounded-sm',
              // 'text-[10px] sm:text-[11px] md:text-sm lg:text-base',
            )}
          />
          {/* Skeleton Year */}
          <div
            className={cn(
              'skeleton h-4 w-16 rounded-sm',
              // 'text-xs sm:text-sm md:text-base',
            )}
          />
        </section>
      </div>
    </div>
  );
};

export default TrendingCardSkeleton;
