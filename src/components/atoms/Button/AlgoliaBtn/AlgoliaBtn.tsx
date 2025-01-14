// import Link from 'next/link';
// import { cn } from '@/lib/utils';

// interface AlgoliaBtnProps {
//   children: React.ReactNode;
//   className?: string;
//   color: string;
//   handleOnClick: () => void;
// }
// const AlgoliaBtn: React.FC<AlgoliaBtnProps> = ({
//   // handleOnClick
//   children,
//   className,
//   color,
// }) => {
//   return (
//     <Link
//       // onClick={handleOnClick}
//       href={`/xem-phim/gia-dinh-upshaw-phan-6`}
//       role="button"
//       className={cn(
//         // basic
//         'box-border inline-flex h-12 cursor-pointer touch-manipulation items-center justify-center gap-2 overflow-hidden border-0 whitespace-nowrap',
//         // color
//         'bg-linear-to-r font-mono leading-none text-white no-underline',
//         // shadow
//         'shadow-[rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,rgba(58,65,111,0.5)_0_-3px_0_inset]',
//         // hover
//         `transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[rgba(45,35,66,0.4)_0_4px_8px,rgba(45,35,66,0.3)_0_7px_13px_-3px,${color}_0_-3px_0_inset]`,
//         // focus
//         `focus:shadow-[${color}_0_0_0_1.5px_inset,rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,${color}_0_-3px_0_inset] active:translate-y-0.5 active:shadow-[${color}_0_3px_7px_inset]`,
//         className,
//       )}
//     >
//       {children}
//     </Link>
//   );
// };

// export default AlgoliaBtn;
// AlgoliaBtn.tsx
'use client';

import { MouseEvent } from 'react';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Base } from '@/types/commonTypes';

interface LinkProps extends Base {
  onClick?: never;
  href: string;
}

interface ButtonProps extends Base {
  // onClick: (
  //   event: MouseEvent<HTMLButtonElement>,
  // ) => React.Dispatch<React.SetStateAction<boolean>>;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;

  href?: never;
}

export type AlgoliaBtnProps = LinkProps | ButtonProps;

const AlgoliaBtn: React.FC<AlgoliaBtnProps> = ({
  children,
  className,
  color,
  ...props
}) => {
  const commonClasses = cn(
    // color
    'bg-linear-to-r font-mono leading-none text-white no-underline',
    // shadow
    'shadow-[rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,rgba(58,65,111,0.5)_0_-3px_0_inset]',
    // basic
    'box-border inline-flex h-12 cursor-pointer touch-manipulation items-center justify-center gap-2 overflow-hidden border-0 whitespace-nowrap',
    // hover
    `transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[rgba(45,35,66,0.4)_0_4px_8px,rgba(45,35,66,0.3)_0_7px_13px_-3px,${color}_0_-3px_0_inset]`,
    // focus
    `focus:shadow-[${color}_0_0_0_1.5px_inset,rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,${color}_0_-3px_0_inset] active:translate-y-0.5 active:shadow-[${color}_0_3px_7px_inset]`,
    className,
  );

  if ('href' in props) {
    return (
      <Link href={props.href} role="button" className={commonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={commonClasses} onClick={props.onClick} type="button">
      {children}
    </button>
  );
};

export default AlgoliaBtn;
