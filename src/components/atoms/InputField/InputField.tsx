'use client';
import React, { useRef, useState, useEffect } from 'react';

import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface InputFieldProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  placeholders?: string[];
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  animating?: boolean;
  canvasRef?: React.RefObject<HTMLCanvasElement>;
  inputRef?: React.RefObject<HTMLInputElement>;
  nameInput?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  nameInput,
  animating,
  canvasRef,
  inputRef,
  onChange,
  onKeyDown,
  placeholders,
  setValue,
  value,
}) => {
  const [currentPlaceholder, setCurrentPlaceholder] = useState<number>(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startAnimation = (): void => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % (placeholders?.length ?? 0));
    }, 3000);
  };
  const handleVisibilityChange = (): void => {
    if (document.visibilityState !== 'visible' && intervalRef.current) {
      clearInterval(intervalRef.current); // Clear the interval when the tab is not visible
      intervalRef.current = null;
    } else if (document.visibilityState === 'visible') {
      startAnimation(); // Restart the interval when the tab becomes visible
    }
  };

  useEffect(() => {
    startAnimation();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return (): void => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [placeholders]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={cn(
          'pointer-events-none absolute top-[20%] left-2 origin-top-left scale-50 transform pr-20 text-base invert filter sm:left-8 dark:invert-0',
          !animating ? 'opacity-0' : 'opacity-100',
        )}
      />
      <input
        ref={inputRef}
        className={cn(
          'relative z-50 h-full w-full border-none pr-20 pl-4 text-sm focus:ring-0 focus:outline-hidden sm:pl-10 sm:text-base',
          'text-bgdark dark:text-bglight bg-transparent',
          animating && 'text-transparent dark:text-transparent',
        )}
        onKeyDown={onKeyDown}
        onChange={(e) => {
          if (!animating) {
            if (setValue) {
              setValue(e.target.value);
            }
            if (onChange) {
              onChange(e);
            }
          }
        }}
        type="text"
        value={value}
        name={nameInput}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center rounded-full">
        <AnimatePresence mode="wait">
          {!value && (
            <motion.p
              exit={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              initial={{
                opacity: 0,
                y: 5,
              }}
              transition={{
                duration: 0.3,
                ease: 'linear',
              }}
              key={`current-placeholder-${currentPlaceholder}`}
              className="text-bgdark/50 dark:text-bglight/50 w-[calc(100%-2rem)] truncate pl-4 text-left text-sm font-normal sm:pl-12 sm:text-base"
            >
              {placeholders?.[currentPlaceholder] ?? ''}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default InputField;
