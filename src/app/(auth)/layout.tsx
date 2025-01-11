import { JSX } from 'react';

import { AuthTemplate } from '@/components/templates';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <AuthTemplate>{children}</AuthTemplate>
    </>
  );
}
