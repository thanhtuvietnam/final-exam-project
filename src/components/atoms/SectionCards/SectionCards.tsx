import { JSX } from 'react';

import { Item } from '@/types/apiResponse';

import { Card } from '../Card';
import { CardHoverEffect } from '../Effect/CardHoverEffect';
import { BackgroundGradient } from '../Effect/BackgroundGradient';

const SectionCards = ({
  idx = 0,
  moviedata,
  theme,
}: {
  idx: number;
  moviedata: Item;
  theme?: string;
}): JSX.Element => {
  return (
    <li className="list-none">
      <CardHoverEffect idx={idx}>
        <BackgroundGradient>
          <Card movieData={moviedata} />
        </BackgroundGradient>
      </CardHoverEffect>
    </li>
  );
};

export default SectionCards;
