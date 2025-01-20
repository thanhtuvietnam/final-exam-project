'use client';

import { JSX, useState, useEffect } from 'react';
import { useEffectOnce, useLocalStorage } from 'react-use';

import { useStore } from '@/lib/store/store';
import { Episode } from '@/types/apiMovieDetails';
import { SectionTitle } from '@/components/atoms';
import { useGetMovieDetail } from '@/api/endpoints/customhook';
import { FilmWatchSkeleton } from '@/components/atoms/Skeleton';
import {
  FilmBox,
  InfoTable,
  InfoEpisodes,
  FilmBoxContent,
} from '@/components/molecules';

const DEFAULT_TEXT = 'đang cập nhật...';
const DEFAULT_QUALITY = 'HD';

const FilmWatchSection = ({ slug }: { slug: string }): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const { data, status } = useGetMovieDetail(slug);
  const item = data?.item;

  const filmUrlStore = useStore((state) => state.filmUrl);
  const epStore = useStore((state) => state.episode);
  const addEpisode = useStore((state) => state.addUrl);

  const [value] = useLocalStorage<{ filmUrl: string; ep: string }>('re-watch');

  useEffectOnce(() => {
    if ((!filmUrlStore || !epStore) && value) {
      addEpisode(value.filmUrl, value.ep);
    }
  });
  // useEffect(() => {
  //   if (data) {
  //     setLoading(true);
  //   }
  // }, []);
  // if (loading) return <FilmWatchSkeleton />;

  if (status === 'pending') return <FilmWatchSkeleton />;

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
