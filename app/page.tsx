'use client';
import HeroSection from './components/HeroSection';
import ServiceList from './components/ServiceList';
import CartBtn from './components/CartBtn';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import { Toaster } from '@/components/ui/sonner';
import FAQ from './components/FAQ';
import KeyPoints from './components/KeyPoints';
import Portfolio from './components/Portfolio';

export default function Home() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storageCart = JSON.parse(sessionStorage.getItem('cart') || '[]');

    setCart(storageCart);
  }, []);

  return (
    <>
      <HeroSection />
      <div className='w-full max-w-5xl mx-auto px-2 py-4'>
        <KeyPoints />
        <ServiceList cart={cart} setCart={setCart} />
        {/* <FAQ /> */}
        <Portfolio />
        <CartBtn cart={cart} setCart={setCart} />
      </div>
      <Footer />
      <Toaster />
    </>
  );
}
