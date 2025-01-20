import { JSX } from 'react';

import FilmBoxSkeleton from './FilmBoxSkeleton';
import { SectionTitleSkeleton } from '../CommonSkeleton';
import InfoEpisodesSkeleton from './InfoEpisodesSkeleton';
import FilmBoxContentSkeleton from './FilmBoxContentSkeleton';

const FilmWatchSkeleton = (): JSX.Element => {
  return (
    <>
      <SectionTitleSkeleton />
      <FilmBoxSkeleton />
      <FilmBoxContentSkeleton />
      <InfoEpisodesSkeleton />
      <InfoEpisodesSkeleton />
    </>
  );
};

export default FilmWatchSkeleton;
