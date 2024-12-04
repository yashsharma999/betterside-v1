import services from '@/lib/services';
import React, { useRef } from 'react';
import Card from './Card';
import { motion, useInView } from 'framer-motion';

export default function ServiceList({ cart, setCart }: any) {
  const ref = useRef(null); // Create a ref for the element
  const isInView = useInView(ref, { once: false }); // Tracks visibility
  return (
    <motion.section
      ref={ref}
      initial={{ y: 50, opacity: 0 }} // Start slightly below and hidden
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }} // Animate based on visibility
      transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth transition
      className='mt-40 mb-16 scroll-mt-[100px] '
      id='services'
    >
      <h1 className='text-3xl md:text-5xl font-bold text-center mb-4'>
        Current Packages
      </h1>
      <h2 className='mb-16 text-lg md:text-xl text-center max-w-[50ch] mx-auto '>
        {`
            Dashboards, Landing Pages, Ecommerce solutions or some unique
            projects. I've got you covered.
        `}
      </h2>
      <div className='grid pb-20 grid-cols-1 gap-4 justify-items-center md:grid-cols-3 md:justify-items-start'>
        {services?.map((service, i) => (
          <Card
            key={i}
            image={service.image}
            title={service.title}
            description={service.description}
            originalPrice={service.originalPrice}
            discountedPrice={service.discountedPrice}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </motion.section>
  );
}
