'use client';

import React, { useRef } from 'react';
import { useToggle, useClickAway } from 'react-use';

import { cn } from '@/lib/utils';
import { icons } from '@/lib/declarations/icons';
import { motion, AnimatePresence } from 'motion/react';
import {
  Avatar,
  SocialContact,
  ProfileSubmenu,
  SidebarContent,
} from '@/components/atoms';

import { Logo } from '../Logo';

const overlayVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 0.95,
  },
};

const sidebarVariants = {
  closed: {
    opacity: 0,
    x: '-100%',
  },
  open: {
    opacity: 1,
    x: 0,
  },
};

const transition = {
  delay: 0.1,
  duration: 0.5,
  ease: [0.6, -0.05, 0.01, 0.99],
};

interface SidebarProps {
  isOpen: boolean;
  setOpenSidebar: (value: boolean) => void;
  setCrossedState: (value: boolean) => void;
  clickEffect: string | null;
  setClickEffect: React.Dispatch<React.SetStateAction<string | null>>;
  clickSubMenuEffect: string | null;
  setClickSubMenuEffect: React.Dispatch<React.SetStateAction<string | null>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  setOpenSidebar,
  clickEffect,
  clickSubMenuEffect,
  isOpen,
  setClickEffect,
  setClickSubMenuEffect,
  setCrossedState,
}) => {
  const [isDropdownOpen, toggleDropdown] = useToggle(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickAway(dropdownRef, () => toggleDropdown(false));

  const closeSidebar = (): void => {
    setOpenSidebar(false);
    setCrossedState(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={overlayVariants}
            aria-label="Close Sidebar Overlay"
            exit="closed"
            animate="open"
            initial="closed"
            transition={{
              duration: 0.3,
            }}
            className={cn(
              'fixed inset-0 z-40 block bg-black/30 lg:hidden',
              // 'backdrop-blur-xs',
            )}
            onClick={closeSidebar}
          />

          <motion.aside
            ref={dropdownRef}
            variants={sidebarVariants}
            aria-label="Sidebar Navigation"
            exit="closed"
            animate="open"
            initial="closed"
            transition={transition}
            className={cn(
              'fixed inset-0 left-0 z-[9999] block min-h-screen w-2/3 backdrop-blur-lg lg:hidden',
              'tw-border-themes-2 border-r-2 bg-white/80 dark:bg-gray-900/80',
              'fifth-themes tw-shadow shadow-lg',
            )}
          >
            <div className="flex h-full flex-col">
              <div className="tw-border-themes flex h-16 items-center justify-center border-b px-4">
                <Logo />
              </div>

              <button
                aria-label="Close Sidebar Button"
                className={cn(
                  'absolute top-1/2 -right-6 z-50 -translate-y-1/2 transform',
                  'rounded-full bg-white p-2 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700',
                  'text-gray-700 dark:text-gray-300',
                  'focus:ring-2 focus:ring-gray-500 focus:outline-hidden dark:focus:ring-gray-400',
                  'transition-all duration-300',
                )}
                onClick={closeSidebar}
              >
                <icons.MdArrowBackIosNew />
              </button>

              <div
                role="button"
                className="flex w-full cursor-pointer items-center justify-between gap-2 px-4 pt-4"
                onClick={toggleDropdown}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleDropdown();
                  }
                }}
                tabIndex={0}
              >
                <div className="flex items-center gap-2">
                  <Avatar />
                  <span className="truncate text-gray-700 dark:text-gray-300">
                    Xin chào, Tú Lưu!
                  </span>
                </div>
                <button aria-label="Toggle Dropdown">
                  <icons.IoSettingsSharp
                    className={cn(
                      isDropdownOpen ? 'rotate-180' : 'rotate-0',
                      'transition-transform duration-300',
                    )}
                  />
                </button>
              </div>

              <ProfileSubmenu isDropdownOpen={isDropdownOpen} />

              <SidebarContent
                clickEffect={clickEffect}
                setClickEffect={setClickEffect}
                clickSubMenuEffect={clickSubMenuEffect}
                setClickSubMenuEffect={setClickSubMenuEffect}
              />

              <SocialContact />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
