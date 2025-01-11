'use client';
import React, { JSX, useRef } from 'react';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useClickOutSide } from '@/hooks/index';
import { SubmenuListsProps } from '@/types/typenavbar';
import { motion, AnimatePresence } from 'motion/react';

import { Bridge } from '../Bridge';

const transition = {
  duration: 0.15,
  ease: 'easeInOut',
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Nub = ({ dir }: { dir: string | null }): JSX.Element => (
  <motion.span
    transition={transition}
    animate={{
      opacity: 1,
      x: 0,
    }}
    initial={{
      opacity: 0,
      x: dir === 'l' ? 100 : dir === 'r' ? -100 : 0,
    }}
    className="border-b-semantic-alizarin dark:border-b-semantic-springGreen absolute top-10 left-1/2 z-50 -translate-x-1/2 border-x-8 border-b-8 border-transparent"
  />
);

const SubmenuLists = ({
  dir,
  handleSetTabState,
  refLi,
  setSubMenuActiveId,
  subMenuActiveId,
  tab,
}: SubmenuListsProps): JSX.Element => {
  const ref = useRef(null);

  const handleClick = (id: string | null): void => {
    if (subMenuActiveId === id) {
      setSubMenuActiveId(null);
    } else {
      setSubMenuActiveId(id);
    }
  };

  useClickOutSide([ref, refLi], () => {
    handleSetTabState(null);
  });

  return (
    <AnimatePresence>
      <motion.ul
        ref={ref}
        transition={{
          staggerChildren: 0.05,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        initial={{
          x: dir === 'l' ? 100 : dir === 'r' ? -100 : 0,
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.25,
            ease: 'easeInOut',
          },
          x: dir === 'l' ? 100 : dir === 'r' ? -100 : 0,
        }}
        key="submenu"
        className={cn(
          'backdrop-blur-3xl',
          'overflow-hidden',
          'overflow-y-auto',
          'bg-bglight/30 dark:bg-bgdark/30',
          'absolute top-14 z-50 grid h-[28rem] w-[25rem] grid-cols-3 rounded-2xl border px-1 py-3 text-center shadow-md',
          'border-main-deepCerise-350 shadow-main-deepCerise-500/40 dark:border-main-summerSky-400 dark:shadow-cyan-600/50',
        )}
      >
        {tab?.subMenus?.map((subMenu, index) => (
          <motion.li
            variants={itemVariants}
            exit="exit"
            initial="hidden"
            animate="visible"
            transition={{
              ...transition,
              delay: index * 0.01,
            }}
            key={subMenu.id}
            className="rounded-lg select-none"
          >
            <Link
              href={`${subMenu.path}?page=1`}
              className={cn(
                'block w-full rounded-lg py-3',
                'text-bgdark/70 dark:text-bglight/70',
                'transition-all duration-200',
                subMenuActiveId === subMenu.id
                  ? 'text-bgdark dark:border-r-semantic-springGreen dark:text-bglight border-r-4 border-r-green-800 font-semibold'
                  : 'border-r-4 border-transparent',
                'hover:border-r-semantic-alizarin hover:text-bgdark dark:hover:border-r-main-deepCerise-500 dark:hover:text-bglight hover:border-r-4 hover:font-semibold',
              )}
              onClick={() => handleClick(subMenu.id)}
            >
              {subMenu.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      <Nub key="nub" dir={dir} />
      <Bridge key="bridge" className={'top-6 z-40 h-10 w-[25rem]'} />
    </AnimatePresence>
  );
};

export default SubmenuLists;
