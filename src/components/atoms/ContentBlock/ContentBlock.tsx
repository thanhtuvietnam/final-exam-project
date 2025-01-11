'use client';
import { JSX } from 'react';

import { cn } from '@/lib/utils';
import { Item } from '@/types/apiResponse';
import { montserratAlter } from '@/fonts/fonts';
import { icons } from '@/lib/declarations/icons';

import { Star } from '../Star';

const ContentBlock = ({ movieData }: { movieData: Item }): JSX.Element => {
  const items = [
    {
      Icon: icons.FaRegCalendarAlt,
      text: movieData?.year,
    },
    {
      Icon: icons.GoClock,
      text: movieData?.time,
    },
    {
      Icon: icons.HiMiniLanguage,
      text: movieData?.lang,
    },
    {
      Icon: icons.RiHdLine,
      text: movieData?.quality,
    },
    {
      Icon: icons.FaImdb,
      star: true,
      text: '8.1',
    },
  ];

  return (
    <div className="tw-text-color w-full lg:w-1/2">
      {/*NOTE: title */}
      <h2
        id="slider-content"
        className={cn(
          'mb-1',
          // responsive
          'surfacePro:text-3xl ipadMini:text-4xl text-2xl font-black md:text-5xl xl:text-6xl',
          // color
          'text-main-deepCerise-500 dark:text-main-summerSky-500',
        )}
      >
        {movieData?.name}
      </h2>

      <h3
        className={cn(
          'mb-10 text-lg font-bold',
          'md:text-xl lg:mb-3 lg:text-2xl',
          montserratAlter.className,
        )}
      >
        {movieData?.origin_name}
      </h3>

      {/*NOTE: mini-content */}
      <ul className="ipadMini:grid my-5 hidden grid-cols-2 gap-2 font-sans">
        {items.map(({ Icon, star, text }, index) => (
          <li
            key={index}
            className={cn('tw-flex-1 text-xl', star ? 'gap-4' : 'gap-5')}
          >
            {star && <Star size={40} />}
            <div className="tw-flex-1 gap-1.5">
              <Icon
                className="text-yellow-950 dark:text-yellow-400"
                size={30}
              />
              {text}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentBlock;
