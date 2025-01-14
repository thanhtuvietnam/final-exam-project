import { useDebugValue } from 'react';

import { menuItems } from '@/lib/declarations/data';
import { Data, ApiResponse } from '@/types/apiResponse';
import { movieCategories } from '@/lib/declarations/constant';
import {
  useQuery,
  useQueries,
  UseQueryResult,
  keepPreviousData,
} from '@tanstack/react-query';

import { getMovieLists, getMovieDetails } from './fetchData';

// hook
export const useGetMovieLists = (
  category: string,
  param: string,
  page: number,
): UseQueryResult<Data, Error> => {
  const query = useQuery({
    queryKey: [category, param, page],
    queryFn: () => getMovieLists(category, param, page),
    staleTime: 60 * 1000 * 60,
    // gcTime: 5 * 1,
    select: (data) => data?.data,
    // placeholderData: keepPreviousData,
    retry: (failureCount, error): boolean => {
      if ((error as Error).message.includes('404')) return false;

      return failureCount < 3;
    },
  });

  useDebugValue(`${param} - Page ${page} (${query.status})`);

  return query;
};

export const useGetMultiMovieLists = (): {
  data: (Data | undefined)[];
  status: ('pending' | 'error' | 'success')[];
} => {
  const filterCagegories = menuItems.filter(
    (item) => item.category === 'danh-sach',
  );

  const sectionCategories = filterCagegories.filter(
    (item) => item.param !== 'phim-moi-cap-nhat',
  );

  const queries = useQueries({
    queries: sectionCategories?.map((movieCategory) => ({
      queryKey: [
        `${movieCategory.category}`,
        `${movieCategory.param}`,
        movieCategory.page,
      ],
      queryFn: (): Promise<ApiResponse> =>
        getMovieLists(
          movieCategory.category || '',
          movieCategory.param || '',
          movieCategory.page || 1,
        ),

      staleTime: 60 * 1000 * 60,

      // gcTime: 5 * 1,
    })),

    combine: (results) => {
      // console.log(results);
      return {
        data: results.map((result) => result?.data?.data),
        status: results.map((result) => result?.status),
      };
    },
  });

  return queries;
};
export const useGetMovieDetail = (slug: string) => {
  const queryDetail = useQuery({
    queryKey: ['phim', slug],
    queryFn: () => getMovieDetails(slug),
    select: (data) => data?.data,
  });
  return queryDetail;
};
