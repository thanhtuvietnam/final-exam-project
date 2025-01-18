'use client';
import { JSX, useState } from 'react';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { pattayaFont } from '@/fonts/fonts';
import { useStore } from '@/lib/store/store';
import { Item } from '@/types/apiMovieDetails';
import { ChevronDown } from '@/components/atoms';
import useSplitContents from '@/hooks/useSplitContent';

const slideInFromAbove = {
  // hidden: { height: 'auto', opacity: 0, y: -10 },
  // visible: { height: 'auto', opacity: 1, y: 0 },
  // exit: { height: 0, opacity: 0, y: -21 },
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const FilmBoxContent = ({
  content,
  name,
  quality,
  lang,
}: Item): JSX.Element => {
  const { contentBlockWithoutTags } = useSplitContents(content);
  const [rotate, setRotate] = useState<boolean>(false);
  const episode = useStore((state) => state.episode);

  return (
    <section
      aria-labelledby="FilmBoxContent"
      className="tw-themes-3 rounded-lg px-2 py-1"
    >
      <h4
        id="FilmBoxContent"
        className={cn('tw-text-color-2 py-2 text-3xl', pattayaFont.className)}
      >
        {name} Tập: {episode} {quality} + {lang}
      </h4>
      <button
        className="tw-flex-1 tw-border-themes border-b pb-1"
        onClick={() => setRotate(!rotate)}
      >
        <ChevronDown boxfilmRotate={rotate} tab="Nội dung phim" />
      </button>

      {rotate && (
        <motion.p
          variants={slideInFromAbove}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="mt-3"
        >
          {contentBlockWithoutTags}
        </motion.p>
      )}
    </section>
  );
};

export default FilmBoxContent;
