import { JSX } from 'react';
import { FaDownload } from 'react-icons/fa';

import Link from 'next/link';
import { ServerDatum } from '@/types/apiMovieDetails';

const InfoTable = ({
  serverData,
  quality,
  lang,
}: {
  serverData: ServerDatum;
  quality: string;
  lang: string;
}): JSX.Element => {
  return (
    <div className="tw-themes-3 h-60 overflow-y-scroll rounded-lg scheme-light dark:scheme-dark">
      <table className="min-w-full">
        <thead>
          <tr className="**:tw-border-themes truncate **:border-b **:p-4">
            <th>Liên Kết Tải Về</th>
            <th>Chất Lượng</th>
            <th>Ngôn Ngữ</th>
          </tr>
        </thead>

        <tbody className="h-1 text-center">
          {serverData?.map((option: ServerDatum, index: number) => (
            <tr
              key={`${option?.slug}-${index}`}
              // className="**:px-4 **:py-1.5"
            >
              <td className="grid px-4 py-2">
                <Link
                  href={option?.link_m3u8}
                  className="tw-flex-1 gap-2 text-blue-500 hover:underline"
                >
                  <FaDownload />
                  {option?.filename}
                </Link>
              </td>
              <td>{quality}</td>
              <td>{lang}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default InfoTable;
