import { Service } from '@/app/components/Card';

const services: Service[] = [
  {
    image: './assets/web-dev.png',
    title: 'Web Application Development',
    description: `Custom web apps built to scale with your vision—whether it’s a
          platform, a marketplace, or something totally unique. I handle the
          heavy lifting so you can focus on what you do best.`,
    originalPrice: '1499',
    tags: ['Next.js', 'Tailwind CSS', 'Firebase', 'AWS'],
  },
  {
    image: `./assets/ecommerce-dev.png`,
    title: 'Ecommerce Development',
    description: `Your products deserve a top-notch digital home. I’ll build an ecommerce site that’s stylish, secure, and simple to manage, so you can focus on growing your business.`,
    originalPrice: '6200',
    discountedPrice: '5000',
    tags: ['Next.js', 'Medusa', 'Shopify'],
  },
  {
    image: `./assets/coder.png`,
    title: `Design to Code`,
    description: `
      Transform your Figma, Adobe XD, or Sketch designs into pixel-perfect, responsive code. I'll handle all the details - from animations to interactions - ensuring your vision comes to life exactly as designed.
    `,
    originalPrice: '999',
    tags: ['Webflow', 'Next.js', 'Framer Motion', 'Tailwind CSS'],
  },
];

export default services;
