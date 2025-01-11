import React, { JSX } from 'react';
import { FaDownload } from 'react-icons/fa';

interface DownloadOption {
  downloadLink: string;
  quality: string;
  language: string;
}

interface InfoTable {
  data: DownloadOption[];
}
const downloadData = [
  {
    downloadLink: 'https://example.com/download1',
    language: 'Tiếng Việt',
    quality: '1080p',
  },
  {
    downloadLink: 'https://example.com/download2',
    language: 'English',
    quality: '720p',
  },
  // Thêm các mục khác nếu cần
];

const InfoTable = ({ data }: DownloadOption): JSX.Element => {
  return (
    <table className="tw-themes-3 min-w-full rounded-lg">
      <thead>
        <tr>
          <th className="tw-border-themes border-b px-4 py-2">
            Liên Kết Tải Về
          </th>
          <th className="tw-border-themes border-b px-4 py-2">Chất Lượng</th>
          <th className="tw-border-themes border-b px-4 py-2">Ngôn Ngữ</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {downloadData.map((option, index) => (
          <tr
            key={index}
            // className={cn(index % 2 === 0 ? 'bg-gray-50' : 'bg-white')}
          >
            <td className="flex items-center space-x-2 px-4 py-2">
              <FaDownload />
              <a
                href={option.downloadLink}
                className="text-blue-500 hover:underline"
              >
                Tải về
              </a>
            </td>
            <td className="px-4 py-2">{option.quality}</td>
            <td className="px-4 py-2">{option.language}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default InfoTable;
