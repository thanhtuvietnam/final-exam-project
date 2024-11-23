import {
  CardHoverEffect,
  SectionTitle,
  TrendFetchBtns,
  TrendingCard,
} from '@/components/atoms';

const TrendingSection: React.FC = () => {
  return (
    <section
      aria-labelledby="trending-section"
      className="relative w-full flex-grow-0 lg:w-1/3"
    >
      <SectionTitle
        showSeeAll={false}
        title={'Trending Now'}
        idLabel={'trending-section'}
      />
      <TrendFetchBtns />

      <ul className="">
        {[...Array(20)].map((_, index) => (
          <li key={index} className="list-none">
            <CardHoverEffect idx={index}>
              <TrendingCard />
            </CardHoverEffect>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrendingSection;