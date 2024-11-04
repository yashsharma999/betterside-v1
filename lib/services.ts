import { Service } from '@/app/components/Card';

const services: Service[] = [
  {
    image: './assets/web-dev.png',
    title: 'Web Application Development',
    description: `Custom web apps built to scale with your vision—whether it’s a
          platform, a marketplace, or something totally unique. I handle the
          heavy lifting so you can focus on what you do best.`,
    originalPrice: 1400,
  },
  {
    image: `./assets/ecommerce-dev.png`,
    title: 'Ecommerce Development',
    description: `Your products deserve a top-notch digital home. I’ll build an ecommerce site that’s stylish, secure, and simple to manage, so you can focus on growing your business.`,
    originalPrice: 6200,
    discountedPrice: 5000,
  },
  {
    image: `./assets/social-marketing.png`,
    title: `Social Media Strategy`,
    description: `From content to campaigns, I’ll build a social media strategy that fits your brand and gets people talking (and clicking)!`,
    originalPrice: 3500,
  },
];

export default services;
