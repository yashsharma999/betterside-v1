'use client';

import { Button } from "@/components/ui/button";
import Drawer from "./Drawer";
import CartDetails from "./CartDetails";
import { useState } from "react";

export default function DropAMessage() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <Button onClick={() => setShowDrawer(true)} variant={'outline'} className='font-bold'>
        Drop a message
      </Button>
      
      <Drawer showDrawer={showDrawer} onClose={() => setShowDrawer(false)}>
        <CartDetails
          onClose={() => {
            setShowDrawer(false);     
          }}
          noCart={true}
        />
      </Drawer>
      
    </>
  );
}
