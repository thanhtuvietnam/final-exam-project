import { cn } from '@/lib/utils';

interface AlgoliaBtnProps {
  children: React.ReactNode;
  className?: string;
  color: string;
}
const AlgoliaBtn: React.FC<AlgoliaBtnProps> = ({
  children,
  className,
  color,
}) => {
  return (
    <button
      role="button"
      className={cn(
        // basic
        'box-border inline-flex h-12 cursor-pointer touch-manipulation items-center justify-center gap-2 overflow-hidden border-0 whitespace-nowrap',
        // color
        'bg-linear-to-r font-mono leading-none text-white no-underline',
        // shadow
        'shadow-[rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,rgba(58,65,111,0.5)_0_-3px_0_inset]',
        // hover
        `transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[rgba(45,35,66,0.4)_0_4px_8px,rgba(45,35,66,0.3)_0_7px_13px_-3px,${color}_0_-3px_0_inset]`,
        // focus
        `focus:shadow-[${color}_0_0_0_1.5px_inset,rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,${color}_0_-3px_0_inset] active:translate-y-0.5 active:shadow-[${color}_0_3px_7px_inset]`,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default AlgoliaBtn;
