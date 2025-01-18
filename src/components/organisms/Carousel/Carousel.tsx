import { JSX, memo } from 'react';

import dynamic from 'next/dynamic';
import { Slider } from '@/components/molecules';
import { logger } from '@/lib/utils/misc/logger';

// const MemoizedSlider = memo(Slider);
const Carousel = (): JSX.Element => {
  return <Slider />;
};

logger.info({
  msg: 'Carousel Render',
  fileName: 'Carousel.tsx',
  action: 'Component Render',
});

export default Carousel;
