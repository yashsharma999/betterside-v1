import services from '@/lib/services';
import React from 'react';
import Card from './Card';

export default function ServiceList({ cart, setCart }: any) {
  return (
    <div className='grid py-20 grid-cols-1 gap-4 justify-items-center md:grid-cols-3 md:justify-items-start'>
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
  );
}
