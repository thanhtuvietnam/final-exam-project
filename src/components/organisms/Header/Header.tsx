import { cn } from '@/lib/utils';
import { Logo, SearchBar, UserLogin } from '@/components/molecules';
const Header: React.FC = () => {
  return (
    <header
      className={cn(
        // 'wrapper',
        'tw-flex container px-1 py-3',

        'from-main-summerSky-200 via-main-summerSky-300 to-main-summerSky-600 bg-linear-to-r',

        'dark:from-bgdark dark:via-main-darkGreen-600 dark:to-main-darkGreen-400 dark:bg-linear-to-r',
      )}
    >
      <Logo />
      <SearchBar />
      <UserLogin />
    </header>
  );
};

export default Header;
