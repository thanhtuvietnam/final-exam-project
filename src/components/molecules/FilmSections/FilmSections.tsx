import { Data } from '@/types/apiResponse';
import { SectionCards, SectionTitle } from '@/components/atoms';

interface FilmSectionsProps {
  index?: number;
  title: string | undefined;
  showSeeAll?: boolean;
  sectionData: Data | undefined;
  cardSlice: number;
  setPage?: React.Dispatch<React.SetStateAction<number | 1>>;
  theme?: string;
}

const FilmSections: React.FC<FilmSectionsProps> = ({
  sectionData,
  showSeeAll = true,
  title,
  cardSlice,
  // theme,
}) => {
  const halfItems = sectionData?.items?.slice(
    0,
    Math.ceil(sectionData.items.length / cardSlice),
  );

  return (
    <section aria-labelledby={title}>
      <SectionTitle
        idLabel={title}
        showSeeAll={showSeeAll}
        title={title}
        slug={sectionData?.breadCrumb[0]?.slug}
      />

      <ul className="grid grid-cols-4">
        {halfItems?.map((item, index) => (
          <SectionCards
            moviedata={item}
            // theme={theme}
            idx={index}
            key={item._id}
          />
        ))}
      </ul>
    </section>
  );
};

export default FilmSections;
