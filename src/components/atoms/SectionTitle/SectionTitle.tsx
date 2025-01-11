import { JSX } from 'react';

import { SeeAllBtn } from '../Button/SeeAllBtn';
import './sectionTitle.css';
interface SectionTitleProps {
  title: string | undefined;
  showSeeAll?: boolean;
  idLabel?: string | undefined;
  slug?: string | undefined;
}

const SectionTitle = ({
  idLabel,
  showSeeAll = false,
  title,
  slug,
}: SectionTitleProps): JSX.Element => {
  return (
    <div className="tw-flex border-b-bgdark/50 dark:border-b-bglight/20 mb-3 border-b-[0.5px]">
      <h2
        id={idLabel}
        className="sectionTitle-custom border-b-4 font-sans tracking-wider whitespace-nowrap capitalize"
      >
        {title || ''}
      </h2>
      {showSeeAll && <SeeAllBtn slug={slug} />}
    </div>
  );
};

export default SectionTitle;
