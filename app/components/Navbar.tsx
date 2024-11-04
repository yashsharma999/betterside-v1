import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='fixed top-0 left-0 w-full '>
      <div className='py-4 px-2 max-w-5xl mx-auto flex items-center justify-between'>
        <Logo />
        <Link href={`https://cal.com/yash-sharma-dzuol1/30min`} target='_blank'>
          <Button>Schedule a call</Button>
        </Link>
      </div>
    </div>
  );
}
