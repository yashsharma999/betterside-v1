import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import React from 'react';

export default function FAQ() {
  return (
    <div className='my-8'>
      <p className='z-10 mb-8 text-center text-4xl md:text-5xl font-semibold tracking-tighter text-black dark:text-white'>
        FAQs
      </p>
      <Accordion
        type='single'
        collapsible
        className='w-full md:w-[60%] px-4 text-left mx-auto'
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger className='text-left'>
            Why chose us ?
          </AccordionTrigger>
          <AccordionContent>
            {`Your vision deserves all your attention, and the tech side should just be a small part of the big picture. We handle the technical complexities so you can stay focused on creating, innovating, and connecting with your audience. Let us take care of the tech, while you drive the impact.`}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger className='text-left'>
            How do you ensure timely delivery?
          </AccordionTrigger>
          <AccordionContent>
            {`We combine careful planning with consistent communication to keep everything on track. Thanks to the latest developments in AI, we can tackle complex problems faster and more efficiently, ensuring that your project progresses smoothly and is delivered on time, every time.`}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger className='text-left'>
            {`Are the prices fixed?`}
          </AccordionTrigger>
          <AccordionContent>
            {`Our pricing is flexible and tailored to meet the unique needs of each project. While we have baseline rates, we must understand that every project is different. We’re happy to discuss your specific requirements and adjust accordingly to ensure you get the most value for your investment.`}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
