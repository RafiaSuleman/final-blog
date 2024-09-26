import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  const Links = [
    {
      name: "Blog",
      path: "/",
    },
    {
      name: "Careers",
      path: "/",
    },

    {
      name: "Pricing",
      path: "/",
    },
  ];
  const Links1 = [
    {
      name: "Documentations",
      path: "/",
    },
    {
      name: "Papers",
      path: "/",
    },

    {
      name: "Press Conferences",
      path: "/",
    },
  ];
  const Links2 = [
    {
      name: "Terms of Service",
      path: "/",
    },
    {
      name: "Privacy Policy",
      path: "/",
    },

    {
      name: "Cookies Policy",
      path: "/",
    },
    {
      name: "Data Processing",
      path: "/",
    },
  ];

  return (
    <footer className="w-full bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1  text-sm text-white">
        <div>
         
            <h1 className="mt-8 font-medium mb-5">TechHives</h1>
            {/* <p>Explore diverse topics with expert insights, from technology and business to lifestyle and creativity. Stay informed and inspired with our latest blogs.</p> */}
            <p>Diverse expert insights across topics.</p>
          </div>
          <div className="grid xl:grid-cols-3 grid-cols-2 pt-14 pb-10  lg:max-w-full text-white gap-5">
         
          <div>
            <h1 className="mb-4 font-medium">COMPANY</h1>
            {Links.map((link, index) => {
              return (
                <div key={index}>
                  <Link href={link.path}>{link.name}</Link>
                </div>
              );
            })}
          </div>
          <div>
            <h1 className="mb-4">RESOURCES</h1>
            {Links1.map((link, index) => {
              return (
                <div key={index}>
                  <Link href={link.path}>{link.name}</Link>
                </div>
              );
            })}
          </div>
          <div>
            <h1 className=" font-medium ">LEGAL</h1>
            {Links2.map((link, index) => {
              return (
                <div key={index}>
                  <Link href={link.path}>{link.name}</Link>
                </div>
              );
            })}
          </div>
        </div>
        </div>
       
        <div className="py-7 border-t border-gray-700 ">
          <div className="flex flex-col xl:justify-between mx-auto items-center xl:flex-row text-white">
            <div > <p>©2024techHives All rights reserved</p></div>
            
            <div className="flex gap-3 text-right ml-auto">
            <Link
                  href={"https://www.facebook.com/sheza.siddiqui1"}
                  target="_blank"
                >
                  <FaSquareFacebook className="w-7 h-10 hover:-rotate-12" />
                </Link>
                <Link
                  href={
                    "https://www.linkedin.com/in/rafia-khurshid-853510b7/recent-activity/all/"
                  }
                  target="_blank"
                >
                  <FaLinkedin className="w-7 h-10  hover:-rotate-12" />
                </Link>
                <Link
                  href={"https://www.facebook.com/sheza.siddiqui1"}
                  target="_blank"
                >
                  <FaWhatsappSquare className="w-7 h-10  hover:-rotate-12" />
                </Link>
            </div>
           
            <p>

            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
