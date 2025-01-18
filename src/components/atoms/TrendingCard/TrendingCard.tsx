import Image from 'next/image';
import { cn } from '@/lib/utils';

const TrendingCard = (): JSX.Element => {
  return (
    <div
      className={cn(
        'tw-flex group/TrendingCard relative h-full',
        'border-x-bgdark/50 dark:border-x-main-aliceBlue-500/50 rounded-3xl border-x',
      )}
    >
      <div className="w-1/4 p-2">
        <Image
          width={400}
          height={200}
          alt="cardimg"
          src="/demo/poster.jpg"
          // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
          className="rounded-3xl transition duration-300 group-hover:scale-105"
          // placeholder="blur"
        />
      </div>
      <div className="w-3/4">
        <section className={`mt-2 sm:mt-0`}>
          <h3 className="line-clamp-2 text-xs font-semibold text-blue-800 group-hover/TrendingCard:text-[#ff5722] sm:line-clamp-none sm:text-sm md:text-base lg:text-lg dark:text-[#03a8f5] dark:group-hover:text-[#da9d29]">
            The Witcher
          </h3>
          <div>
            <p className="tw-text-color line-clamp-3 text-[10px] sm:line-clamp-none sm:text-[11px] md:text-sm lg:text-base">
              witcher
              <span className="ml-1">{2023}</span>
            </p>
          </div>
          <div>
            <span className="text-xs sm:text-sm md:text-base">{1999}</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TrendingCard;
