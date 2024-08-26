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
          path: "/services",
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
    <div className='flex gap-8' >
      
    <nav className="flex gap-8 ">
      {Links.map((link, index) => (
       <>
          <Link
          key={index}
            href={link.path}
            className={`${
              link.path === PathName &&
              "text-white bg-black px-3 py-1 rounded-sm"
            } capatilize font-medium `}>
            {link.name}
          </Link>
          </>
      ))}
    </nav>
    </div>
  )
}

export default Navbar
