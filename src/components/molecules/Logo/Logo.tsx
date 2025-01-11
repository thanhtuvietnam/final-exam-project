import { JSX } from 'react';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { LogoImg, TextEffect } from '@/components/atoms';

const Logo = (): JSX.Element => {
  return (
    <Link href="/" className="tw-flex relative cursor-pointer gap-1">
      <LogoImg width={40} height={30} />
      <TextEffect
        className={cn(
          'h-full truncate font-bold capitalize select-none',
          'text-2xl',
          'sm:text-3xl',
          'md:text-4xl',
          // 'lg:text-5xl'
          // 'xl:text-5xl'
          // '[--base-gradient-color:theme(colors.main.summerSky.100)] dark:[--base-color:theme(colors.main.deepCerise.400)] dark:[--base-gradient-color:theme(colors.main.deepCerise.100)] [--base-color:theme(colors.main.summerSky.800)]',
          //
          '[--base-color:var(--color-main-summerSky-800)] [--base-gradient-color:var(--color-main-summerSky-100)] dark:[--base-color:var(--color-main-deepCerise-500)] dark:[--base-gradient-color:var(--color-main-deepCerise-100)]',
        )}
      >
        cuồng phim
      </TextEffect>
    </Link>
  );
};

export default Logo;
