import { notFound } from 'next/navigation';
import { ApiResponse } from '@/types/apiResponse';
import { menuItems } from '@/lib/declarations/data';
import {
  queryOptions,
  UseQueryOptions,
  keepPreviousData,
} from '@tanstack/react-query';
import {
  movieCategories,
  quocGiaSubmenus,
  theLoaiSubmenus,
} from '@/lib/declarations/constant';

import { getMovieLists } from './fetchData';

// export const movieListsOptions: UseQueryOptions<ApiResponse, Error, ApiResponse['data'], [string, number]>[] = movieCategories.map(({ param, page }) =>
//   queryOptions({
//     queryKey: [param, page],
//     queryFn: () => getMovieLists(param, page),
//     staleTime: 60 * 1000 * 60,
//     retry: (failureCount, error): boolean => {
//       if (error.message.includes('404')) return false;
//
//       return failureCount < 2;
//     },
//     select: (data) => data?.data,
//   }),
// );
// // New theLoaiSubmenus query options
// export const theLoaiListsOptions: UseQueryOptions<ApiResponse, Error, ApiResponse['data'], [string, number]>[] = theLoaiSubmenus.map(({ param, page }) =>
//   queryOptions({
//     queryKey: [`/${param}`, page],
//     queryFn: () => getMovieLists(param, page),
//     staleTime: Infinity,
//     retry: (failureCount, error): boolean => {
//       if (error.message.includes('404')) return false;
//
//       return failureCount < 2;
//     },
//     select: (data) => data?.data,
//   }),
// );
//
// // New quocGiaSubmenus query options
// export const quocGiaListsOptions: UseQueryOptions<ApiResponse, Error, ApiResponse['data'], [string, number]>[] = quocGiaSubmenus.map(({ param, page }) =>
//   queryOptions({
//     queryKey: [`/${param}`, page],
//     queryFn: () => getMovieLists(param, page),
//     staleTime: Infinity,
//     retry: (failureCount, error): boolean => {
//       if (error.message.includes('404')) return false;
//
//       return failureCount < 2;
//     },
//     select: (data) => data?.data,
//   }),
// );
//
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
