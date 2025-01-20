'use client';
import React, { JSX, useState } from 'react';

// import TrendingSectionSkeleton from '@/components/atoms/Skeleton/TrendingSectionSkeleton';
import { TrendingSectionSkeleton } from '@/components/atoms/Skeleton';
import {
  SectionTitle,
  TrendingCard,
  TrendFetchBtns,
  CardHoverEffect,
} from '@/components/atoms';

const TrendingSection = (): JSX.Element => {
  const [variable, setVariable] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVariable((prev) => prev + 1);
    }, 5000);
  };
  // if (loading) return <TrendingSectionSkeleton />;
  if (loading) return <TrendingSectionSkeleton />;

  return (
    <section
      aria-labelledby="trending-section"
      className="relative w-full grow-0 lg:w-1/3"
    >
      <SectionTitle
        idLabel={'trending-section'}
        showSeeAll={false}
        title={'Trending Now'}
      />
      <TrendFetchBtns />
      <button onClick={handleClick}>fetch Data</button>
      <p>Value is: {variable}</p>

      <ul className="">
        {[...Array(20)].map((_, index) => (
          <li key={index}>
            <CardHoverEffect idx={index}>
              <TrendingCard />
            </CardHoverEffect>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrendingSection;
