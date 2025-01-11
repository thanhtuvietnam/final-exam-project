'use client';

import React, {
  JSX,
  useMemo,
  useState,
  useCallback,
  KeyboardEvent,
} from 'react';

import { cn } from '@/lib/utils';
import { ActiveLink } from '@/components/atoms';
import { useRouter, useSearchParams } from 'next/navigation';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  onPageSizeChange?: (size: number) => void;
  pageSizeOptions?: number[];
}

/**
 * PageController component handles pagination controls.
 *
 * @param currentPage - The current active page number.
 * @param totalPages - The total number of pages available.
 * @param onPageChange - Callback function to handle page changes.
 * @param siblingCount - Number of sibling pages to display on each side of the current page.
 * @param onPageSizeChange - Optional callback function to handle page size changes.
 * @param pageSizeOptions - Array of available page size options.
 * @returns JSX.Element representing the pagination controls.
 */
const PageController: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  onPageSizeChange,
  pageSizeOptions = [10, 20, 50],
}): JSX.Element => {
  const [inputPage, setInputPage] = useState<string>('');
  // const router = useRouter();
  // const searchParams = useSearchParams();

  const getPageNumbers = useCallback((): (number | string)[] => {
    const totalNumbers = siblingCount * 2 + 5;

    if (totalPages <= totalNumbers) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(currentPage + siblingCount, totalPages);

    const showLeftEllipsis = leftSibling > 2;
    const showRightEllipsis = rightSibling < totalPages - 1;

    const pages: (number | string)[] = [1];

    if (showLeftEllipsis) {
      pages.push('...');
    }

    const start = showLeftEllipsis ? leftSibling : 2;
    const end = showRightEllipsis ? rightSibling : totalPages - 1;

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (showRightEllipsis) {
      pages.push('...');
    }

    pages.push(totalPages);

    return pages;
  }, [currentPage, totalPages, siblingCount]);

  const pages = useMemo(() => getPageNumbers(), [getPageNumbers]);

  const handleClick = useCallback(
    (page: number | string) => {
      const params = new URLSearchParams(window.location.search);
      params.set('page', page.toString());
      window.history.pushState({}, '', `${window.location.pathname}?${params}`);
      // const params = new URLSearchParams(searchParams.toString());
      // params.set('page', page.toString());
      // router.push(`${window.location.pathname}?${params.toString()}`);

      if (typeof page === 'number' && page !== currentPage) {
        onPageChange(page);
        window.scrollTo(0, 0);
      }
    },
    [onPageChange, currentPage],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, page: number | string) => {
      if (event.key === 'Enter') {
        handleClick(page);
      }
    },
    [handleClick],
  );

  const handleJump = useCallback(() => {
    const page = Number(inputPage);
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
      setInputPage('');
    }
  }, [inputPage, onPageChange, totalPages]);

  return (
    <nav aria-label="Pagination" className="mt-6 flex flex-col items-center">
      <ul className="mb-4 inline-flex items-center space-x-2">
        <li>
          <ActiveLink
            ariaLabel="First Page"
            className={cn(currentPage === 1 && 'cursor-not-allowed opacity-50')}
            onClick={() => handleClick(1)}
            onKeyDown={(e) => handleKeyDown(e, 1)}
            disabled={currentPage === 1}
          >
            First
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            ariaLabel="Previous Page"
            className={cn(currentPage === 1 && 'cursor-not-allowed opacity-50')}
            onClick={() => handleClick(currentPage - 1)}
            onKeyDown={(e) => handleKeyDown(e, currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </ActiveLink>
        </li>
        {pages.map((page, index) => (
          <li key={index}>
            {page === '...' ? (
              <span className="animate-pulse rounded-md border border-indigo-300 bg-linear-to-r from-indigo-100 via-indigo-200 to-indigo-300 px-4 py-2 text-indigo-700 dark:border-indigo-600 dark:bg-linear-to-r dark:from-indigo-600 dark:via-indigo-700 dark:to-indigo-800 dark:text-[#ebfaff]">
                ...
              </span>
            ) : (
              <ActiveLink
                ariaLabel={`Page ${page}`}
                className={cn(
                  page === currentPage &&
                    'bg-linear-to-r from-blue-500 to-teal-500 text-white shadow-xl',
                )}
                onClick={() => handleClick(page)}
                onKeyDown={(e) => handleKeyDown(e, page)}
                disabled={page === currentPage}
              >
                {page}
              </ActiveLink>
            )}
          </li>
        ))}
        <li>
          <ActiveLink
            ariaLabel="Next Page"
            className={cn(
              currentPage === totalPages && 'cursor-not-allowed opacity-50',
            )}
            onClick={() => handleClick(currentPage + 1)}
            onKeyDown={(e) => handleKeyDown(e, currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            ariaLabel="Last Page"
            className={cn(
              currentPage === totalPages && 'cursor-not-allowed opacity-50',
            )}
            onClick={() => handleClick(totalPages)}
            onKeyDown={(e) => handleKeyDown(e, totalPages)}
            disabled={currentPage === totalPages}
          >
            Last
          </ActiveLink>
        </li>
      </ul>
      <div className="flex items-center space-x-3">
        <input
          aria-label="Jump to page input"
          placeholder="Jump to page"
          className="rounded-md border border-indigo-300 bg-linear-to-r from-indigo-50 via-indigo-100 to-indigo-200 px-3 py-2 text-gray-800 shadow-inner transition duration-300 ease-in-out focus:ring-4 focus:ring-indigo-300 dark:border-indigo-600 dark:bg-linear-to-r dark:from-indigo-700 dark:via-indigo-800 dark:to-indigo-900 dark:text-gray-100 dark:focus:ring-indigo-500"
          onChange={(e) => setInputPage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleJump();
          }}
          min={1}
          type="number"
          max={totalPages}
          value={inputPage}
        />
        <ActiveLink
          ariaLabel="Go to Page"
          className=""
          onClick={handleJump}
          disabled={!inputPage}
        >
          Go
        </ActiveLink>
        {onPageSizeChange && (
          <select
            aria-label="Select page size"
            className="rounded-md border border-indigo-300 bg-linear-to-r from-indigo-50 via-indigo-100 to-indigo-200 px-3 py-2 text-indigo-600 shadow-inner transition duration-300 ease-in-out focus:ring-4 focus:ring-indigo-300 dark:border-indigo-600 dark:bg-linear-to-r dark:from-indigo-700 dark:via-indigo-800 dark:to-indigo-900 dark:text-indigo-300 dark:focus:ring-indigo-500"
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            defaultValue={pageSizeOptions[0]}
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size} / page
              </option>
            ))}
          </select>
        )}
      </div>
    </nav>
  );
};

