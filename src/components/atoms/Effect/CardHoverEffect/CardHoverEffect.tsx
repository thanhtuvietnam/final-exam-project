'use client';
import { JSX, useState } from 'react';

import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface CardHoverEffectProps {
  idx: number;
  className?: string;
  children: React.ReactNode;
}

const CardHoverEffect = ({
  idx,
  children,
  className,
}: CardHoverEffectProps): JSX.Element => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className="group relative block size-full p-2"
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.15,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.2,
                duration: 0.15,
              },
            }}
            className={cn(
              className,
              'bg-main-deepCerise-500/[0.2] dark:bg-main-aliceBlue-700/[0.2] absolute inset-0 block h-full w-full rounded-3xl',
            )}
            layoutId="hoverBackground"
          />
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};

export default CardHoverEffect;
