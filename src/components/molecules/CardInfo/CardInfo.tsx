import './CardInfo.css';

import { JSX } from 'react';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { icons } from '@/lib/declarations/icons';
import { toBase64, ShimmerImage } from '@/lib/utils/shimmer-image';
import {
  ArrowBtn,
  BookMark,
  AlgoliaBtn,
  ChevronDown,
} from '@/components/atoms';

const CardInfo = ({
  // slug,
  altName,
  thumbUrl,
  handleExpandInfoEpisodes,
  handlePlayButton,
}: {
  slug: string;
  altName: string;
  thumbUrl: string;
  // handleExpandInfoEpisodes: () => React.Dispatch<React.SetStateAction<boolean>>;
  handleExpandInfoEpisodes: () => void;
  handlePlayButton: () => void;
}): JSX.Element => {
  return (
    <>
      <div className="relative h-[450px]">
        <Image
          width={300}
          height={500}
          loading="lazy"
          src={thumbUrl}
          alt={`${altName}-thumbImage`}
          placeholder={`data:image/svg+xml;base64,${toBase64(ShimmerImage(700, 475))}`}
          className="size-full overflow-hidden rounded-3xl"
          decoding="async"
        />
        <div className="tw-flex absolute top-1 w-full px-1.5">
          <BookMark />
          <ArrowBtn text="Trailer" />
        </div>

        <div className="tw-flex absolute bottom-3 w-full gap-2 px-1.5">
          <AlgoliaBtn
            className={cn('button-one', 'tw-text-color', 'rounded-full px-5')}
            color="#00a8c5"
            onClick={handleExpandInfoEpisodes}
          >
            <ChevronDown size={15} tab="Tập Phim" />
            {/* <icons.GoChevronDown /> */}
          </AlgoliaBtn>

          <AlgoliaBtn
            className={cn('button-two', 'tw-text-color', 'rounded-full px-9')}
            // href={`/xem-phim/${slug}`}
            color="#ff5000"
            onClick={handlePlayButton}
          >
            Play
            <icons.FaPlay size={30} />
          </AlgoliaBtn>
        </div>
      </div>
    </>
  );
};

export default CardInfo;
