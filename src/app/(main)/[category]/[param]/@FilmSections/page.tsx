import { MoviesTemplate } from '@/components/templates';
// import { menuItems } from '@/lib/declarations/data';
// import { Suspense } from 'react';
//
// import Loading from '../loading';

// export async function generateStaticParams() {
//   const filterMenuItems = menuItems.filter(
//     (item) => item.param !== 'phim-moi-cap-nhat',
//   );
//   return filterMenuItems.map((item) => ({
//     category: item?.category,
//     param: item?.param,
//   }));
// }

export default async function Page({
  params,
}: {
  params: Promise<{ category: string; param: string }>;
}) {
  const { category, param } = await params;
  // console.log(category, param);

  return <MoviesTemplate category={category} param={param} />;
}
