import services from '@/lib/services';
import React from 'react';
import Card from './Card';

export default function ServiceList({ cart, setCart }: any) {
  return (
    <section className='mt-32 mb-16 scroll-mt-[100px] ' id='services'>
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
    </section>
  );
}
