import { cn } from '@/lib/utils';
import { BlockInfoSection } from '@/components/organisms';
import {
  Filter,
  RecommendMovies,
  TrendingSection,
} from '@/components/molecules';

const InfoFilmTemplate = (): JSX.Element => {
  return (
    <>
      <Filter />
      <div
        className={cn(
          'border-t-bgdark/50 dark:border-t-bglight/50',
          'flex w-full flex-col space-y-5 border-t lg:flex-row lg:space-y-0 lg:space-x-3',
        )}
      >
        <div className="mt-3 w-full grow space-y-4 lg:w-2/3">
          <BlockInfoSection />
          <RecommendMovies />
        </div>
        <TrendingSection />
      </div>
    </>
  );
};

export default InfoFilmTemplate;
