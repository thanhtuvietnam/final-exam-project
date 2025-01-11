import { JSX } from 'react';

import { cn } from '@/lib/utils';
import { icons } from '@/lib/declarations/icons';

interface ChevronDownProps {
  tab: string;
  rotate?: string | null;
  className?: string;
  size?: number;
}
const ChevronDown = ({
  className,
  rotate,
  size,
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
        )}
        size={size}
      />
    </span>
  );
};

export default ChevronDown;
