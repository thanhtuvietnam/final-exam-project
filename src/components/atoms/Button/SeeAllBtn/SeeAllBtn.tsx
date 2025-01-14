import { JSX } from 'react';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { icons } from '@/lib/declarations/icons';

const SeeAllBtn = ({ slug }: { slug?: string | undefined }): JSX.Element => {
  return (
    <Link
      href={`${slug}?page=1`}
      className="group cursor-pointer rounded-xl border-4 border-violet-800/0 bg-transparent p-1 transition-all duration-500 hover:border-violet-800"
    >
      <div className="relative flex items-center justify-center gap-4 overflow-hidden rounded-lg bg-violet-800 px-6 py-1 font-bold text-white">
        Xem tat ca
        <icons.GoArrowRight className="transition-all group-hover:translate-x-2 group-hover:scale-125" />
        <div
          className={cn(
            'absolute top-0 -left-16 h-full w-12 scale-y-150 rotate-[30deg] bg-white/10 transition-all duration-700 group-hover:left-[calc(100%+1rem)]',
          )}
        />
      </div>
    </Link>
  );
};

export default SeeAllBtn;
