'use client';
import { JSX, useState, useEffect } from 'react';
import { useEffectOnce, useLocalStorage } from 'react-use';

import { useStore } from '@/lib/store/store';
import { IMG_URL } from '@/lib/declarations/constant';
import { useRouter, usePathname } from 'next/navigation';
import { Episode, Category } from '@/types/apiMovieDetails';
import { useGetMovieDetail } from '@/api/endpoints/customhook';
import { SideInfo, BackgroundGradient } from '@/components/atoms';
import { BlockInfoSkeleton } from '@/components/atoms/Skeleton/BlockInfoSkeleton';
import {
  CardInfo,
  InfoTable,
  InfoContent,
  InfoEpisodes,
} from '@/components/molecules';

const DEFAULT_TEXT = 'đang cập nhật...';

const BlockInfoSection = ({ slug }: { slug: string }): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const [expandInfoEpisodes, setExpandInfoEpisodes] = useState(false);
  const addEpisode = useStore((state) => state.addUrl);

  const [localStorage, setLocalStorage, remove] = useLocalStorage<{
    filmUrl: string;
    ep: string;
  }>('re-watch', {
    filmUrl: '',
    ep: '',
  });

  useEffectOnce(() => {
    if (pathName.includes('film-info')) remove();
  });

  const { data, status } = useGetMovieDetail(slug);
  if (status === 'pending') return <BlockInfoSkeleton />;

  // useEffect(() => {
  //   if (data) setLoading(true);
  // }, [data]);
  //
  // if (loading) return <BlockInfoSkeleton />;
  //
  const item = data?.item;
  const actors = item?.actor.map((a) => a).join(', ') || DEFAULT_TEXT;
  const serverData =
    item?.episodes?.flatMap((ep: Episode) => ep.server_data || []) || [];
  const serverName =
    item?.episodes?.flatMap((ep: Episode) => ep.server_name) || [];
  const category =
    item?.category.map((c: Category) => c.name).join(', ') || DEFAULT_TEXT;
  const country =
    item?.country.map((c: Category) => c.name).join(', ') || DEFAULT_TEXT;
  const { lang = DEFAULT_TEXT, quality = 'HD', director, view } = item || {};
  const ep1 = serverData.find((ep) => ep.slug === '1');

  const handleExpandInfoEpisodes = () =>
    setExpandInfoEpisodes(!expandInfoEpisodes);

  const handlePlayButton = () => {
    const selectedEp = ep1 || serverData[0];
    if (!selectedEp) return;

    addEpisode(selectedEp.link_m3u8 || '', selectedEp.slug || '');
    setLocalStorage({
      filmUrl: selectedEp.link_m3u8 || '',
      ep: selectedEp.slug || '',
    });

    const urlHref = selectedEp.slug?.includes('1')
      ? `/xem-phim/${slug}?tap=1`
      : `/xem-phim/${slug}?tap=full`;
    router.push(urlHref);
  };

  return (
    <>
      <div className="flex w-full">
        <div className="w-1/3">
          <BackgroundGradient>
            <CardInfo
              altName={item?.name || 'default'}
              handlePlayButton={handlePlayButton}
              handleExpandInfoEpisodes={handleExpandInfoEpisodes}
              slug={slug}
              thumbUrl={`${IMG_URL}/${item?.thumb_url}`}
            />
          </BackgroundGradient>
        </div>
        <SideInfo
          /*eslint perfectionist/sort-jsx-props:"off"*/
          title={item?.name || DEFAULT_TEXT}
          originalName={item?.origin_name || DEFAULT_TEXT}
          year={item?.year || 2021}
          time={item?.time || DEFAULT_TEXT}
          imdbScore={9.5}
          episodeCurrent={item?.episode_current || DEFAULT_TEXT}
          newestEpisode={DEFAULT_TEXT}
          country={country}
          lang={lang}
          qua={quality}
          director={director?.[0] || 'NaN'}
          actor={actors}
          category={category}
          view={view || 1000}
        />
      </div>

      {expandInfoEpisodes && (
        <InfoEpisodes
          MainLink
          slug={slug}
          BackupLink={false}
          serverName={serverName}
          serverData={serverData}
        />
      )}

      <InfoContent content={item?.content || []} />
      <InfoTable quality={quality} lang={lang} serverData={serverData} />
    </>
  );
};

export default BlockInfoSection;
