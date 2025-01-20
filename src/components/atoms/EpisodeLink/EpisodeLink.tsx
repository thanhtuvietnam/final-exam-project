'use client';
import { JSX } from 'react';

import { cn } from '@/lib/utils';
import { ServerDatum } from '@/types/apiMovieDetails';

const EpisodeLink = ({
  serverData,
  handleClick,
  linkType,
  isSelected,
}: {
  serverData: ServerDatum;
  handleClick: () => void;
  linkType: 'm3u8' | 'embed';
  isSelected: boolean;
}): JSX.Element => {
  return (
    <li
      key={serverData?.slug + linkType}
      style={{
        width: '40px',
        height: '40px',
      }}
      className={cn(
        'tw-bounce-effect truncate hover:bg-amber-400',
        'tw-flex-1 justify-center rounded-lg text-center',
        isSelected ? 'bg-amber-400' : 'tw-themes-4',
      )}
      onClick={handleClick}
    >
      {serverData?.slug || serverData?.name}
    </li>
  );
};

export default EpisodeLink;
