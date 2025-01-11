import { JSX } from 'react';

import '@/styles/globals.css';
import { MainTemplate } from '@/components/templates';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <MainTemplate>{children}</MainTemplate>
    </>
  );
}
