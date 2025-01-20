import { pause } from '@/lib/utils/misc/pause';
import { logger } from '@/lib/utils/misc/logger';
import { MoviesTemplate } from '@/components/templates';

export default async function FilmPage({
  params,
}: {
  params: Promise<{ category: string; param: string }>;
}) {
  const { category, param } = await params;
  // await pause(3000);

  logger.info({
    msg: `dynamicParam ${param} && transfer to MoviesTemplate`,
    fileName: '[category]/[param]/@FilmSections/page.tsx',
    action: '@FilmSection Render',
    details: {
      catchParam: true,
      usedParam: [category, param],
      transferTo: 'MoviesTemplate',
    },
  });
  // console.log(category, param);

  return <MoviesTemplate category={category} param={param} />;
}
