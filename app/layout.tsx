import './globals.css';
import { Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'BetterSide',
  description: 'The complete toolkit for growing your business',
  keywords: [
    'Digital Marketing',
    'Artificial Intelligence',
    'Virtual Reality',
    'Web development',
    'App Development',
    'Content Creation',
    'Services',
    'Agency',
  ],
  metadataBase: new URL('https://www.betterside.fun'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${montserrat.className} antialiased`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
