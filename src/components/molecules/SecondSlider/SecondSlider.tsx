'use client';
import 'swiper/css';
// import 'swiper/css/effect-coverflow';

import { JSX, useState, useEffect } from 'react';

// import { useTheme } from 'next-themes';
import { Item } from '@/types/apiResponse';
import { logger } from '@/lib/utils/misc/logger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useGetMovieLists } from '@/api/endpoints/customhook';
import { SecondSliderSkeleton } from '@/components/atoms/Skeleton';
import { Card, SectionTitle, BackgroundGradient } from '@/components/atoms';

const swiperBreakpoints = {
  // 320: { slidesPerView: 2, spaceBetween: 10 },
  // 540: { slidesPerView: 3, spaceBetween: 22 },
  // 712: { slidesPerView: 4, spaceBetween: 82 },
  1024: {
    slidesPerView: 6,
    spaceBetween: 22,
  },
};

const SecondSlider = (): JSX.Element => {
  const [loading, setLoading] = useState(false);

  // const { resolvedTheme } = useTheme();
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

  // if (loading) return <SecondSliderSkeleton />;

  if (status === 'pending') return <SecondSliderSkeleton />;
  if (status === 'error') return <p>Error</p>;

  return (
    <section aria-labelledby="second-slider" className="my-5 rounded-b-3xl">
      <SectionTitle aria-labelledby="second-slider" title={'PHIM MỚI'} />
      <Swiper
        slidesPerView={6}
        // grabCursor={true}
        navigation={true}
        // breakpoints={swiperBreakpoints}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
      >
        {phimmoi?.items?.map((moviedata: Item) => (
          <SwiperSlide className="p-1" key={moviedata?._id}>
            <BackgroundGradient>
              <Card movieData={moviedata} />
            </BackgroundGradient>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

logger.info({
  msg: 'SecondSlider Render',
  fileName: 'SecondSlider.tsx',
  action: 'Component Render',
});
export default SecondSlider;
