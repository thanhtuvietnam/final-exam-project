import { JSX } from 'react';

import { cn } from '@/lib/utils';
import { icons } from '@/lib/declarations/icons';

export const SectionTitleSkeleton = ({
  showBtn = false,
  showfetchBtn = false,
}: {
  showBtn?: boolean;
  showfetchBtn?: boolean;
}) => (
  <div className="tw-flex border-b-bgdark/50 dark:border-b-bglight/20 mb-3 border-b-[0.5px]">
    <span className="skeleton mt-1 mb-2 h-10 w-28 rounded-sm" />
    {showBtn && <span className="skeleton mt-1 mb-2 h-10 w-28 rounded-sm" />}
    {showfetchBtn && (
      <div className="tw-flex gap-1">
        {[...Array(3)].map((_, index) => (
          <span key={index} className="skeleton mt-1 h-10 w-10 rounded-sm" />
        ))}
      </div>
    )}
  </div>
);

export const SkeletonIconImage = ({ size }: { size: number }): JSX.Element => {
  return (
    <icons.FaRegFileImage
      className="absolute top-1/3 right-1/2 z-[4] translate-1/2 animate-pulse text-gray-600 dark:text-gray-500"
      size={size}
    />
  );
};
