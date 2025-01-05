import '@/styles/CardSkeleton.css';
import React from 'react';

interface SkeletonItemProps {
  height: string;
  width: string;
}

const SkeletonItem: React.FC<SkeletonItemProps> = ({ height, width }) => (
  <div
    className={`h-${height} w-${width} rounded bg-gray-500 dark:bg-gray-700`}
  ></div>
);

const PageControllerSkeleton: React.FC = () => {
  const firstRowItems = ['16', '20', '12', '12', '12', '14', '16', '16'];
  const secondRowItems = ['32', '24'];

  return (
    <div className="flex animate-pulse flex-col items-center space-y-4">
      <div className="flex space-x-2">
        {firstRowItems.map((width, index) => (
          <SkeletonItem key={index} height="10" width={width} />
        ))}
      </div>
      <div className="flex space-x-3">
        {secondRowItems.map((width, index) => (
          <SkeletonItem key={index} height="10" width={width} />
        ))}
      </div>
    </div>
  );
};

export default PageControllerSkeleton;
