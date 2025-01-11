import { JSX } from 'react';

import { cn } from '@/lib/utils';
import { Item } from '@/types/apiResponse';
import { ContentBlock, MiniSliderBlock } from '@/components/atoms';

const SliderContent = ({ content }: { content: Item }): JSX.Element => {
  // console.log('SliderContent', content);

  return (
    <section
      // animate={{ opacity: 1, y: 0 }}
      // initial={{ opacity: 0, y: 50 }}
      aria-labelledby="slider-content"
      className={cn(
        'absolute z-20 w-full px-3 md:px-10 lg:px-16 xl:px-20',
        // responsive
        'macbookAir:bottom-34 prodisPlay:bottom-32 fullHd:bottom-48 bottom-5 lg:bottom-20',
      )}
      // transition={{ duration: 0.5 }}
    >
      <ContentBlock movieData={content} />
      <MiniSliderBlock slug={content?.slug} />
      {/* </motion.section> */}
    </section>
  );
};

export default SliderContent;
