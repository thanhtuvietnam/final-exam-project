import react from 'react';

import { IMG_URL } from '@/lib/declarations/constant';
// 'use client';
//

const FilmBoxPlayer = ({ filmUrl }: { filmUrl: string }): react.JSX.Element => {
  const thumbUrl = 'chuyen-tinh-anh-chi-em-toi-ban-trung-poster.jpg';
  const poster = `${IMG_URL}/${thumbUrl}`;

  return (
    <div
      id="process-video"
      className="relative h-0 overflow-hidden rounded-xl pt-[35px] pb-[56.25%]"
    >
      {/* <div */}
      {/*   style={{ */}
      {/*     backgroundImage: `url(${poster})`, */}
      {/*   }} */}
      {/*   className="absolute inset-0 z-10 bg-cover bg-center opacity-100 transition-all duration-300 ease-in" */}
      {/* /> */}

      <iframe
        src={filmUrl || undefined}
        id="embed"
        className="absolute top-0 left-0 h-full w-full"
        allowFullScreen
        // mozAllowFullScreen
        // webkitAllowFullScreen
      />
    </div>
  );
};
export default FilmBoxPlayer;
