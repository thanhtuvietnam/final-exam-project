import { cn } from '@/lib/utils';
import styles from '@/auth/auth.module.css';
import { BackgroundVid } from '@/components/atoms';

interface AuthTemplateProps {
  children: React.ReactNode;
}
const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  return (
    <main className={cn('relative w-full')}>
      <BackgroundVid />
      <div className={cn(styles['wrapper'])}>{children}</div>
    </main>
  );
};

export default AuthTemplate;
