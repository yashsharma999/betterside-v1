import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className='bg-[#f9f9fb]'>
      <div className='relative w-full max-w-5xl mx-auto px-2 py-4'>
        <footer className='px-4 my-4 py-[60px]'>
          {/* <Separator className='mb-4' /> */}
          <div className='w-full flex flex-col md:flex-row gap-8 md:gap-0 justify-center items-center md:items-start text-center md:text-left md:justify-between'>
            <div className='flex flex-col gap-2'>
              <Logo />
              <p className='text-sm'>&copy; 2024 BetterSide</p>
            </div>

            <div className='flex flex-col gap-2'>
              <h1 className='font-bold'>Legal</h1>
              <Link
                className='text-sm'
                href={'termsAndConditions'}
              >{`Terms & Conditions`}</Link>
              <Link
                className='text-sm'
                href={'privacyPolicy'}
              >{`Privacy Policy`}</Link>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold'>Social</h1>
              <div className='flex gap-2 justify-center md:justify-start'>
                <Link href={'https://twitter.com/5273Yash'}>
                  <Image
                    height={16}
                    width={16}
                    src={'./assets/twitter.svg'}
                    alt='twitter'
                  />
                </Link>
              </div>
              <Link
                className='text-sm'
                href={'#'}
              >{`syash5575@gmail.com`}</Link>
              {/* <Link className='text-sm' href={'#'}>{``}</Link> */}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
