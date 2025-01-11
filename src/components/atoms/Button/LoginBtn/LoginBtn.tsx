'use client';
import React, { JSX, useRef } from 'react';

import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import {
  motion,
  useTransform,
  useMotionValue,
  useAnimationFrame,
  useMotionTemplate,
} from 'motion/react';

interface LoginBtnProps {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}
const LoginBtn: React.FC<LoginBtnProps> = ({
  as: Component = 'button',
  borderClassName,
  borderRadius = '1.75rem',
  children,
  className,
  containerClassName,
  duration,
  ...otherProps
}) => {
  const router = useRouter();

  return (
    <Component
      style={{
        borderRadius: borderRadius,
      }}
      className={cn(
        'relative overflow-hidden bg-transparent p-[1px] text-xl',
        'h-10 w-24 sm:h-12 sm:w-28',
        containerClassName,
      )}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        <MovingBorder duration={duration ?? 2000} rx="30%" ry="30%">
          <div
            className={cn(
              'h-28 w-28 outline-8 outline-amber-100',
              'bg-[radial-gradient(#f7418f_40%,transparent_60%)] opacity-[0.95] dark:bg-[radial-gradient(#1ceb34_40%,transparent_60%)]',
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>

      <div
        role="button"
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
        className={cn(
          'relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl',
          className,
        )}
        onClick={() => {
          router.push('/login');
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            router.push('/login');
          }
        }}
        tabIndex={0}
      >
        {children}
      </div>
    </Component>
  );
};

export default LoginBtn;

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}): JSX.Element => {
  const pathRef = useRef<SVGRectElement | null>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x,
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y,
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        width="100%"
        height="100%"
        className="absolute size-full"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <rect
          ref={pathRef}
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
        />
      </svg>
      <motion.div
        style={{
          display: 'inline-block',
          left: 0,
          position: 'absolute',
          top: 0,
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
