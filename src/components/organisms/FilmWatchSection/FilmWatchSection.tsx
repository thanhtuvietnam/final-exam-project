'use client';

import { JSX } from 'react';
import { useEffectOnce, useLocalStorage } from 'react-use';

import { useStore } from '@/lib/store/store';
import { Episode } from '@/types/apiMovieDetails';
import { SectionTitle } from '@/components/atoms';
import { useGetMovieDetail } from '@/api/endpoints/customhook';
import {
  FilmBox,
  InfoTable,
  InfoEpisodes,
  FilmBoxContent,
} from '@/components/molecules';

const DEFAULT_TEXT = 'đang cập nhật...';
const DEFAULT_QUALITY = 'HD';

const FilmWatchSection = ({ slug }: { slug: string }): JSX.Element => {
  const { data } = useGetMovieDetail(slug);
  const item = data?.item;

  const {
    episodes = [],
    poster_url,
    lang,
    name,
    quality = DEFAULT_QUALITY,
    content,
  } = item || {};

  const serverData = episodes.flatMap((ep: Episode) => ep?.server_data || []);
  const serverName = episodes.flatMap((ep: Episode) => ep?.server_name);

  const filmUrlStore = useStore((state) => state.filmUrl);
  const epStore = useStore((state) => state.episode);
  const addEpisode = useStore((state) => state.addUrl);

  const [value] = useLocalStorage<{ filmUrl: string; ep: string }>('re-watch');

  useEffectOnce(() => {
    if ((!filmUrlStore || !epStore) && value) {
      addEpisode(value.filmUrl, value.ep);
    }
  });

  return (
    <>
      <SectionTitle
        idLabel="watchfilm-section"
        showSeeAll={false}
        title="Watch Now"
      />

      <FilmBox
        posterUrl={poster_url ?? DEFAULT_TEXT}
        title={name ?? DEFAULT_TEXT}
      />

      <FilmBoxContent
        quality={quality}
        content={content || DEFAULT_TEXT}
        name={name || DEFAULT_TEXT}
        lang={lang || DEFAULT_TEXT}
      />

      <InfoEpisodes
        slug={slug}
        serverName={serverName}
        serverData={serverData}
      />
      <InfoEpisodes
        BackupLink
        slug={slug}
        MainLink={false}
        serverName={serverName}
        serverData={serverData}
      />
      <InfoTable
        quality={quality}
        serverData={serverData}
        lang={lang || DEFAULT_TEXT}
      />
    </>
  );
};

export default FilmWatchSection;
