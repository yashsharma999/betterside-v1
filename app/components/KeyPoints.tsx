'use client';

import DotPattern from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';
import InfoBlock from './InfoBlock';
import { FaAward, FaLightbulb, FaPuzzlePiece, FaRocket } from 'react-icons/fa';

export default function KeyPoints() {
  return (
    <div className='animate-fade-up relative bg-[#030303] text-white py-12 px-4 md:py-16 md:px-8 rounded-xl'>
      <div className='z-20 relative'>
        <h1 className='text-3xl md:text-5xl font-bold text-center mb-4 md:leading-[4.2rem]'>
          {`
            Give your ideas a head start, MVP within 1-2 weeks
          `}
        </h1>
        <h2 className='mb-16 text-lg md:text-xl text-center max-w-[50ch] mx-auto text-zinc-200'>
          {`
            From initial vision to final product, I help bring your digital
            projects to life faster and`}{' '}
          <span className='font-bold'>better</span>
          {` than ever before.`}
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 text-center gap-12'>
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
        </div>
      </div>

      <DotPattern
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,black,transparent)]'
        )}
      />
    </div>
  );
}
