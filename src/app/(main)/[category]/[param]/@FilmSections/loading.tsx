import { SectionTitleSkeleton } from '@/components/atoms/Skeleton/CommonSkeleton';
import {
  CardSkeleton,
  PageControllerSkeleton,
} from '@/components/atoms/Skeleton';
import '@/styles/CardSkeleton.css';

export default function Loading() {
  return (
    <div className="flex w-full flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-3">
      <div className="w-full grow space-y-4 lg:w-2/3">
        <SectionTitleSkeleton />

        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 24 }).map((_, index) => (
            <div key={index} className="overflow-hidden bg-transparent p-1">
              <CardSkeleton />
            </div>
          ))}
        </div>
        <PageControllerSkeleton />
      </div>
    </div>
  );
}
