'use client';
import { JSX, useEffect } from 'react';

import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store/store';
// import { useTheme } from 'next-themes';
import { useGetMovieLists } from '@/api/endpoints/customhook';
import { usePathname, useSearchParams } from 'next/navigation';
import { MovieTemplateSkeleton } from '@/components/atoms/Skeleton';
import { FilmSections, PageController } from '@/components/molecules';
// import FilmSectionLoading from '@/app/(main)/[category]/[param]/@FilmSections/loading';

const MoviesTemplate = ({
  category,
  param,
}: {
  category: string;
  param: string;
}): JSX.Element => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const [loading, setLoading] = useState<boolean>(false);
  const { currentPage, setCurrentPage, previousCategory, setPreviousCategory } =
    useStore();

  const handlePageChange = (p: number): void => {
    setCurrentPage(p);
    // setLoading(true);
  };

  useEffect(() => {
    if (param !== previousCategory) {
      setCurrentPage(1);
      setPreviousCategory(param);

      const params = new URLSearchParams(searchParams);
      params.set('page', '1');
      router.push(pathName + '?' + params.toString()); // or router.replace()
    }
  }, [
    param,
    previousCategory,
    setCurrentPage,
    setPreviousCategory,
    pathName,
    router,
    searchParams,
  ]);

  const { data, status } = useGetMovieLists(category, param, currentPage);
  // if (data) return <Loading />;
  // const datalength = data && data?.items.length;
  if (status === 'pending') return <MovieTemplateSkeleton />;
  if (status === 'error') return <div>Error</div>;
  // if (loading) return <Loading />;

  const totalItems = (data && data?.params?.pagination?.totalItems) || 0;
  const itemsPerPage = 24;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <>
      <FilmSections
        sectionData={data}
        showSeeAll={false}
        cardSlice={1}
        title={data?.titlePage}
      />
      <PageController
        totalPages={totalPages}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};

export default MoviesTemplate;
