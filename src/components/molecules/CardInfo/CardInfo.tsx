import './CardInfo.css';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { icons } from '@/lib/declarations/icons';
import {
  ArrowBtn,
  BookMark,
  AlgoliaBtn,
  ChevronDown,
} from '@/components/atoms';

const CardInfo: React.FC = () => {
  return (
    <>
      <div className="relative">
        <Image
          width={300}
          height={500}
          alt="infocardimg"
          src="/demo/poster.jpg"
          className="size-full rounded-3xl"
        />
        <div className="tw-flex absolute top-1 w-full px-1.5">
          <BookMark />
          <ArrowBtn text="Trailer" />
        </div>

        <div className="tw-flex absolute bottom-3 w-full gap-2 px-1.5">
          <AlgoliaBtn
            className={cn('button-one', 'tw-text-color', 'rounded-full px-5')}
            color="#00a8c5"
          >
            <ChevronDown size={15} tab="Tập Phim" />
            {/* <icons.GoChevronDown /> */}
          </AlgoliaBtn>
          <AlgoliaBtn
            className={cn('button-two', 'tw-text-color', 'rounded-full px-9')}
            color="#ff5000"
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
