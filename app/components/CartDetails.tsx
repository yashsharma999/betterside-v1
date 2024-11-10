import React from 'react';
import { CartItem } from './AddToCart';

export default function CartDetails({ cart }: { cart: CartItem[] }) {
  return (
    <div className='px-4'>
      {cart?.map((item, i) => (
        <div key={i}>{item.title}</div>
      ))}
    </div>
  );
}
