import { JSX } from 'react';

import {
  FilmBox,
  InfoTable,
  InfoEpisodes,
  FilmBoxContent,
} from '@/components/molecules';

const FilmWatchSection = ({ slug }: { slug: string }): JSX.Element => {
  return (
    <>
      <FilmBox />
      <FilmBoxContent />
      <InfoEpisodes />
      <InfoEpisodes />
      <InfoTable />
    </>
  );
};

export default FilmWatchSection;
