'use client';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ProfileItems } from '@/lib/declarations/constant';

const UserSetting: React.FC = () => {
  return (
    <motion.div
      transition={{
        duration: 0.2,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.95,
        y: -10,
      }}
      initial={{
        opacity: 0,
        scale: 0.95,
        y: -10,
      }}
      className="absolute right-0 z-50 mt-2 w-40 rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
    >
      <ul className="py-1 text-center">
        {ProfileItems &&
          ProfileItems.map((item) => (
            <li key={item.id}>
              {item.path ? (
                <Link
                  href={`${item.path}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  className="gap-3 px-4 py-2 text-center text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  onClick={() => {
                    console.log('Logout...');
                  }}
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
      </ul>
    </motion.div>
  );
};

export default UserSetting;
