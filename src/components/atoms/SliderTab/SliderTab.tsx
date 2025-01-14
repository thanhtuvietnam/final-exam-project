import { JSX } from 'react';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { icons } from '@/lib/declarations/icons';
import { IMG_URL } from '@/lib/declarations/constant';
import { toBase64, ShimmerImage } from '@/lib/utils/shimmer-image';

interface SliderTab {
  tabPic: string;
  tabPicAlt: string;
  vote_average: number;
  theme?: string;
}

const SliderTab = ({
  theme,
  tabPic,
  tabPicAlt,
  vote_average,
}: SliderTab): JSX.Element => {
  return (
    <>
      <Image
        height={720}
        // loading="lazy"
        width={1280}
        alt={tabPicAlt}
        src={`${IMG_URL}/${tabPic}`}
        placeholder={`data:image/svg+xml;base64,${toBase64(ShimmerImage(700, 475))}`}
        className={cn(
          //NOTE: responsive
          'galaxyTabS7:h-[300px] ipadMini:h-[350px] imac:h-[550px] prodisPlay:h-[600px] macbookPro:h-[700px] fullHd:h-[800px] h-[237px] sm:h-[370px] md:h-[400px] lg:h-[500px] 2xl:h-[650px]',
          //NOTE: main
          'w-full rounded-3xl object-cover',
        )}
        priority={true}
      />
      <div className="tw-themes-2 tw-flex-1 absolute top-3 right-3 z-20 gap-0.5 rounded-full p-2 font-mono">
        <span>{vote_average}</span>
        <icons.FaStar />
      </div>
    </>
  );
};

export default SliderTab;
