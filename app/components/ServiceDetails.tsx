import React from 'react';
import { Service } from './Card';
import { cn } from '@/lib/utils';
import SparklesText from '@/components/ui/sparkles-text';
import AddToCart from './AddToCart';

export default function ServiceDetails({
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
  return (
    <div className='px-4 flex flex-col justify-between h-[calc(100vh-100px)] gap-4'>
      <div className='px-4 flex flex-col gap-4'>
        <div className='relative rounded-xl shadow-md bg-stone-800 h-[250px] w-full overflow-hidden'>
          <img className='object-cover' src={image} alt={'web-dev'} />
        </div>
        <h1 className='font-bold text-2xl'>{title}</h1>
        <p className='text-neutral-500 mb-4'>{description}</p>

        <div className='flex flex-col'>
          {discountedPrice && discountedPrice > 0 ? (
            <>
              <p
                className={cn('font-semibold', {
                  'line-through text-neutral-400 text-sm font-normal':
                    discountedPrice && discountedPrice > 0,
                })}
              >{`$ ${originalPrice}`}</p>
              <SparklesText
                sparklesCount={4}
                className={'text-2xl'}
                text={`$ ${discountedPrice}`}
              />
            </>
          ) : (
            <SparklesText
              sparklesCount={4}
              className={'text-2xl'}
              text={`$ ${originalPrice}`}
            />
          )}
        </div>
      </div>

      <AddToCart
        cart={cart}
        setCart={setCart}
        title={title}
        finalPrice={discountedPrice ? discountedPrice : originalPrice}
      />
    </div>
  );
}
