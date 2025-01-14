'use client';
import { JSX, useState } from 'react';

import dynamic from 'next/dynamic';
import { Category } from '@/types/apiMovieDetails';
import { IMG_URL } from '@/lib/declarations/constant';
import { useGetMovieDetail } from '@/api/endpoints/customhook';
import { SideInfo, BackgroundGradient } from '@/components/atoms';
import {
  CardInfo,
  InfoTable,
  InfoContent,
  InfoEpisodes,
} from '@/components/molecules';

const BlockInfoSection = ({ slug }: { slug: string }): JSX.Element => {
  const nah = 'đang cập nhật...';
  const [expandInfoEpisodes, setExpandInfoEpisodes] = useState<boolean>(false);

  const { data, status } = useGetMovieDetail(slug);
  const item = data?.item;
  const actors = item?.actor.map((actor) => actor).join(', ') ?? nah;

  const category =
    item?.category.map((category: Category) => category?.name).join(', ') ??
    nah;
  const country =
    item?.country.map((country: Category) => country?.name).join(', ') ?? nah;

  // if (status === 'pending') return <div>BlockInfo Loading...</div>;
  const handleExpandInfoEpisodes = (): void =>
    setExpandInfoEpisodes(!expandInfoEpisodes);

  return (
    <>
      <div className="flex w-full">
        <div className="w-1/3">
          <BackgroundGradient>
            <CardInfo
              altName={item?.name || 'default'}
              handleExpandInfoEpisodes={handleExpandInfoEpisodes}
              slug={slug}
              thumbUrl={`${IMG_URL}/${item?.thumb_url}`}
            />
          </BackgroundGradient>
        </div>
        <SideInfo
          /* eslint-disable */
          title={item?.name ?? nah}
          originalName={item?.origin_name ?? nah}
          year={item?.year ?? 2021}
          time={item?.time ?? nah}
          imdbScore={9.5}
          episodeCurrent={item?.episode_current ?? nah}
          newestEpisode={nah}
          country={country}
          lang={item?.lang ?? nah}
          qua={item?.quality ?? 'HD'}
          director={(item?.director[0] || nah) ?? 'tuluu'}
          actor={actors || nah}
          category={category}
          view={item?.view ?? 1000}
        />
      </div>
      {expandInfoEpisodes && <InfoEpisodes episodes={item?.episodes ?? []} />}
      <InfoContent content={item?.content ?? []} />

      <div className="h-60 overflow-scroll">
        <InfoTable item={item} />
      </div>
    </>
  );
};

export default BlockInfoSection;
