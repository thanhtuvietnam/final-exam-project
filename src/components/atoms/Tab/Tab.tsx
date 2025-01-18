'use client';
import { JSX, useRef } from 'react';
import { useLocalStorage } from 'react-use';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { TabProps } from '@/types/typenavbar';
import { ChevronDown, BorderEffect, SubmenuLists } from '@/components/atoms';

/**
 * Represents a single tab within the tab navigation.
 *
 * @param handleSetTabState - Function to update the current active tab state.
 * @param setPosition - Function to set the position and dimensions of the tab indicator.
 * @param setTabState - Function to update the overall tab state, including click effects and submenu active IDs.
 * @param tab - Object containing the tab's label, path, and any associated submenus.
 * @param tabState - Current state of the tabs, including the active click effect, selected tab, direction, and active submenu ID.
 * @returns A JSX element representing the tab item.
 */

const Tab = ({
  handleSetTabState,
  setPosition,
  setTabState,
  tab,
  tabState,
}: TabProps): JSX.Element => {
  const ref = useRef<HTMLLIElement>(null);
  const [state, setState, remove] = useLocalStorage<{
    filmUrl: string;
    ep: string;
  }>('re-watch');

  const handleMouseEnter = (): void => {
    if (!ref?.current) return;
    const { width } = ref.current.getBoundingClientRect();
    setPosition({
      width,
      left: ref.current.offsetLeft,
      opacity: 1,
    });
    handleSetTabState(tab.label);
  };

  const handleClick = (): void => {
    setTabState((prev) => ({
      ...prev,
      clickEffect: tab.label,
    }));
    handleSetTabState(tab.label);
  };

  const handleSetActiveId: React.Dispatch<
    React.SetStateAction<string | null>
  > = (id) => {
    setTabState((prev) => ({
      ...prev,
      subMenuActiveId: id as string | null,
    }));

    if (state?.filmUrl !== '' || state?.ep !== '') {
      remove();
    }
  };

  return (
    <li
      ref={ref}
      role="tab"
      className={cn(
        'relative z-10 font-sans',
        'transition-all duration-300',
        'h-full rounded-full text-nowrap duration-200',
        'tw-text-hover text-bgdark/60 dark:text-bglight/60 py-3',
        tabState.clickEffect === tab.label && 'text-bgdark dark:text-bglight',
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleClick();
        }
      }}
      tabIndex={0}
    >
      <BorderEffect isActive={tabState.clickEffect === tab.label} />

      {tab.subMenus && tab.subMenus.length > 0 ? (
        <div className="relative">
          <ChevronDown rotate={tabState.selected} tab={tab.label} />

          {/* <SubmenuLists */}
          {/*   refLi={ref} */}
          {/*   tab={{ */}
          {/*     subMenus: tab.subMenus, */}
          {/*   }} */}
          {/*   handleSetTabState={handleSetTabState} */}
          {/*   dir={tabState.dir as 'r' | 'l' | null} */}
          {/*   setSubMenuActiveId={handleSetActiveId} */}
          {/*   subMenuActiveId={tabState.subMenuActiveId} */}
          {/* /> */}
          {tabState.selected === tab.label && (
            <>
              {tab.subMenus && (
                <SubmenuLists
                  refLi={ref}
                  handleSetTabState={handleSetTabState}
                  dir={tabState.dir as 'r' | 'l' | null}
                  setSubMenuActiveId={handleSetActiveId}
                  subMenuActiveId={tabState.subMenuActiveId}
                  tab={{
                    subMenus: tab.subMenus,
                  }}
                />
              )}
            </>
          )}
        </div>
      ) : (
        <Link
          href={`${tab.path}${tab.path !== '/' ? '?page=1' : ''}`}
          className="px-2 py-4"
          onClick={() => handleSetActiveId(null)}
        >
          {tab.label}
        </Link>
      )}
    </li>
  );
};

export default Tab;
