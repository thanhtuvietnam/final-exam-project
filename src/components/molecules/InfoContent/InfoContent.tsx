'use client';

import { JSX, useState } from 'react';

import { motion } from 'motion/react';
import { Item } from '@/types/apiMovieDetails';
import { icons } from '@/lib/declarations/icons';
import { SectionTitle } from '@/components/atoms';
import useSplitContents from '@/hooks/useSplitContent';

const slideInFromAbove = {
  hidden: { height: 'auto', opacity: 0, y: -10 },
  visible: { height: 'auto', opacity: 1, y: 0 },
  exit: { height: 0, opacity: 0, y: -21 },
};

const InfoContent = ({ content }: Item): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { contentBlockWithoutTags, contentBlockSplitted } =
    useSplitContents(content);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <section
      aria-labelledby="infoContent"
      className="tw-themes-3 rounded-lg px-2"
    >
      <SectionTitle idLabel="infoContent" title="Nội dung phim" />

      {isExpanded ? (
        <motion.p
          variants={slideInFromAbove}
          initial="hidden"
          animate="visible"
          // exit={{ height: 0, opacity: 0, y: -20 }}
          // animate={{ height: 'auto', opacity: 1, y: 0 }}
          // initial={{ height: 'auto', opacity: 0, y: -10 }}
          transition={{
            duration: 0.4,
            // ease: 'easeInOut',
          }}
          className="mt-2 origin-top"
        >
          {contentBlockWithoutTags}
        </motion.p>
      ) : (
        <p>{`${contentBlockSplitted[0]}...`}</p>
      )}

      <button
        className="button-two tw-flex tw-bounce-effect mt-2 gap-2 rounded-md px-2 py-1"
        onClick={toggleExpand}
      >
        {isExpanded ? <icons.AiOutlineShrink /> : <icons.GrExpand />}
        {isExpanded ? 'Thu gọn...' : 'Mở rộng...'}
      </button>
    </section>
  );
};

export default InfoContent;
