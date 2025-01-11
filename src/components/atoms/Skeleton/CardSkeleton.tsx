import React, { JSX } from 'react';

import '@/styles/CardSkeleton.css';

import { SkeletonIconImage } from './CommonSkeleton';

function CardSkeleton(): JSX.Element {
  return (
    <div className="card-skeleton animate-pulse border border-gray-700 transition-colors dark:border-gray-500">
      <span className="skeleton absolute top-0 z-[4] block h-6 w-24" />

      <SkeletonIconImage size={40} />

      <div className="h-[350px] w-[237px]" />

      <div className="details-skeleton p-4">
        <span className="skeleton mb-2 block h-6 w-16 rounded-sm" />

        <div className="mb-2 flex items-center">
          <div className="flex space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="skeleton size-6 rounded-full"></div>
            ))}
          </div>
          <span className="skeleton ml-2 block h-6 w-8"></span>
        </div>

        <div className="mb-2 flex space-x-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="skeleton block h-5 w-12"></span>
          ))}
        </div>

        <span className="skeleton my-2 block h-5 w-3/4 rounded-sm"></span>

        <span className="skeleton mb-2 block h-4 w-1/2 rounded-sm"></span>
      </div>
    </div>
  );
}

export default CardSkeleton;
