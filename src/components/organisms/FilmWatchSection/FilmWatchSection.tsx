import {
  FilmBox,
  InfoTable,
  InfoEpisodes,
  FilmBoxContent,
} from '@/components/molecules';

const FilmWatchSection: React.FC = () => {
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
