'use client';

import { JSX } from 'react';

import { useStore } from '@/lib/store/store';
import { FilmBoxPlayer } from '@/components/atoms';

import { VidStackPlayer } from '../VidStackPlayer';

const FilmBox = ({
  posterUrl,
  title,
}: {
  posterUrl: string;
  title: string;
}): JSX.Element => {
  const filmUrl = useStore((state) => state.filmUrl);
  const isM3U8 = filmUrl?.endsWith('index.m3u8');

  return (
    <div className="filmBox">
      {isM3U8 ? (
        <VidStackPlayer poster={posterUrl} title={title!} filmUrl={filmUrl!} />
      ) : (
        <FilmBoxPlayer filmUrl={filmUrl!} />
      )}
    </div>
  );
};

export default FilmBox;
