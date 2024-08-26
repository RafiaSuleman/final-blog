'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import {CiMenuFries} from 'react-icons/ci'
import Link from 'next/link'

const Mobilenav = () => {
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
    const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
           <CiMenuFries className="text-[32px] text-black"/>
        </SheetTrigger>
        <SheetContent className='flex flex-col'>
            <div className='mb-[60px] text-center text-2xl'>
                <Link href='/'>
                <h1 className='text-4xl font-semibold'>UnitedUI</h1>
                </Link>
            </div> 
            <nav  className='flex flex-col justify-center items-center gap-8'>
                {Links.map((link,index)=>{
                    return(
                        <Link href={link.path} key={index} className={`${link.path===pathname &&" text-white bg-black px-2 py-2 rounded-sm"} "text-xl capitalize `}>
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default Mobilenav
