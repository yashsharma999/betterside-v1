import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';

type CartItem = {
  title: string;
  finalPrice: number;
};

export default function AddToCart({
  title,
  finalPrice,
  cart,
  setCart,
}: CartItem & {
  cart: any;
  setCart: any;
}) {
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const obj = cart?.find((item: CartItem) => item.title === title);

    if (obj) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cart]);

  const addToCart = (data: CartItem) => {
    setCart((p: CartItem[]) => [...p, data]);
    sessionStorage.setItem('cart', JSON.stringify([...cart, data]));
  };

  const removeFromCart = (data: CartItem) => {
    const updatedCart = cart.filter(
      (item: CartItem) => item.title !== data.title
    );

    setCart(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  if (inCart) {
    return (
      <Button
        variant={'destructive'}
        onClick={(e) => {
          e.stopPropagation();
          removeFromCart({
            title,
            finalPrice,
          });
        }}
      >
        Remove
      </Button>
    );
  }

  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        addToCart({
          title,
          finalPrice,
        });
      }}
    >
      Add
    </Button>
  );
}
