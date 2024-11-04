import localFont from 'next/font/local';
import Link from 'next/link';
import React from 'react';

export const heroFont = localFont({
  src: '../fonts/CalSans-SemiBold.woff2',
});

export default function Logo() {
  return (
    <Link href={'/'}>
      <h1 className={`text-xl ${heroFont.className}`}>BetterSide</h1>
    </Link>
  );
}
