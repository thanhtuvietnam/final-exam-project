'use client';
import React, { JSX, useMemo, useState, useCallback } from 'react';

import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import { Base } from '@/types/commonTypes';
import { Cursor } from '@/components/atoms';
import { usePathname } from 'next/navigation';
import { tabs } from '@/lib/declarations/constant';
import { Position, TabState } from '@/types/typenavbar';

const Tab = dynamic(() => import('@/components/atoms/Tab/Tab'), {
  ssr: true,
});

const TabLists = ({ className }: Base): JSX.Element => {
  const [position, setPosition] = useState<Position>({
    width: 0,
    left: 0,
    opacity: 0,
  });

  let clickEffectVar = '';

  const pathName = usePathname();

  switch (true) {
    case pathName.includes('phim-bo'):
      clickEffectVar = 'PHIM BỘ';
      break;
    case pathName.includes('phim-le'):
      clickEffectVar = 'PHIM LẺ';
      break;
    case pathName.includes('hoat-hinh'):
      clickEffectVar = 'HOẠT HÌNH';
      break;
    case pathName.includes('tv-shows'):
      clickEffectVar = 'TV SHOWS';
      break;
    case pathName.includes('the-loai'):
      clickEffectVar = 'THỂ LOẠI';
      break;
    case pathName.includes('quoc-gia'):
      clickEffectVar = 'QUỐC GIA';
      break;
    default:
      // clickEffectVar = 'TRANG CHỦ';
      break;
  }

  const [tabState, setTabState] = useState<TabState>({
    clickEffect: clickEffectVar,
    dir: null,
    selected: null,
    subMenuActiveId: null,
  });

  const handleSetTabState = useCallback((val: string | null): void => {
    setTabState((prev: TabState) => ({
      ...prev,
      dir:
        val === null
          ? null
          : prev.selected === 'THỂ LOẠI' && val === 'QUỐC GIA'
            ? 'r'
            : prev.selected === 'QUỐC GIA' && val === 'THỂ LOẠI'
              ? 'l'
              : prev.dir,
      selected: val,
    }));
  }, []);

  const handleMouseLeave = useCallback((): void => {
    setPosition((prev: Position) => ({
      ...prev,
      opacity: 0,
    }));
    handleSetTabState(null);
  }, [handleSetTabState]);

  const renderedTabs = useMemo(() => {
    return tabs.map((tab) => (
      <Tab
        key={tab.label}
        setPosition={setPosition}
        handleSetTabState={handleSetTabState}
        tab={tab}
        tabState={tabState}
        setTabState={setTabState}
      />
    ));
  }, [tabState, handleSetTabState]);

  return (
    <ul
      aria-label="Left Navbar"
      className={cn(
        className,
        'rounded-l-full',
        // 'backdrop-blur-3xl',
        // 'bg-bglight/10 dark:bg-bgdark/10',
        'w-fit cursor-pointer gap-0 px-0.5 py-0.5',
        'relative z-50 items-center justify-center lg:flex',
      )}
      onMouseLeave={handleMouseLeave}
    >
      {renderedTabs}
      <Cursor position={position} />
    </ul>
  );
};

export default React.memo(TabLists);
