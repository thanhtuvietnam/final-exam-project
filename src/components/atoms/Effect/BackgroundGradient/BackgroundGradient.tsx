'use client';
import React, { JSX } from 'react';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface BackgroundGradientProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}

const BackgroundGradient = ({
  animate = true,
  children,
  className,
  containerClassName,
}: BackgroundGradientProps): JSX.Element => {
  const variants = {
    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
    },
    initial: {
      backgroundPosition: '0 50%',
    },
  };

  return (
    <div className={cn('group/bgGradient relative p-0.5', containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        animate={animate ? 'animate' : undefined}
        initial={animate ? 'initial' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className={cn(
          'absolute inset-0 z-[1] opacity-60 blur-xl transition duration-500 will-change-transform group-hover/bgGradient:opacity-100',

          'dark:bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]',

          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#d0187d,transparent),radial-gradient(circle_farthest-side_at_100%_0,#315cc7,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#030a1b,transparent),radial-gradient(circle_farthest-side_at_0_0,#010101,#141316)]',
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        animate={animate ? 'animate' : undefined}
        initial={animate ? 'initial' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className={cn(
          'absolute inset-0 z-[1] rounded-3xl will-change-transform',
          'dark:bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#d0187d,transparent),radial-gradient(circle_farthest-side_at_100%_0,#315cc7,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#010101,#141316)]',
        )}
      />

      <div className={cn('relative z-10', className)}>{children}</div>
    </div>
  );
};

export default BackgroundGradient;
