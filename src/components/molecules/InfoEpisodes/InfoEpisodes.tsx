import { cn } from '@/lib/utils';
import { icons } from '@/lib/declarations/icons';

const InfoEpisodes: React.FC = () => {
  return (
    <section className="tw-themes-3 w-full rounded-lg">
      <h4 className="tw-text-color-2 tw-border-themes mb-4 flex items-center gap-2 border-b-[0.5px] p-3 font-sans">
        <icons.FaServer />
        Vietsub #1
      </h4>
      <ul className="tw-themes-3 flex flex-wrap items-center gap-1 rounded-lg p-1">
        {[...Array(100)].map((_, index) => (
          <li
            key={index}
            style={{
              width: '40px',
              height: '40px',
            }}
            className={cn(
              'tw-bounce-effect',
              'tw-flex-1 tw-themes-4 justify-center text-center',
            )}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InfoEpisodes;
