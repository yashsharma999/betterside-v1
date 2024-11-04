'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export default function CartBtn({ cart }: { cart: any }) {
  if (cart.length === 0) {
    return null;
  }
  return (
    <>
      <Button className='rounded-full z-[99] h-12 w-12 fixed bottom-4 right-4'>
        <FaShoppingCart />
        <p>{cart?.length}</p>
      </Button>
    </>
  );
}
