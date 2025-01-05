'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';

interface LogoImgProps {
  className?: string;
  width?: number;
  height?: number;
}

const LogoImg: React.FC<LogoImgProps> = ({ width, className, height }) => {
  const { resolvedTheme } = useTheme();
  const logo =
    resolvedTheme === 'dark' ? '/logo/Logolight.png' : '/logo/Logodark.png';

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // const handleClick = (): void => {
  //   // console.log('click');
  // };

  return (
    <>
      <Image
        src={logo}
        quality={100}
        width={width ?? 70}
        alt="logoCuongPhim"
        height={height ?? 70}
        className={cn(
          // 'sm:w-12',
          // 'md:w-14',
          // 'lg:w-16',
          // 'xl:w-[4.5rem]',
          className,
        )}
        // loading="eager"
        // priority={true}
        // onClick={handleClick}
      />
    </>
  );
};
export default LogoImg;
