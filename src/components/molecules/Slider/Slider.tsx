'use client';

import { JSX, useState, useEffect } from 'react';

import './slider.css';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { cn } from '@/lib/utils';
import { Item } from '@/types/apiResponse';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderTab } from '@/components/atoms/SliderTab';
import { SliderSkeleton } from '@/components/atoms/Skeleton';
import { useGetMovieLists } from '@/api/endpoints/customhook';
import { SliderContent } from '@/components/molecules/SliderContent';
import {
  Autoplay,
  Scrollbar,
  EffectFade,
  Navigation,
  Pagination,
} from 'swiper/modules';

const Slider = (): JSX.Element => {
  const [loading, setLoading] = useState(false);

  const { data: phimmoi, status } = useGetMovieLists(
    'danh-sach',
    'phim-moi-cap-nhat',
    1,
  );
  // useEffect(() => {
  //   if (phimmoi) {
  //     setLoading(true);
  //   }
  // }, [phimmoi]);

  // if (loading) return <SliderSkeleton />;
  if (status === 'pending') return <SliderSkeleton />;
  if (status === 'error') return <p>Error</p>;

  return (
    <>
      <Swiper
        // slidesPerView={1}
        className="group/slider"
        navigation={true}
        // grabCursor={true}
        pagination={{ type: 'progressbar' }}
        scrollbar={{
          draggable: true,
        }}
        modules={[EffectFade, Autoplay, Scrollbar, Pagination, Navigation]}
        autoplay={{
          delay: 5000,
          // disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        effect="fade"
        spaceBetween={50}
        fadeEffect={{
          crossFade: true,
        }}
      >
        {phimmoi &&
          phimmoi?.items?.map((movie: Item, index: number) => (
            <SwiperSlide key={index}>
              <div
                className={cn(
                  'tw-black-backdrop tw-light-backdrop absolute z-0 h-full w-full rounded-3xl transition duration-500',
                )}
              />
              <SliderTab
                vote_average={movie?.tmdb?.vote_average}
                tabPicAlt={movie?.name}
                tabPic={movie?.poster_url}
              />
              <SliderContent content={movie} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Slider;
