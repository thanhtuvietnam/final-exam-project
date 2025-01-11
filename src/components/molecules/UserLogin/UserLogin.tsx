'use client';
import { useRef } from 'react';
import { useToggle, useClickAway } from 'react-use';

import { cn } from '@/lib/utils';
import { Avatar, LoginBtn } from '@/components/atoms';

const UserLogin: React.FC = () => {
  // const login = true;
  const login = false;
  const ref = useRef<HTMLDivElement | null>(null);

  const [isDropdownOpen, toggleDropdown] = useToggle(false);

  useClickAway(ref, () => {
    toggleDropdown(false);
  });

  return (
    <>
      {login ? (
        <Avatar
          ref={ref}
          isDropdownOpen={isDropdownOpen}
          toggleDropdown={() => toggleDropdown(true)}
        />
      ) : (
        <LoginBtn
          className={cn(
            'border-main-summerSky-600 bg-main-summerSky-450 text-bgdark dark:bg-main-darkGreen-700 dark:text-bglight dark:border-slate-800',
            'tw-bounce-effect font-mono',
          )}
          borderRadius="1.75rem"
        >
          Login
        </LoginBtn>
      )}
    </>
  );
};

export default UserLogin;
