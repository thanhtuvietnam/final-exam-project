'use client';
import React, { useState, useEffect } from 'react';

import { useGetMultiMovieLists } from '@/api/endpoints/customhook';
import { FilmSections, TrendingSection } from '@/components/molecules';
import { SectionFilmOutlineSkeletonSkeleton } from '@/components/atoms/Skeleton';

const SectionFilmOutline: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const { data, status } = useGetMultiMovieLists();

  // useEffect(() => {
  //   if (data) {
  //     setLoading(true);
  //   }
  // }, [data]);

  // if (loading) return <SectionFilmOutlineSkeletonSkeleton />;

  // if (status.includes('pending')) return <p>SectionOutline Loading...</p>;
  if (status.includes('pending')) return <SectionFilmOutlineSkeletonSkeleton />;
  if (status.includes('error')) return <p>Error</p>;

  return (
    <div className="flex w-full flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-3">
      <ul className="w-full grow space-y-4 lg:w-2/3">
        {data &&
          data?.map((item, index) => (
            <li key={index} className="list-none">
              <FilmSections
                sectionData={item}
                cardSlice={2}
                title={item?.titlePage}
              />
            </li>
          ))}
      </ul>
      <TrendingSection />
    </div>
  );
};

export default SectionFilmOutline;
