'use client';

import React from 'react';
import { JSX } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { SectionTitleSkeleton } from './CommonSkeleton';
import CardSkeleton from './MovieTemplateSkeleton/CardSkeleton';

const swiperBreakpoints = {
  1024: {
    slidesPerView: 6,
    spaceBetween: 22,
  },
};

const SecondSliderSkeleton = (): JSX.Element => {
  const skeletonSlides = Array.from({ length: 6 });

  return (
    <section aria-labelledby="second-slider" className="my-5">
      <SectionTitleSkeleton />
      <Swiper slidesPerView={6} breakpoints={swiperBreakpoints}>
        {skeletonSlides.map((_, index) => (
          <SwiperSlide key={index} className="p-1">
            <CardSkeleton />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SecondSliderSkeleton;
