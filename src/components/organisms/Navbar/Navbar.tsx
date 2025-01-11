'use client';
import { useScroll } from 'react-use';
import React, { useRef, useState } from 'react';

import { cn } from '@/lib/utils';
import { Sidebar, TabLists } from '@/components/molecules';
import { SidebarBtn, ThemeToggleButton } from '@/components/atoms';

const Navbar: React.FC = () => {
  const scrollRef = useRef<HTMLElement>(null!);
  const { y } = useScroll(scrollRef);

  const [openSidebar, setOpenSidebar] = useState(false);
  const [crossed, setCrossed] = useState(false);
  const [clickEffectSidebar, setClickEffectSidebar] = useState<string | null>(
    null,
  );
  const [clickSubMenuEffectSidebar, setClickSubMenuEffectSidebar] = useState<
    string | null
  >(null);

  return (
    <nav
      ref={scrollRef}
      aria-label="Main Navigation"
      className={cn(
        'tw-flex container',
        'bg-bglight/30 dark:bg-bgdark/30',
        'before:backdrop-hack before:rounded-full before:backdrop-blur-3xl',
        'tw-shadow tw-border-themes-2 sticky z-40 my-1 rounded-full border select-none lg:p-0',
        y > 60 ? 'top-[60px]' : 'top-0',
      )}
    >
      <TabLists className="hidden lg:block" />
      <Sidebar
        setOpenSidebar={setOpenSidebar}
        setCrossedState={setCrossed}
        isOpen={openSidebar}
        clickEffect={clickEffectSidebar}
        setClickEffect={setClickEffectSidebar}
        clickSubMenuEffect={clickSubMenuEffectSidebar}
        setClickSubMenuEffect={setClickSubMenuEffectSidebar}
      />
      <div aria-label="Right Navbar" className="ml-1 flex gap-2 lg:mr-2">
        <span className="block lg:hidden">navbar right</span>
        <ThemeToggleButton />
      </div>
      <SidebarBtn
        aria-label="Sidebar Button"
        className="lg:hidden"
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        crossed={crossed}
        setCrossedState={setCrossed}
      />
    </nav>
  );
};

export default Navbar;
