import { JSX } from 'react';

import '@/styles/globals.css';
import { menuItems } from '@/lib/declarations/data';

export async function generateStaticParams() {
  const filterMenuItems = menuItems.filter(
    (item) => item.param !== 'phim-moi-cap-nhat',
  );
  return filterMenuItems.map((item) => ({
    category: item?.category,
    param: item?.param,
  }));
}

export default function CategoryLayout({
  FilmSections,
  TrendingSection,
}: {
  children: React.ReactNode;
  FilmSections: React.ReactNode;
  TrendingSection: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex w-full flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-3">
      <div className="w-full grow space-y-4 lg:w-2/3">{FilmSections}</div>
      {TrendingSection}
    </div>
  );
}
