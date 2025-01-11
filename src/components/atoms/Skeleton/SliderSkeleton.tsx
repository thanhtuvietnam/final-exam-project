'use client';
import { JSX } from 'react';

import { cn } from '@/lib/utils';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SkeletonIconImage } from './CommonSkeleton';

const SliderSkeleton = (): JSX.Element => {
  return (
    <section aria-labelledby="slider-skeleton" className="my-1">
      <Swiper className="">
        <SwiperSlide>
          <div
            className={cn(
              'galaxyTabS7:h-[300px] ipadMini:h-[350px] imac:h-[550px] prodisPlay:h-[600px] macbookPro:h-[700px] fullHd:h-[800px] h-[720px] w-[1280px] sm:h-[370px] md:h-[400px] lg:h-[500px] 2xl:h-[650px]',
              'skeleton-slider w-full rounded-3xl object-cover',
            )}
          />
          <div className="tw-themes-2 tw-flex-1 absolute top-3 right-3 z-20 gap-0.5 rounded-full p-2 font-mono">
            <div className={cn('skeleton h-6 w-10 rounded-sm')} />
          </div>
          <SkeletonIconImage size={80} />
          <section
            aria-labelledby={`slider-content-skeleton`}
            className={cn(
              'absolute z-20 w-full px-3 md:px-10 lg:px-16 xl:px-20',
              'macbookAir:bottom-34 prodisPlay:bottom-32 fullHd:bottom-48 bottom-5 lg:bottom-20',
            )}
          >
            <div className="tw-text-color w-full lg:w-1/2">
              {/* Skeleton Title */}
              <div
                className={cn(
                  'surfacePro:text-3xl ipadMini:text-4xl text-2xl font-black md:text-5xl xl:text-6xl',
                  'skeleton mb-5 h-20 w-3/4 rounded-sm', // Áp dụng shimmer effect
                )}
              />

              {/* Skeleton Description */}
              <div
                className={cn(
                  'mb-10 text-lg font-bold',
                  'md:text-xl lg:mb-3 lg:text-2xl',
                  'skeleton h-8 w-1/2 rounded-sm', // Áp dụng shimmer effect
                )}
              />

              {/* Skeleton List Items */}
              <ul className="ipadMini:grid my-5 hidden grid-cols-2 gap-2 font-sans">
                {[...Array(4)].map((_, idx) => (
                  <li
                    key={idx}
                    className={cn(
                      'tw-flex-1 gap-5 text-xl',
                      'skeleton h-6 w-full', // Áp dụng shimmer effect
                    )}
                  />
                ))}
              </ul>
            </div>

            {/* Skeleton Buttons */}
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className={cn('tw-flex w-full gap-4')}>
                {/* Skeleton Button 1 */}
                <div
                  className={cn(
                    'skeleton', // Áp dụng shimmer effect
                    'tw-carouselBtn tw-themes-2 from-gray-700 to-black/30',
                    'h-10 w-1/2 rounded',
                  )}
                />

                {/* Skeleton Button 2 */}
                <div
                  className={cn(
                    'skeleton', // Áp dụng shimmer effect
                    'tw-carouselBtn group/button-two border-main-deepCerise-350 bg-bglight/20 dark:border-main-summerSky-500 border from-gray-500 to-black/70',
                    'h-10 w-1/2 rounded',
                  )}
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SliderSkeleton;