export default React.memo(PageController);

// 'use client';

// import React, { JSX, useCallback, useMemo, useState } from 'react';

// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
//   siblingCount?: number;
//   onPageSizeChange?: (size: number) => void;
//   pageSizeOptions?: number[];
// }

// /**
//  * PageController component handles pagination controls.
//  *
//  * @param currentPage - The current active page number.
//  * @param totalPages - The total number of pages available.
//  * @param onPageChange - Callback function to handle page changes.
//  * @param siblingCount - Number of sibling pages to display on each side of the current page.
//  * @param onPageSizeChange - Optional callback function to handle page size changes.
//  * @param pageSizeOptions - Array of available page size options.
//  * @returns JSX.Element representing the pagination controls.
//  */
// const PageController: React.FC<PaginationProps> = ({
//   currentPage,
//   totalPages,
//   onPageChange,
//   siblingCount = 1,
//   onPageSizeChange,
//   pageSizeOptions = [10, 20, 50],
// }): JSX.Element => {
//   /**
//    * State to manage the input value for jumping to a specific page.
//    */
//   const [inputPage, setInputPage] = useState<string>('');

//   /**
//    * Generates an array of page numbers and ellipses based on the current page and total pages.
//    *
//    * @returns An array containing numbers and strings ('...') representing page numbers and ellipses.
//    */
//   const getPageNumbers = useCallback((): (number | string)[] => {
//     const totalNumbers = siblingCount * 2 + 5;
//     if (totalPages <= totalNumbers) {
//       return Array.from(
//         {
//           length: totalPages,
//         },
//         (_, i) => i + 1,
//       );
//     }

//     const leftSibling = Math.max(currentPage - siblingCount, 1);
//     const rightSibling = Math.min(currentPage + siblingCount, totalPages);

//     const showLeftEllipsis = leftSibling > 2;
//     const showRightEllipsis = rightSibling < totalPages - 1;

//     const pages: (number | string)[] = [1];

