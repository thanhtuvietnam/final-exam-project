import { JSX } from 'react';

import Image from 'next/image';

export default function Dashboard(): JSX.Element {
  return (
    <div>
      <h1>Dashboard</h1>
      <Image alt="hello" width={1280} height={720} src="/demo/poster.jpg" />
    </div>
  );
}
