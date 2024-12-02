import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import DropAMessage from './DropAMessage';

export default function Navbar() {
  return (
    <div className='fixed top-0 z-40 left-0 w-full backdrop-blur-[10px]	'>
      <div className='py-4 px-2 max-w-5xl mx-auto flex items-center justify-between'>
        <Logo />
        <div className='flex gap-4'>
          <Link
            href={`https://cal.com/yash-sharma-dzuol1/30min`}
            target='_blank'
          >
            <Button className='font-bold'>Schedule a call</Button>
          </Link>
          <DropAMessage />
        </div>
      </div>
    </div>
    
  );
}
