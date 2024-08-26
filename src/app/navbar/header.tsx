import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'
import Navbar from './navbar';
import Mobilenav from './mobilenav';

const Header = () => {
  return (
    <header className="py-8 xl:py-12  text-black z-50">
    <div className=" container mx-auto flex  items-center justify-between">
    
      <Link href="/">
        <h1 className=" text-2xl font-semibold">
         UnitedUI<span className="text-accent">.</span>
        </h1>
      </Link>
      <div className="hidden xl:flex gap-8 items-center ">
        <Navbar />
        <Link href="/login">
          <Button >Login</Button>
        </Link>
        <Link href="/signup">
          <Button className="flex items-center">SignUp</Button>
        </Link>
      </div>
      <div className="xl:hidden"><Mobilenav/></div>
    </div>
  </header>
  );
};

export default Header
