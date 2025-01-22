'use client';
import { JSX } from 'react';

import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store/store';
import { icons } from '@/lib/declarations/icons';

const SeeAllBtn = ({
  slug,
  clickEffect,
}: {
  slug?: string | undefined;
  clickEffect?: string | undefined;
}): JSX.Element => {
  const router = useRouter();
  const { currentPage, setCurrentPage, setNavClickedEffect } = useStore();

  return (
    <button
      // href={`${slug}?page=1`}
      className="group cursor-pointer rounded-xl border-4 border-violet-800/0 bg-transparent p-1 transition-all duration-500 hover:border-violet-800"
      onClick={() => {
        setCurrentPage(1);
        router.push(`${slug}?page=${currentPage}`);
        setNavClickedEffect(clickEffect ?? 'seeAll');
      }}
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
    </button>
  );
};

export default SeeAllBtn;