//     if (showLeftEllipsis) {
//       pages.push('...');
//     }

//     const start = showLeftEllipsis ? leftSibling : 2;
//     const end = showRightEllipsis ? rightSibling : totalPages - 1;

//     for (let i = start; i <= end; i++) {
//       pages.push(i);
//     }

//     if (showRightEllipsis) {
//       pages.push('...');
//     }

//     pages.push(totalPages);

//     return pages;
//   }, [currentPage, totalPages, siblingCount]);

//   /**
//    * Memoized array of page numbers to prevent unnecessary recalculations.
//    */
//   const pages = useMemo(() => getPageNumbers(), [getPageNumbers]);

//   /**
//    * Handles the click event on a page number button.
//    *
//    * @param page - The page number that was clicked.
//    */
//   const handleClick = useCallback(
//     (page: number | string) => {
//       if (typeof page === 'number' && page !== currentPage) {
//         onPageChange(page);
//       }
//     },
//     [onPageChange, currentPage],
//   );

//   /**
//    * Handles key down events for accessibility, allowing page changes via the Enter key.
//    *
//    * @param event - The keyboard event.
//    * @param page - The page number associated with the button.
//    */
//   const handleKeyDown = useCallback(
//     (event: React.KeyboardEvent<HTMLButtonElement>, page: number | string) => {
//       if (event.key === 'Enter') {
//         handleClick(page);
//       }
//     },
//     [handleClick],
//   );

//   /**
//    * Handles jumping to a specific page based on user input.
//    */
//   const handleJump = useCallback(() => {
//     const page = Number(inputPage);
//     if (page >= 1 && page <= totalPages) {
//       onPageChange(page);
//       setInputPage('');
//     }
//   }, [inputPage, onPageChange, totalPages]);

