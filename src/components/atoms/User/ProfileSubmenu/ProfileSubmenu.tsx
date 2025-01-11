'use client';

import { JSX } from 'react';

import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ProfileItems } from '@/lib/declarations/constant';

// Variants for Dropdown Container
const dropdownVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: -10,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};

// Variants for list
const listVariants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
    x: -20,
  },
  visible: {
    height: 'auto',
    opacity: 1,
  },
};

// Variants for each item in the list
const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

interface ProfileSubmenuProps {
  isDropdownOpen: boolean;
}

const ProfileSubmenu = ({
  isDropdownOpen,
}: ProfileSubmenuProps): JSX.Element => {
  return (
    <AnimatePresence>
      {isDropdownOpen && (
        <motion.div
          variants={dropdownVariants}
          exit="exit"
          initial="hidden"
          animate="visible"
          // exit={{ opacity: 0, scale: 0.95, x: -20 }}
          transition={{
            duration: 0.2,
            ease: 'easeInOut',
          }}
          key="modal"
          className="flex flex-col gap-2 px-4 pt-1 font-sans"
        >
          <motion.ul
            variants={listVariants}
            exit="exit"
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
            }}
            key="profile-submenu"
            className="mt-1 space-y-1 pl-4"
          >
            {ProfileItems &&
              ProfileItems.map((item, index) => (
                <motion.li
                  variants={itemVariants}
                  exit="exit"
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: index * 0.05,
                    duration: 0.2,
                    ease: 'easeInOut',
                  }}
                  key={item.id}
                  className="rounded-2xl"
                >
                  {item.path ? (
                    <Link
                      href={item.path}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                      {item.icon && <item.icon />}
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className="flex w-full items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                      onClick={() => {
                        console.log('Logout...');
                      }}
                    >
                      {item.icon && <item.icon />}
                      {item.label}
                    </button>
                  )}
                </motion.li>
              ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileSubmenu;
