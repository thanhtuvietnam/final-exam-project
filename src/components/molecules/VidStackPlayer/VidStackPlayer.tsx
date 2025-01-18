'use client';
import { JSX } from 'react';

import Image from 'next/image';
import { useStore } from '@/lib/store/store';
import { IMG_URL } from '@/lib/declarations/constant';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { Poster, MediaPlayer, MediaProvider } from '@vidstack/react';
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';
import {
  SeekForwardIcon,
  SeekBackwardIcon,
} from '@/components/atoms/VidStackItems/VidStackItems';

const VidStackPlayer = ({
  filmUrl,
  poster,
  title,
}: {
  filmUrl: string;
  poster: string;
  title: string;
}): JSX.Element => {
  const episode = useStore((state) => state.episode);
  return (
    <MediaPlayer
      src={filmUrl}
      className="ring-media-focus aspect-video w-full overflow-hidden rounded-md bg-slate-900 font-sans text-white data-[focus]:ring-4"
      crossOrigin
      posterLoad="eager"
      suppressHydrationWarning={false}
      playsInline
      viewType="video"
      title={`${title} tập ${episode}`}
    >
      <MediaProvider>
        <Poster className="vds-poster" asChild>
          <Image
            width={720}
            height={500}
            src={`${IMG_URL}/${poster}`}
            alt="A description of my image."
          />
        </Poster>
      </MediaProvider>

      <DefaultVideoLayout
        colorScheme="system"
        icons={defaultLayoutIcons}
        suppressHydrationWarning={false}
        slots={{
          afterSettingsMenu: <SeekBackwardIcon />,
          beforeGoogleCastButton: <SeekForwardIcon />,
        }}
      />
    </MediaPlayer>
  );
};

export default VidStackPlayer;
