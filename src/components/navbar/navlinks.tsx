'use client'

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
          name: "Product",
          path: "/product",
        },

        {
          name: "Resources",
          path: "/resources",
        },
        {
          name: "Pricing",
          path: "/pricing",
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
    </nav>
  )
}

export default Navbar
