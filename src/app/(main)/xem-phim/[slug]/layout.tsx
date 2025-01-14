import { JSX } from 'react';

import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { Filter } from '@/components/molecules';

export default function XemphimLayout({
  FilmWatchSection,
  RecommendMovies,
  TrendingSection,
}: {
  FilmWatchSection: React.ReactNode;
  RecommendMovies: React.ReactNode;
  TrendingSection: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <Filter />
      <div
        className={cn(
          'border-t-bgdark/50 dark:border-t-bglight/50',
          'flex w-full flex-col space-y-5 border-t lg:flex-row lg:space-y-0 lg:space-x-3',
        )}
      >
        <div className="mt-3 w-full grow space-y-4 lg:w-2/3">
          {FilmWatchSection}
          {RecommendMovies}
        </div>
        {TrendingSection}
      </div>
    </>
  );
}
