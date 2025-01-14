import Link from 'next/link';
import { socialLinks } from '@/lib/declarations/constant';

const SocialContact = (): JSX.Element => {
  return (
    <>
      <div className="tw-flex-1 tw-border-themes justify-center gap-3 border-t p-4 md:hidden">
        {socialLinks.map((link) => (
          <Link
            href={link.path ?? '#'}
            key={link.id}
            className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon && (
              <link.icon
                className="transition-colors duration-300 ease-in-out hover:text-red-500"
                size={35}
              />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default SocialContact;
