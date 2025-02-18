import type { FC } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { env } from '@/env';

import { HelloWorldLabel } from './_components/hello-world-label';

const Home: FC = () => {
  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <HelloWorldLabel />
          <p>ENV：{env.ENV}</p>
          <p>DEBUG：{env.DEBUG}</p>
          <Link href="/about">About</Link>
          <Button>Click shadcn/ui button</Button>
        </div>
      </div>
    </main>
  );
};
export default Home;
