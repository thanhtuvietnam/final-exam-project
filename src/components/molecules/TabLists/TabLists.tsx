'use client';
import React, { JSX, useMemo, useState, useCallback } from 'react';

import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import { Base } from '@/types/commonTypes';
import { Cursor } from '@/components/atoms';
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

  const [tabState, setTabState] = useState<TabState>({
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
