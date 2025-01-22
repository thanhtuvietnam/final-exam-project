import { JSX } from 'react';

import { cn } from '@/lib/utils';
import { BorderEffectProps } from '@/types/commonTypes';

import { Bridge } from '../../Bridge';

const BorderEffect = ({
  bottomClassName,
  className,
  topClassName,
  seeAllEffect,
}: BorderEffectProps): JSX.Element => {
  return (
    <>
      {/*NOTE: Top Border */}
      <Bridge
        className={cn(
          'absolute top-2 left-1/2 z-0',
          'bg-main-aliceBlue-800 h-1 dark:bg-[#891daf]',
          'transition-all duration-300 ease-out',
          '-translate-x-1/2 transform',
          seeAllEffect ? 'w-1/2 scale-x-100' : 'w-0 scale-x-0',

          className,
          topClassName,
        )}
      />
      {/*NOTE: Bottom Border */}
      <Bridge
        className={cn(
          'absolute bottom-2 left-1/2 -z-10',
          'bg-main-aliceBlue-800 h-1 dark:bg-[#891daf]',
          '-transition-all duration-300 ease-out',
          '-translate-x-1/2 transform',
          seeAllEffect ? 'w-1/2 scale-x-100' : 'w-0 scale-x-0',
          className,
          bottomClassName,
        )}
      />
      {/*NOTE: boundaries */}
      <Bridge className="-top-1 -z-10 h-4 w-full" />
      <Bridge className="-bottom-1 -z-10 h-1.5 w-full" />
    </>
  );
};

export default BorderEffect;
