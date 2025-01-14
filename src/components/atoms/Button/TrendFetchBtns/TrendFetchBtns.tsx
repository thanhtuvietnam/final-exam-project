'use client';
import { useState } from 'react';

import './trendFetchBtns.css';

import { cn } from '@/lib/utils';

const buttonLists = ['Ngày', 'Tuần', 'Tháng'];

const TrendFetchBtns = (): JSX.Element => {
  const [activeBtn, setActiveBtn] = useState<number>(0);

  return (
    <div className="tw-flex-1 absolute top-5 right-0">
      {buttonLists.map((button, index) => (
        <button
          key={index}
          className={cn(
            'trending-button',
            activeBtn === index ? 'activetrending' : '',
          )}
          onClick={() => setActiveBtn(index)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default TrendFetchBtns;
