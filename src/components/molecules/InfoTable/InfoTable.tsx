import { JSX } from 'react';
import { FaDownload } from 'react-icons/fa';

import Link from 'next/link';
import { Data, Episode, ServerDatum } from '@/types/apiMovieDetails';

const InfoTable = ({ item }: Data): JSX.Element => {
  return (
    <table className="tw-themes-3 min-w-full rounded-lg">
      <thead>
        <tr className="**:tw-border-themes **:border-b **:p-4">
          <th>Liên Kết Tải Về</th>
          <th>Chất Lượng</th>
          <th>Ngôn Ngữ</th>
        </tr>
      </thead>

      {item &&
        item?.episodes?.map((episode: Episode) => (
          <tbody
            className="h-1 text-center"
            key={`${episode?.server_name}-tbody`}
          >
            {episode?.server_data?.map((option: ServerDatum) => (
              <tr
                key={option?.slug}
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
                <td>{item?.quality}</td>
                <td>{item?.lang}</td>
              </tr>
            ))}
          </tbody>
        ))}
    </table>
  );
};
export default InfoTable;
