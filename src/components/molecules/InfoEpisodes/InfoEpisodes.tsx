'use client';
import { useLocalStorage } from 'react-use';
import React, { JSX, useState } from 'react';

import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store/store';
import { icons } from '@/lib/declarations/icons';
import { EpisodeLink } from '@/components/atoms';
import { ServerDatum } from '@/types/apiMovieDetails';
import { motion, AnimatePresence } from 'motion/react';
import { determineLinkType } from '@/lib/utils/transformtext';

export interface SelectedEpisode {
  slug: string;
  linkType: 'm3u8' | 'embed';
}

interface InfoEpisodesProps {
  serverData?: ServerDatum[];
  serverName?: string;
  MainLink?: boolean;
  BackupLink?: boolean;
  slug?: string;
}

const InfoEpisodes = ({
  serverData = [],
  serverName,
  MainLink = true,
  BackupLink = false,
  slug = '',
}: InfoEpisodesProps): JSX.Element => {
  const router = useRouter();
  const addEpisode = useStore((state) => state.addUrl);

  const [localStorage, setLocalStorage] = useLocalStorage<{
    filmUrl: string;
    ep: string | null;
  }>('re-watch', {
    filmUrl: '',
    ep: null,
  });

  const [selectedEpisode, setSelectedEpisode] =
    useState<SelectedEpisode | null>({
      slug: localStorage?.ep || '',
      linkType: determineLinkType(localStorage?.filmUrl || ''),
    });

  const handleClickLink = (
    url: string,
    episode: string,
    linkType: 'm3u8' | 'embed',
  ) => {
    addEpisode(url, episode);
    setLocalStorage({ filmUrl: url, ep: episode });
    setSelectedEpisode({ slug: episode, linkType });
    router.push(`/xem-phim/${slug}?tap=${episode}`);
  };

  return (
    <AnimatePresence>
      <motion.section
        exit={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="tw-themes-3 h-60 w-full overflow-y-scroll rounded-lg scheme-light dark:scheme-dark"
      >
        <h4 className="tw-text-color-2 tw-border-themes mb-4 flex items-center gap-2 border-b-[0.5px] p-3 font-sans">
          <icons.FaServer />
          {MainLink && serverName}
          {BackupLink && 'Link dự phòng'}
        </h4>
        <ul className="tw-themes-3 flex flex-wrap items-center gap-1 rounded-lg p-1">
          {serverData.map((server) => (
            <React.Fragment key={server.slug}>
              {MainLink && (
                <EpisodeLink
                  handleClick={() =>
                    handleClickLink(server.link_m3u8, server.slug, 'm3u8')
                  }
                  linkType="m3u8"
                  serverData={server}
                  isSelected={
                    selectedEpisode?.slug === server.slug &&
                    selectedEpisode.linkType === 'm3u8'
                  }
                />
              )}
              {BackupLink && (
                <EpisodeLink
                  handleClick={() =>
                    handleClickLink(server.link_embed, server.slug, 'embed')
                  }
                  linkType="embed"
                  serverData={server}
                  isSelected={
                    selectedEpisode?.slug === server.slug &&
                    selectedEpisode.linkType === 'embed'
                  }
                />
              )}
            </React.Fragment>
          ))}
        </ul>
      </motion.section>
    </AnimatePresence>
  );
};

export default InfoEpisodes;
