import { JSX } from 'react';

import { cn } from '@/lib/utils';

import './SideInfo.css';

import { icons } from '@/lib/declarations/icons';
import { SideInfoProps } from '@/types/commonTypes';

const SideInfo = ({
  actor,
  category,
  country,
  director,
  episodeCurrent,
  imdbScore,
  lang,
  newestEpisode,
  originalName,
  qua,
  time,
  title,
  view,
  year,
}: SideInfoProps): JSX.Element => {
  return (
    <section
      aria-labelledby="SideInfo"
      className={cn(
        'tw-text-color ml-5 flex w-2/3 flex-col gap-2',
        '**:data-css:tw-flex-1',
        '**:data-css:gap-3',
        '**:data-color:tw-text-color-3',
      )}
    >
      <h1 id="SideInfo" className="text-[20px] font-bold">
        {title}
      </h1>
      <p className="text-[13px]">{originalName}</p>

      <div data-css data-color>
        <p data-css>
          <icons.FaCalendarAlt />
          {year}
        </p>

        <p data-css>
          <icons.FaClock />
          {time}
        </p>

        <p data-css className="tw-text-color-2">
          <icons.FaImdb size={30} />
          {imdbScore}
        </p>
      </div>

      <p data-css>
        Đang phát:
        <span className="cardInfo-current rounded-xs p-1 font-medium">
          {episodeCurrent}
        </span>
      </p>

      <p>
        Tập mới nhất: <span className="tw-text-color-2">{newestEpisode}</span>
      </p>

      <p>
        Quốc gia: <span data-color>{country?.join(', ')}</span>
      </p>

      <p data-css className="font-bold">
        Chất lượng:
        <span className="cardInfo-current rounded-xs p-1 font-medium">
          {lang}+{qua}
        </span>
      </p>

      <p>
        Đạo diễn: <span data-color>{director}</span>
      </p>

      <p>
        Diễn Viên: <span data-color>{actor}</span>
      </p>

      <p>
        Thể loại: <span data-color>{category?.join(', ')}</span>
      </p>

      <p>
        Lượt xem: <span data-color>{view}</span>
      </p>
    </section>
  );
};

export default SideInfo;
