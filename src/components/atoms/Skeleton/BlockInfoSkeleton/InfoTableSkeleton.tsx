import { JSX } from 'react';

const InfoTableSkeleton = (): JSX.Element => {
  return (
    <div className="tw-themes-3 h-60 overflow-y-scroll rounded-lg scheme-light dark:scheme-dark">
      <table className="min-w-full">
        <thead>
          <tr className="**:tw-border-themes **:p-4">
            <th>
              <div className="skeleton h-6 w-32 rounded-lg" />
            </th>
            <th>
              <div className="skeleton h-6 w-24 rounded-lg" />
            </th>
            <th>
              <div className="skeleton h-6 w-24 rounded-lg" />
            </th>
          </tr>
        </thead>

        <tbody className="h-1 text-center">
          {[...Array(5)].map((_, index) => (
            <tr key={index} className="**:px-4 **:py-1.5">
              <td className="grid px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="skeleton h-5 w-5 rounded-lg" />
                  <div className="skeleton h-5 w-40 rounded-lg" />
                </div>
              </td>
              <td>
                <div className="skeleton h-5 w-16 rounded-lg" />
              </td>
              <td>
                <div className="skeleton h-5 w-16 rounded-lg" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InfoTableSkeleton;
