import { SideInfo, BackgroundGradient } from '@/components/atoms';
import {
  CardInfo,
  InfoTable,
  InfoContent,
  InfoEpisodes,
} from '@/components/molecules';

const BlockInfoSection: React.FC = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="w-1/3">
          <BackgroundGradient>
            <CardInfo />
          </BackgroundGradient>
        </div>
        <SideInfo
          actor={'tuluu'}
          imdbScore={9.5}
          country={['USA']}
          director={'tuluu'}
          newestEpisode={'1'}
          originalName={'tuluu'}
          episodeCurrent={'Hoan tat (1/1)'}
          category={['Action', 'Adventure']}
          qua={'HD'}
          view={100}
          lang={'vi'}
          year={2021}
          time={'1h 30m'}
          title={'tuluu'}
        />
      </div>
      <InfoEpisodes />
      <InfoContent />
      <InfoTable />
    </>
  );
};

export default BlockInfoSection;
