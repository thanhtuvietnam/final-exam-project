import { JSX } from 'react';

import { cn } from '@/lib/utils';
import { icons } from '@/lib/declarations/icons';

interface ChevronDownProps {
  boxfilmRotate?: boolean;
  tab?: string;
  rotate?: string | null;
  className?: string;
  size?: string | number;
}
const ChevronDown = ({
  boxfilmRotate,
  className,
  rotate,
  size = 24,
  tab,
}: ChevronDownProps): JSX.Element => {
  return (
    <span className={cn('tw-flex gap-0.5 px-2')}>
      {tab}
      <icons.FiChevronDown
        className={cn(
          className,
          'transition-tarnsform duration-200',
          rotate === tab ? 'rotate-180 transform' : '',
          boxfilmRotate ? 'rotate-180 transform' : '',
        )}
        size={size}
      />
    </span>
  );
};

export default ChevronDown;
