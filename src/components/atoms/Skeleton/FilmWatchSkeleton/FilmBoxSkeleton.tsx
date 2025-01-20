import { JSX } from 'react';

const FilmBoxSkeleton = (): JSX.Element => {
  return (
    <div className="relative h-0 overflow-hidden rounded-xl pt-[35px] pb-[56.25%]">
      <div className="absolute inset-0">
        <div className="skeleton h-full w-full" />
      </div>
    </div>
  );
};

export default FilmBoxSkeleton;
