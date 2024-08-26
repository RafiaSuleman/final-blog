import Link from "next/link";
import React from "react";

const Footer = () => {

    const Link1 = [
        {
            link:"PRODUCT",
            url:"/"
        },
        {
            link:"overview",
            url:"/"
        },
        {
            link:"Fetures",
            url:"/"
        },
        {
            link:"Solutions",
            url:"/"
        },
        {
            link:"Tutorials",
            url:"/"
        },
        {
            link:"Pricing",
            url:"/"
        },
        {
            link:"Release",
            url:"/"
        },
    ]
    const Link2 = [
        {
            link:"COMPANY",
            url:"/"
        },
        {
            link:"About us",
            url:"/"
        },
        {
            link:"Careers",
            url:"/"
        },
        {
            link:"Press",
            url:"/"
        },
        {
            link:"News",
            url:"/"
        },
        {
            link:"MediLink kit",
            url:"/"
        },
        {
            link:"Conatct",
            url:"/"
        },
    ]
    const Link3 = [
        {
            link:"RESOURCES",
            url:"/"
        },
        {
            link:"Blog",
            url:"/"
        },
        {
            link:"Newsletter",
            url:"/"
        },
        {
            link:"Events",
            url:"/"
        },
        {
            link:"Help Center",
            url:"/"
        },
        {
            link:"Tutorials",
            url:"/"
        },
        {
            link:"Support",
            url:"/"
        },
    ]
    const Link4 = [
        {
            link:"USE CASES",
            url:"/"
        },
        {
            link:"Startups",
            url:"/"
        },
        {
            link:"Enterprice",
            url:"/"
        },
        {
            link:"Government",
            url:"/"
        },
        {
            link:"SaaS",
            url:"/"
        },
        {
            link:"Marketplace",
            url:"/"
        },
        {
            link:"Ecommerence",
            url:"/"
        },
    ]
    const Link5 = [
        {
            link:"SOCIAL",
            url:"/"
        },
        {
            link:"Twitter",
            url:"/"
        },
        {
            link:"linkedin",
            url:"/"
        },
        {
            link:"Facebook",
            url:"/"
        },
        {
            link:"GitHub",
            url:"/"
        },
        {
            link:"AngleList",
            url:"/"
        },
        {
            link:"Dribbble",
            url:"/"
        },
    ]
    const Link6 = [
        {
            link:"LEGAL",
            url:"/"
        },
        {
            link:"Terms",
            url:"/"
        },
        {
            link:"Privacy",
            url:"/"
        },
        {
            link:"Cookies",
            url:"/"
        },
        {
            link:"Licenses",
            url:"/"
        },
        {
            link:"Setting",
            url:"/"
        },
        {
            link:"Contact",
            url:"/"
        },
    ]
  return (
    <footer className="w-full bg-gray-900">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-11">
    <div className=" flex flex-col justify-center items-center text-white space-y-5">
        <h1>Let us get started on something</h1>
        <p className="text-sm">
          Join over 4,000+ startups already growing with United
        </p>
        <Link href="/" className="border rounded-full px-3 py-3">
          {" "}
          Start your 7-day free trail today
        </Link>
      </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 lg:gap-8 gap-12 pt-14 pb-20 max-w-md mx-auto md:max-w-xl lg:max-w-full">
            <div className="block">
                    <ul className="text-lg  transition-all duration-500">
                    {Link1.map((list,index)=>{
                         return (
                            <div key={index}  >
                                  <li className="mb-6"><Link href={list.url}  className="text-gray-400 hover:text-white">{list.link}</Link></li>
                            </div>)
                     })}
                    </ul>
                </div>


            <div className="block">
                    <ul className="text-lg  transition-all duration-500">
                    {Link2.map((list,index)=>{
                         return (
                            <div key={index}  >
                                  <li className="mb-6"><Link href={list.url}  className="text-gray-400 hover:text-white">{list.link}</Link></li>
                            </div>)
                     })}
                    </ul>
                </div>
            <div className="block">
                    <ul className="text-lg  transition-all duration-500">
                    {Link3.map((list,index)=>{
                         return (
                            <div key={index}  >
                                  <li className="mb-6"><Link href={list.url}  className="text-gray-400 hover:text-white">{list.link}</Link></li>
                            </div>)
                     })}
                    </ul>
                </div>
            <div className="block">
                    <ul className="text-lg  transition-all duration-500">
                    {Link4.map((list,index)=>{
                         return (
                            <div key={index}  >
                                  <li className="mb-6"><Link href={list.url}  className="text-gray-400 hover:text-white">{list.link}</Link></li>
                            </div>)
                     })}
                    </ul>
                </div>
            <div className="block">
                    <ul className="text-lg  transition-all duration-500">
                    {Link5.map((list,index)=>{
                         return (
                            <div key={index}  >
                                  <li className="mb-6"><Link href={list.url}  className="text-gray-400 hover:text-white">{list.link}</Link></li>
                            </div>)
                     })}
                    </ul>
                </div>
            <div className="block">
                    <ul className="text-lg  transition-all duration-500">
                    {Link6.map((list,index)=>{
                         return (
                            <div key={index}  >
                                  <li className="mb-6"><Link href={list.url}  className="text-gray-400 hover:text-white">{list.link}</Link></li>
                            </div>)
                     })}
                    </ul>
                </div>
         </div>
        <div className="py-7 border-t border-gray-700 ">
            <div className="flex justify-center flex-col items-center lg:space-y-0 xl:justify-between xl:flex-row text-white">
               <p>TechGleam</p>
               <p>2077TechGleam all rights reserved</p>
            </div>
        </div>
    </div>
</footer>
  );
};

export default Footer;
