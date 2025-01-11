'use client';
import { JSX } from 'react';

import { motion } from 'motion/react';
import { Position } from '@/types/typenavbar';

const Cursor = ({ position }: { position: Position }): JSX.Element => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="bg-bgdark dark:bg-bglight absolute z-0 h-12 rounded-full backdrop-blur-3xl"
    />
  );
};
export default Cursor;
