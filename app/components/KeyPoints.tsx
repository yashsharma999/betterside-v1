'use client';

import DotPattern from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';
import InfoBlock from './InfoBlock';
import { FaAward, FaLightbulb, FaPuzzlePiece } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function KeyPoints() {
  const ref = useRef(null); // Create a ref for the element
  const isInView = useInView(ref, { once: false }); // Tracks visibility

  return (
    <motion.div className='animate-fade-up relative bg-[#030303] text-white py-12 px-4 md:py-16 md:px-8 rounded-xl'>
      <div className='z-20 relative'>
        <motion.h1
          ref={ref}
          initial={{ y: 80 }} // Start slightly below and hidden
          animate={isInView ? { y: 0 } : { y: 80 }} // Animate based on visibility
          transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth transition
          className='text-3xl md:text-5xl font-bold text-center mb-4 md:leading-[4.2rem]'
        >
          {`
            Give your ideas a head start, MVP within 1-2 weeks
          `}
        </motion.h1>
        <motion.h2
          ref={ref}
          initial={{ y: 80 }} // Start slightly below and hidden
          animate={isInView ? { y: 0 } : { y: 80 }} // Animate based on visibility
          transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth transition
          className='mb-16 text-lg md:text-xl text-center max-w-[50ch] mx-auto text-zinc-200'
        >
          {`
            From initial vision to final product, I help bring your digital
            projects to life faster and`}{' '}
          <span className='font-bold'>better</span>
          {` than ever before.`}
        </motion.h2>

        <motion.div
          ref={ref}
          initial={{ y: 80 }} // Start slightly below and hidden
          animate={isInView ? { y: 0 } : { y: 80 }} // Animate based on visibility
          transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth transition
          className='grid grid-cols-1 md:grid-cols-3 text-center gap-12'
        >
          <InfoBlock
            title={`High Quality`}
            description={`Handle every aspect of a modern application,
              built for speed, scale and attention to detail.`}
            icon={<FaAward />}
          />
          <InfoBlock
            title={`Innovative Approach`}
            description={`Leverage AI and latest technologies to deliver the most innovative solution for your project.`}
            icon={<FaLightbulb />}
          />
          <InfoBlock
            title={`Seamless Integrations`}
            description={`Email setup, Newsletter integrations, Authentication, and more. All included in a complete package.`}
            icon={<FaPuzzlePiece />}
          />
        </motion.div>
      </div>

      <DotPattern
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,black,transparent)]'
        )}
      />
    </motion.div>
  );
}
