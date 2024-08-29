import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Navbar from "./navlinks";
import Mobilenav from "./mobilenav";
import Image from "next/image";
const Header = () => {
  return (
    <header className="container py-5 xl:py-8  sticky top-0 bg-white text-black z-50  mx-auto flex  items-center justify-between">    
        <Link href="/">
          <div className="flex gap-2">
            <Image src="/logo.png" width={50} height={100} alt="tech hives" />
            <h1 className=" text-4xl font-semibold">TechHive</h1>
          </div>
        </Link>
        <div className="hidden xl:block">
        <Navbar />
        </div>
       
        <div className="hidden xl:flex gap-8 items-center ">
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/signup">
            <Button className="flex items-center">SignUp</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <Mobilenav />
        </div>
   
    </header>
  );
};

export default Header;
