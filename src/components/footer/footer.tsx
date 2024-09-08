import Link from "next/link";
import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
const Footer = () => {
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

  return (
    <footer className="w-full bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 gap-12 pt-14 pb-20 max-w-md mx-auto md:max-w-xl lg:max-w-full text-white">
          <div>
            <h1 className="font-medium mb-5">Tech Blog</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <h1 className="mb-4 font-medium">Quick Links</h1>
            {Links.map((link, index) => {
              return (
                <div key={index}>
                  <Link href={link.path}>{link.name}</Link>
                </div>
              );
            })}
          </div>
          <div>
            <h1 className="mb-5 font-medium">Contact Us</h1>
            <div className="flex gap-3 justify-start items-center ">
            <CgMail className="w-8 h-8"/>rafiakhurshid00@gmail.com
            </div>
          <div className="flex gap-3 justify-start items-center">
            <FaPhoneAlt className="w-8 h-5" />Phone Number
          </div>
          <div className="flex gap-3 justify-start items-center">
            <MdLocationOn  className="w-8 h-8" /> Location
          </div>
    

          </div>
          <div>
            <h1 className="mb-5 font-medium">Follow us</h1>
            <div className="flex  gap-3">
              <div>
                <Link
                  href={"https://www.facebook.com/sheza.siddiqui1"}
                  target="_blank"
                >
                  <FaSquareFacebook className="w-10 h-10 hover:-rotate-12" />
                </Link>
              </div>
              <div>
                <Link
                  href={"https://www.facebook.com/sheza.siddiqui1"}
                  target="_blank"
                >
                  <FaWhatsappSquare className="w-10 h-10 hover:-rotate-12" />
                </Link>
              </div>
              <div>
                <Link
                  href={"https://www.facebook.com/sheza.siddiqui1"}
                  target="_blank"
                >
                  <FaTwitter className="w-10 h-10 hover:-rotate-12" />
                </Link>
              </div>
              <div>
                <Link
                  href={
                    "https://www.linkedin.com/in/rafia-khurshid-853510b7/recent-activity/all/"
                  }
                  target="_blank"
                >
                  <FaLinkedin className="w-10 h-10 hover:-rotate-12" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-7 border-t border-gray-700 ">
          <div className="flex justify-center flex-col items-center lg:space-y-0 xl:justify-between xl:flex-row text-white">
            <p>TecHives</p>
            <p>2024TechHives all rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
