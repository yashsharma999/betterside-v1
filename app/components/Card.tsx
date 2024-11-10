'use client';
import { MagicCard } from '@/components/ui/magic-card';
import React, { useState } from 'react';
import Drawer from './Drawer';
import { cn } from '@/lib/utils';
import SparklesText from '@/components/ui/sparkles-text';
import AddToCart from './AddToCart';
import ServiceDetails from './ServiceDetails';

export type Service = {
  image: string;
  title: string;
  description: string;
  originalPrice: string;
  discountedPrice?: string;
};

export default function Card({
  image,
  title,
  description,
  originalPrice,
  discountedPrice,
  cart,
  setCart,
}: Service & {
  cart: any;
  setCart: any;
}) {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <div
        className='h-[300px] max-w-[280px]'
        onClick={() => setShowDrawer(true)}
      >
        <MagicCard
          className='cursor-pointer flex-col shadow-2xl'
          gradientColor={'#D9D9D955'}
        >
          <div className='relative bg-stone-800 h-[100px] overflow-hidden'>
            <img
              className='object-cover absolute top-[-20px]'
              src={image}
              alt={'web-dev'}
            />
          </div>
          <div className='pt-2 pb-4 px-4 flex h-[200px] flex-col justify-between'>
            <div>
              <h1 className='font-bold text-lg mb-1'>{title}</h1>
              <p className='text-neutral-500 line-clamp-2 mb-4'>
                {description}
              </p>
            </div>
            <div className='flex justify-between items-end'>
              <div className='flex flex-col'>
                {discountedPrice && Number(discountedPrice) > 0 ? (
                  <>
                    <p
                      className={cn('font-semibold', {
                        'line-through text-neutral-400 text-sm font-normal':
                          discountedPrice && Number(discountedPrice) > 0,
                      })}
                    >{`$ ${originalPrice}`}</p>
                    <SparklesText
                      sparklesCount={0}
                      className={'text-2xl'}
                      text={`$ ${discountedPrice}`}
                    />
                  </>
                ) : (
                  <SparklesText
                    sparklesCount={title === 'Code Maintainer' ? 2 : 0}
                    className={'text-2xl'}
                    text={`$ ${originalPrice} ${
                      title === 'Code Maintainer' ? '/ month' : ''
                    }`}
                  />
                )}
              </div>

              <AddToCart
                cart={cart}
                setCart={setCart}
                title={title}
                finalPrice={discountedPrice ? discountedPrice : originalPrice}
              />
            </div>
          </div>
        </MagicCard>
      </div>

      <Drawer onClose={() => setShowDrawer(false)} showDrawer={showDrawer}>
        <ServiceDetails
          image={image}
          title={title}
          description={description}
          originalPrice={originalPrice}
          discountedPrice={discountedPrice}
          cart={cart}
          setCart={setCart}
        />
      </Drawer>
    </>
  );
}
