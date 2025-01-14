import { notFound } from 'next/navigation';
import { ApiResponse } from '@/types/apiResponse';
import { menuItems } from '@/lib/declarations/data';
import {
  queryOptions,
  UseQueryOptions,
  keepPreviousData,
} from '@tanstack/react-query';

import { getMovieLists, getMovieDetails } from './fetchData';

export const categoryListOptions: UseQueryOptions<
  ApiResponse,
  Error,
  ApiResponse['data'],
  [string, string, number]
>[] = menuItems.map(({ category, param, page }) =>
  queryOptions({
    queryKey: [category || '', param || '', page || 1],
    queryFn: () => getMovieLists(category || '', param || '', page || 1),
    staleTime: Infinity,
    // gcTime: 5 * 1,
    retry: (failureCount, error): boolean => {
      if ((error as Error).message.includes('404')) return false;

      return failureCount < 3;
    },
    select: (data) => data?.data,
  }),
);
export const detailMovieOptions = (slug: string) => {
  const detailQuery = queryOptions({
    queryKey: ['phim', slug],
    queryFn: () => getMovieDetails(slug),
  });

  return detailQuery;
};
