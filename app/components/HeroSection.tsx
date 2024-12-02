import GridPattern from '@/components/ui/animated-grid-pattern';
import WordRotate from '@/components/ui/word-rotate';
import { cn } from '@/lib/utils';
import React from 'react';
import Navbar from './Navbar';
import { RainbowButton } from '@/components/ui/rainbow-button';

export default function HeroSection() {
  return (
    <div className='relative flex h-screen w-full items-center justify-center md:justify-normal overflow-hidden bg-background p-4 '>
      <Navbar />

      <div className='z-10 w-full flex justify-center max-w-5xl mx-auto px-2'>
        <div>
          <p className='z-10 text-center text-5xl md:text-7xl font-semibold tracking-tighter text-black dark:text-white'>
            The toolkit for
            <span>
              <WordRotate words={['growing', 'launching', 'enhancing']} />
            </span>{' '}
            your business
          </p>
          <p className='md:text-lg mx-auto text-center max-w-[40ch] my-6 text-neutral-500'>
            Turn your ideas into reality with quick MVP solutions. From initial
            vision to final product, I help bring your digital projects to life
            with fast turnaround times.
          </p>
          <div className='w-full flex justify-center '>
            <RainbowButton
              className='z-10 font-bold'
              onClick={() => {
                document
                  .getElementById('services')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Explore what I offer
            </RainbowButton>
          </div>
        </div>
      </div>
      <GridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
        )}
      ></GridPattern>
      <div className='absolute bottom-0 left-0 h-[200px] w-full bg-cover bg-gradient-to-b from-transparent to-white'></div>
    </div>
  );
}
