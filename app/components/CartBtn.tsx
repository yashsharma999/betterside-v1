'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Drawer from './Drawer';
import CartDetails from './CartDetails';

export default function CartBtn({ cart }: { cart: any }) {
  const [showDrawer, setShowDrawer] = useState(false);

  if (cart.length === 0) {
    return null;
  }
  return (
    <>
      <Button
        onClick={() => setShowDrawer(true)}
        className='rounded-full z-[99] h-12 w-12 fixed bottom-4 right-4'
      >
        <FaShoppingCart />
        <p>{cart?.length}</p>
      </Button>
      <Drawer showDrawer={showDrawer} onClose={() => setShowDrawer(false)}>
        <CartDetails cart={cart} />
      </Drawer>
    </>
  );
}
