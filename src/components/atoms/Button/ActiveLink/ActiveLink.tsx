import React from 'react';

import { cn } from '@/lib/utils';

interface ActiveLinkProps {
  onClick: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  children: React.ReactNode;
  className?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

const ActiveLink: React.FC<ActiveLinkProps> = React.memo(
  ({
    onClick,
    disabled = false,
    ariaLabel,
    children,
    className = '',
    onKeyDown,
  }) => {
    return (
      <button
        aria-label={ariaLabel}
        className={cn(
          'hover:scale-105 hover:bg-linear-to-r hover:from-indigo-500 hover:to-purple-600',

          'rounded-md border border-indigo-500 bg-white px-4 py-2 text-[#030a1b] shadow-lg transition-transform duration-200 ease-in-out dark:border-indigo-700 dark:bg-transparent dark:text-[#ebfaff]',

          'focus:ring-4 focus:ring-indigo-300 focus:outline-hidden',

          'active:bg-linear-to-r active:from-indigo-500 active:to-purple-600 dark:active:from-indigo-700 dark:active:to-purple-800',
          className,
        )}
        onClick={onClick}
        onKeyDown={onKeyDown}
        disabled={disabled}
      >
        {children}
      </button>
    );
  },
);

ActiveLink.displayName = 'ActiveLink';
export default ActiveLink;
