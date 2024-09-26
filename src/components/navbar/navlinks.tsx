'use client'
import { Button } from '@/components/ui/button';
import React from 'react'
import { usePathname } from "next/navigation";
import Link from "next/link";
const Navbar = () => {
    const Links = [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Categories",
          path: "/categories/all",
        },

        {
          name: "Popular Blogs",
          path: "/popularblogs",
        },
        
      ];
      const PathName = usePathname();
  return ( 
    <nav className="flex items-center justify-center gap-8 ">
      {Links.map((link, index) => (
       <>
          <Link
          key={index}
            href={link.path}
            className={`${
              link.path === PathName &&
              " hover:bg-zinc-200 px-3 py-1 rounded-sm"
            } capatilize font-medium `}>
            {link.name}
          </Link>
          </>
      ))}
      <Button className='bg-button'>Contact Us</Button>
    </nav>
  )
}

export default Navbar
