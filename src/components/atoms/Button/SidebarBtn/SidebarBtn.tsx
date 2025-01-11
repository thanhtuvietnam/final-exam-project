'use client';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface SidebarBtnProps {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  crossed: boolean;
  setCrossedState: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarBtn: React.FC<SidebarBtnProps> = ({
  openSidebar,
  setOpenSidebar,
  className,
  crossed,
  setCrossedState,
}) => {
  return (
    <button
      aria-expanded={crossed}
      className={cn(
        className,
        'bg-main-deepCerise-500 flex aspect-square h-fit flex-col items-center justify-center rounded-full px-2 py-1.5 dark:bg-cyan-500',
      )}
      onClick={() => {
        setCrossedState((e) => !e);
        setOpenSidebar(!openSidebar);
      }}
    >
      <motion.div
        initial={{
          translateY: '-3px',
        }}
        transition={{
          bounce: 0,
          duration: 0.1,
        }}
        animate={
          crossed
            ? {
                rotate: '45deg',
                translateY: '1px',
              }
            : {
                rotate: '0deg',
                translateY: '-3px',
              }
        }
        className="border-t-bgdark dark:border-t-bglight border-t-2"
        style={{
          width: '20px',
          transformOrigin: 'center',
        }}
      />
      <motion.div
        initial={{
          translateY: '3px',
        }}
        transition={{
          bounce: 0,
          duration: 0.1,
        }}
        animate={
          crossed
            ? {
                rotate: '-45deg',
                translateY: '-1px',
              }
            : {
                rotate: '0deg',
                scaleX: 1,
                translateY: '3px',
              }
        }
        className="border-t-bgdark dark:border-t-bglight border-t-2"
        style={{
          width: '20px',
          transformOrigin: 'center',
        }}
      />
    </button>
  );
};

export default SidebarBtn;
