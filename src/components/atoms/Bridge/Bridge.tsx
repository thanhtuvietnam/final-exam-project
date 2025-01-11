import { JSX } from 'react';

import { cn } from '@/lib/utils';
import { Base } from '@/types/commonTypes';

const Bridge = ({ className }: Base): JSX.Element => {
  return <div className={cn('absolute bg-transparent', className)} />;
};

export default Bridge;
