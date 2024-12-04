'use client';

import DotPattern from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';
import { MagicCard } from '@/components/ui/magic-card';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function Portfolio() {
  const ref = useRef(null); // Create a ref for the element
  const isInView = useInView(ref, { once: false }); // Tracks visibility

  return (
    <motion.section
      ref={ref}
      initial={{ y: 80 }} // Start slightly below and hidden
      animate={isInView ? { y: 0 } : { y: 80 }} // Animate based on visibility
      transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth transition
    >
      <h1 className='text-3xl md:text-5xl font-bold text-center mb-16'>
        Recent Projects
      </h1>
      <div className='border relative text-white py-12 px-4 md:py-16 md:px-8 rounded-xl md:shadow-sm'>
        <div className='grid grid-cols-1 md:grid-cols-2 '>
          <Link href='https://creatiwe.studio' target='_blank'>
            <MagicCard
              className='cursor-pointer flex-col shadow-2xl'
              gradientColor={'#D9D9D955'}
            >
              <img src='/assets/creatiweStudio.png' alt='creatiwe' />
              <div className='p-4 bg-white'>
                <h1 className='text-2xl font-bold mb-2'>Creatiwe.studio</h1>
                <p className='text-sm text-zinc-500'>
                  Production house, creating films, ads, documentaries and music
                  videos for the world.
                </p>
              </div>
            </MagicCard>
          </Link>
        </div>
        <DotPattern
          className={cn(
            '[mask-image:radial-gradient(500px_circle_at_center,black,transparent)]'
          )}
        />
      </div>
    </motion.section>
  );
}