//   return (
//     <nav aria-label="Pagination" className="mt-6 flex flex-col items-center">
//       <ul className="mb-4 inline-flex items-center space-x-2">
//         <li>
//           <button
//             onClick={() => onPageChange(1)}
//             disabled={currentPage === 1}
//             className={`rounded-md border border-indigo-500 bg-linear-to-r from-indigo-500 to-purple-600 px-4 py-2 text-white shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:from-indigo-600 hover:to-purple-700 focus:outline-hidden focus:ring-4 focus:ring-indigo-300 dark:border-indigo-700 dark:bg-linear-to-r dark:from-indigo-700 dark:to-purple-800 dark:text-gray-100 dark:hover:from-indigo-800 dark:hover:to-purple-900${currentPage === 1 && 'cursor-not-allowed opacity-50'}`}
//             aria-label="First Page"
//             onKeyDown={(e) => handleKeyDown(e, 1)}
//           >
//             First
//           </button>
//         </li>
//         <li>
//           <button
//             onClick={() => onPageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className={`rounded-md border border-indigo-500 bg-linear-to-r from-indigo-500 to-purple-600 px-4 py-2 text-white shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:from-indigo-600 hover:to-purple-700 focus:outline-hidden focus:ring-4 focus:ring-indigo-300 dark:border-indigo-700 dark:bg-linear-to-r dark:from-indigo-700 dark:to-purple-800 dark:text-gray-100 dark:hover:from-indigo-800 dark:hover:to-purple-900${currentPage === 1 && 'cursor-not-allowed opacity-50'}`}
//             aria-label="Previous Page"
//             onKeyDown={(e) => handleKeyDown(e, currentPage - 1)}
//           >
//             Previous
//           </button>
//         </li>
//         {pages.map((page, index) => (
//           <li key={index}>
//             {page === '...' ? (
//               <span className="animate-pulse rounded-md border border-indigo-300 bg-linear-to-r from-indigo-100 via-indigo-200 to-indigo-300 px-4 py-2 text-indigo-700 dark:border-indigo-600 dark:bg-linear-to-r dark:from-indigo-600 dark:via-indigo-700 dark:to-indigo-800 dark:text-bglight">
//                 ...
//               </span>
//             ) : (
//               <button
//                 onClick={() => handleClick(page)}
//                 onKeyDown={(e) => handleKeyDown(e, page)}
//                 className={`rounded-md border border-indigo-500 px-4 py-2 text-indigo-600 transition duration-300 ease-in-out focus:outline-hidden focus:ring-4 focus:ring-indigo-300 dark:border-indigo-700 dark:text-indigo-300 dark:hover:bg-linear-to-r dark:hover:from-indigo-600 dark:hover:to-purple-700${page === currentPage ? 'bg-linear-to-r from-blue-500 to-teal-500 text-white shadow-xl' : 'hover:bg-linear-to-r hover:from-indigo-500 hover:to-purple-600'}`}
//                 aria-current={page === currentPage ? 'page' : undefined}
//               >
//                 {page}
//               </button>
//             )}
//           </li>
//         ))}
//         <li>
//           <button
//             onClick={() => onPageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className={`rounded-md border border-indigo-500 bg-linear-to-r from-indigo-500 to-purple-600 px-4 py-2 text-white shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:from-indigo-600 hover:to-purple-700 focus:outline-hidden focus:ring-4 focus:ring-indigo-300 dark:border-indigo-700 dark:bg-linear-to-r dark:from-indigo-700 dark:to-purple-800 dark:text-gray-100 dark:hover:from-indigo-800 dark:hover:to-purple-900${currentPage === totalPages && 'cursor-not-allowed opacity-50'}`}
//             aria-label="Next Page"
//             onKeyDown={(e) => handleKeyDown(e, currentPage + 1)}
//           >
//             Next
//           </button>
//         </li>
//         <li>
//           <button
//             onClick={() => onPageChange(totalPages)}
//             disabled={currentPage === totalPages}
//             className={`rounded-md border border-indigo-500 bg-linear-to-r from-indigo-500 to-purple-600 px-4 py-2 text-white shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:from-indigo-600 hover:to-purple-700 focus:outline-hidden focus:ring-4 focus:ring-indigo-300 dark:border-indigo-700 dark:bg-linear-to-r dark:from-indigo-700 dark:to-purple-800 dark:text-gray-100 dark:hover:from-indigo-800 dark:hover:to-purple-900${currentPage === totalPages && 'cursor-not-allowed opacity-50'}`}
//             aria-label="Last Page"
//             onKeyDown={(e) => handleKeyDown(e, totalPages)}
//           >
//             Last
//           </button>
//         </li>
//       </ul>
//       <div className="flex items-center space-x-3">
//         <input
//           type="number"
//           value={inputPage}
//           onChange={(e) => setInputPage(e.target.value)}
//           className="rounded-md border border-indigo-300 bg-linear-to-r from-indigo-50 via-indigo-100 to-indigo-200 px-3 py-2 text-gray-800 shadow-inner transition duration-300 ease-in-out focus:ring-4 focus:ring-indigo-300 dark:border-indigo-600 dark:bg-linear-to-r dark:from-indigo-700 dark:via-indigo-800 dark:to-indigo-900 dark:text-gray-100 dark:focus:ring-indigo-500"
//           placeholder="Jump to page"
//           min={1}
//           max={totalPages}
//           onKeyDown={(e) => {
//             if (e.key === 'Enter') handleJump();
//           }}
//         />
//         <button
//           onClick={handleJump}
//           className="rounded-md bg-linear-to-r from-teal-500 to-teal-600 px-4 py-2 text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:from-teal-600 hover:to-teal-700 focus:outline-hidden focus:ring-4 focus:ring-teal-300 dark:bg-linear-to-r dark:from-teal-600 dark:to-teal-700 dark:hover:from-teal-700 dark:hover:to-teal-800 dark:focus:ring-teal-500"
//         >
//           Go
//         </button>
//         {onPageSizeChange && (
//           /**
//            * Dropdown to select the number of items per page.
//            */
//           <select
//             onChange={(e) => onPageSizeChange(Number(e.target.value))}
//             className="rounded-md border border-indigo-300 bg-linear-to-r from-indigo-50 via-indigo-100 to-indigo-200 px-3 py-2 text-indigo-600 shadow-inner transition duration-300 ease-in-out focus:ring-4 focus:ring-indigo-300 dark:border-indigo-600 dark:bg-linear-to-r dark:from-indigo-700 dark:via-indigo-800 dark:to-indigo-900 dark:text-indigo-300 dark:focus:ring-indigo-500"
//             defaultValue={pageSizeOptions[0]}
//           >
//             {pageSizeOptions.map((size) => (
//               <option key={size} value={size}>
//                 {size} / page
//               </option>
//             ))}
//           </select>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default React.memo(PageController);
