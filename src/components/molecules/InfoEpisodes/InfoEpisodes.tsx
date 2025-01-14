'use client';
import { JSX } from 'react';

import { cn } from '@/lib/utils';
import { icons } from '@/lib/declarations/icons';
// import { logger } from '@/lib/utils/misc/logger';
import { motion, AnimatePresence } from 'motion/react';
import { Episode, ServerDatum } from '@/types/apiMovieDetails';

const InfoEpisodes = ({ episodes }: { episodes: Episode }): JSX.Element => {
  return (
    <AnimatePresence>
      <motion.section
        exit={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="tw-themes-3 w-full rounded-lg"
      >
        {episodes &&
          episodes?.map((episode: Episode, index: number) => (
            <div key={index}>
              <h4
                key={episode?.server_name}
                className="tw-text-color-2 tw-border-themes mb-4 flex items-center gap-2 border-b-[0.5px] p-3 font-sans"
              >
                <icons.FaServer />
                {episode?.server_name}
              </h4>
              <ul className="tw-themes-3 flex flex-wrap items-center gap-1 rounded-lg p-1">
                {episode?.server_data?.map((serverData: ServerDatum) => (
                  <li
                    key={serverData?.slug}
                    style={{
                      width: '40px',
                      height: '40px',
                    }}
                    className={cn(
                      'tw-bounce-effect',
                      'tw-flex-1 tw-themes-4 justify-center rounded-lg text-center',
                    )}
                  >
                    {serverData?.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </motion.section>
    </AnimatePresence>
  );
};

// logger.info({
//   msg: 'InfoEpisodes Render',
//   fileName: 'InfoEpisodes.tsx',
//   action: 'Component Render',
//   details: {
//     renderingEpisodesList: true,
//   },
// });
export default InfoEpisodes;
