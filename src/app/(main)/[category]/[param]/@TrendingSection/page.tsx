import { pause } from '@/lib/utils/misc/pause';
import { TrendingSection } from '@/components/molecules';

async function TrendingPage({
  params,
}: {
  params: Promise<{ category: string; param: string }>;
}) {
  const { category, param } = await params;
  // await pause(3000);
  return (
    <>
      <TrendingSection />
    </>
  );
}
export default TrendingPage;
