'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  useClickAway,
  useLockBodyScroll,
  useWindowSize,
} from '@uidotdev/usehooks';

export default function Drawer({
  showDrawer = false,
  children,
  onClose,
}: {
  showDrawer: boolean;
  children: React.ReactNode;
  onClose: () => void;
}) {
  const { width } = useWindowSize();
  const isMobile = width ? width < 768 : false;

  return (
    <AnimatePresence>
      {showDrawer && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.4,
            }}
            exit={{
              opacity: 0,
            }}
            className='fixed top-0 left-0 z-30 bg-black h-screen w-screen'
          ></motion.div>
          <WhiteDrawer
            isMobile={isMobile}
            onClose={onClose}
            children={children}
          />
        </>
      )}
    </AnimatePresence>
  );
}

const WhiteDrawer = ({
  children,
  onClose,
  isMobile,
}: {
  children: React.ReactNode;
  onClose: () => void;
  isMobile: boolean;
}) => {
  const ref = useClickAway(() => {
    onClose();
  });

  useLockBodyScroll();

  return (
    <motion.div
      //@ts-expect-error
      ref={ref}
      className={`fixed bottom-0 right-0 bg-white h-[100svh] w-full md:w-[400px]
shadow-lg z-[999] rounded-tl-[30px] rounded-tr-[30px] md:rounded-tr-[0px] rounded-bl-[0px] md:!rounded-bl-[30px] md:rounded-tl-[30px] overflow-y-scroll
`}
      initial={isMobile ? { y: '100%' } : { x: '100%' }}
      animate={isMobile ? { y: '0%' } : { x: '0%' }}
      exit={isMobile ? { y: '100%' } : { x: '100%' }}
      transition={{
        type: 'spring',
        bounce: 0.05,
        mass: 0.25,
      }}
    >
      <div className='flex sticky bg-white justify-end p-4'>
        <button onClick={onClose} className='!bg-transparent p-3'>
          <img src={'./assets/close.svg'} alt='close' />
        </button>
      </div>
      {children}
    </motion.div>
  );
};
