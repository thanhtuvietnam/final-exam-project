'use client';
import React from 'react';

import { useTheme } from 'next-themes';
// import { useTheme } from '@/components/providers/ThemeProvider';
import { icons } from '@/lib/declarations/icons';

const ThemeToggleButton: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <button
        onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      >
        {resolvedTheme === 'dark' ? (
          <icons.IoSunny size={30} />
        ) : (
          <icons.IoMoon size={30} />
        )}
      </button>
    </>
  );
};

export default ThemeToggleButton;
