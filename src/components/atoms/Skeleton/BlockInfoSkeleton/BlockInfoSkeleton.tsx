import { JSX } from 'react';

import CardInfoSkeleton from './CardInfoSkeleton';
import SideInfoSkeleton from './SideInfoSkeleton';
import InfoTableSkeleton from './InfoTableSkeleton';
import InfoContentSkeleton from './InfoContentSkeleton';

function BlockInfoSkeleton(): JSX.Element {
  return (
    <div className="flex w-full flex-col gap-4">
      {/* Card and Side Info Section */}
      <div className="flex w-full">
        {/* Card Section - 1/3 width */}
        <div className="w-1/3 animate-pulse">
          <CardInfoSkeleton />
        </div>

        {/* Side Info Section - 2/3 width */}
        <SideInfoSkeleton />
      </div>

      <InfoContentSkeleton />
      <InfoTableSkeleton />
    </div>
  );
}

export default BlockInfoSkeleton;
