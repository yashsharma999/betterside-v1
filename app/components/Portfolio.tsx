'use client';

import DotPattern from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';
import Card from './Card';
import { MagicCard } from '@/components/ui/magic-card';

export default function Portfolio() {
  return (
    <section className='mb-24 scroll-mt-[100px]' id='portfolio'>
      <h1 className='text-3xl md:text-5xl font-bold text-center mb-16'>
        Recent Projects
      </h1>
      <div className='border relative text-white py-12 px-4 md:py-16 md:px-8 rounded-xl md:shadow-sm'>
        <div className='grid grid-cols-1 md:grid-cols-2 '>
          <MagicCard
            className='cursor-pointer flex-col shadow-2xl'
            gradientColor={'#D9D9D955'}
          >
            <img src='/assets/creatiweStudio.png' alt='creatiwe' />
            <div className='p-4'>
              <h1 className='text-2xl font-bold'>Creatiwe.studio</h1>
            </div>
          </MagicCard>
        </div>
        <DotPattern
          className={cn(
            '[mask-image:radial-gradient(500px_circle_at_center,black,transparent)]'
          )}
        />
      </div>
    </section>
  );
}
