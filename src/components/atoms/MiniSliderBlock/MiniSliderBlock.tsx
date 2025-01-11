import { JSX } from 'react';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { icons } from '@/lib/declarations/icons';

const MiniSliderBlock = ({ slug }: { slug: string }): JSX.Element => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3">
      {/* button */}
      <div className={cn('tw-flex w-full')}>
        <Link
          href="/"
          className={cn(
            'tw-bounce-effect',
            'tw-carouselBtn tw-themes-2 from-gray-700 to-black/30',
          )}
        >
          <icons.FaPlay />
          <span>Watch Movie</span>
        </Link>
        <Link
          href={`/film-info/${slug}`}
          className={cn(
            'tw-bounce-effect',
            'tw-carouselBtn group/button-two border-main-deepCerise-350 bg-bglight/20 dark:border-main-summerSky-500 border from-gray-500 to-black/70',
          )}
        >
          <span className="dark:group-hover/button-two:text-bglight group-hover/button-two:text-green-400">
            More Infor
          </span>
          <icons.GoArrowRight className="rounded-full group-hover/button-two:bg-green-400 group-hover/button-two:text-lg dark:group-hover/button-two:bg-green-900" />
        </Link>
      </div>
    </div>
  );
};

export default MiniSliderBlock;
