'use client';
import { JSX, useState } from 'react';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { tabs } from '@/lib/declarations/constant';
import { motion, AnimatePresence } from 'motion/react';
import { SidebarContentProps } from '@/types/typenavbar';

// const listVariants = {
//   hidden: { opacity: 0, transition: { when: 'afterChildren' } },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, when: 'beforeChildren' },
//   },
// };

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  exit: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const sublistVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

const SidebarContent = ({
  clickEffect,
  clickSubMenuEffect,
  setClickEffect,
  setClickSubMenuEffect,
}: SidebarContentProps): JSX.Element => {
  const [openSubMenus, setOpenSubMenus] = useState<string[]>([]);

  const toggleSubMenu = (id: string): void =>
    setOpenSubMenus((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );

  const handleClick = (id: string): void => setClickEffect(id);

  return (
    <nav
      aria-label="Sidebar Navigation"
      className="flex-1 overflow-y-auto py-4 font-sans"
    >
      <ul className="px-3">
        {tabs.map((tab) => (
          <li key={tab.id} className="tw-text-blur hover:tw-text-color">
            {tab.subMenus ? (
              <>
                <button
                  className={cn(
                    'tw-flex w-full gap-3 rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-gray-100 hover:font-semibold dark:hover:bg-gray-800',
                    clickEffect === tab.id
                      ? 'tw-text-color bg-gray-100 font-semibold dark:bg-gray-800'
                      : '',
                  )}
                  onClick={() => {
                    toggleSubMenu(tab.id);
                    handleClick(tab.id);
                  }}
                >
                  <div className="flex flex-1 gap-3">
                    {tab.icon && (
                      <tab.icon
                        className={cn(
                          clickEffect === tab.id &&
                            'text-yellow-600 dark:text-yellow-500',
                        )}
                      />
                    )}
                    {tab.label}
                  </div>
                  <span>{openSubMenus.includes(tab.id) ? '-' : '+'}</span>
                </button>
                <AnimatePresence>
                  {openSubMenus.includes(tab.id) && (
                    <motion.ul
                      variants={sublistVariants}
                      aria-label="Sidebar-Submenu"
                      exit="hidden"
                      initial="hidden"
                      animate="visible"
                      className="mt-2 space-y-1 px-6"
                    >
                      {tab.subMenus.map((sub) => (
                        <motion.li
                          variants={itemVariants}
                          key={sub.id}
                          onClick={() => setClickSubMenuEffect(sub.id)}
                        >
                          <Link
                            href={sub.path || '#'}
                            className={cn(
                              'flex items-center gap-3 rounded-lg px-4 py-2 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700',
                              clickSubMenuEffect === sub.id
                                ? 'tw-text-color bg-gray-100 font-semibold dark:bg-gray-800'
                                : '',
                            )}
                          >
                            {sub.label}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <motion.div variants={itemVariants}>
                <Link
                  href={tab.path || '#'}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-gray-100 hover:font-semibold dark:hover:bg-gray-800',
                    clickEffect === tab.id
                      ? 'tw-text-color bg-gray-100 font-semibold dark:bg-gray-800'
                      : '',
                  )}
                  onClick={() => {
                    setOpenSubMenus([]);
                    setClickSubMenuEffect(null);
                    handleClick(tab.id);
                  }}
                >
                  {tab.icon && (
                    <tab.icon
                      className={cn(
                        clickEffect === tab.id &&
                          'text-yellow-600 dark:text-yellow-500',
                      )}
                    />
                  )}
                  {tab.label}
                </Link>
              </motion.div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarContent;
