'use client';
import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

const Scroll = (): JSX.Element => {
  const pathname = usePathname();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return <></>;
};

export default Scroll;
