"use client";
import Image from "next/image";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import { ArrowRight } from "lucide-react";
import { format, parseISO } from "date-fns";
import { sortBlogs } from "../utils";
import { Button } from "@/components/ui/button";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  const blogs = sortBlogs(allBlogs);

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };
  return (
    <div className="flex flex-col justify-center items-center  overflow-x-hidden px-6 lg:px-10 ">
      <div className="relative grid xl:grid-cols-2 grid-cols-1 space-y-6  justify-items-end w-full lg:px-10 px-5 ">
        <div className="flex flex-col justify-center items-start">
          <h1 className="lg:text-8xl text-4xl font-bold  mb-6"> Welcome to Our Blog </h1>
          <div className="flex gap-3 "><div className="border-4 border-[#4c1d95]"></div>
          <div >
          <p>
          Stay updated with the latest insights, trends, and tips on Technology. Our curated articles provide valuable resources to inspire, educate, and keep you informed. Whether you are a seasoned expert or just starting, you will find something useful to explore. Dive into our most recent posts and stay connected to what matters.
          </p>
         
          </div>
        
          </div>
          <Button className="mt-6 bg-button" >Readmore</Button>
        </div>
        <div>
          <Image src="/blogs/image10.png" height={300} width="250" alt="" />
        </div>
      </div>

      {/* card */}
      <div className="w-full dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              From The Blog
            </h2>
         
             
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Dive into the latest in technology with our insightful blog posts.
            </p>
         
           
          </div>
          {/* card example2 */}
          <div className=" mx-auto p-5 gap-8 grid xl:grid-cols-3 grid-cols-1">
          {blogs.map((blog: any, index: any) => {
              return (
                <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto" key={index}>
             
                <div className="relative">
                  <a href={blog.url}>
                   
                    <img
                      className="w-full shadow-2xl"
                      src={blog.image.filePath.replace("../public", "")}
                      alt={blog.authorName}
                    />
                  
                  </a>
                  {index === 0 && ( // Assuming the first blog is the latest blog
                    <div className="absolute top-0 right-0">
                      <div className="w-32 h-8 absolute top-4 -right-4">
                        <div className="h-full w-full bg-red-500 text-white text-center leading-8 font-semibold ">
                          Latest Blog
                        </div>
                      </div>
                    </div>
                  )}
                  <a
                   href={blog.url}
                    className="hidden absolute z-10 text-xs bottom-0 right-0 bg-indigo-600 px-6 m-2 py-2 text-white hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out sm:flex items-center"
                  >
                    <span className="text-lg">|</span>&nbsp;&nbsp;
                    <span>Read more</span>
                  </a>
                  
                </div>
                <a
                  href="#"
                  className="text-xl mt-5 font-semibold inline-block hover:text-indigo-600 transition duration-500 ease-in-out "
                >
                  {blog.title}
                </a>
  
                <p className="text-gray-700 py-5 text-base leading-8">
                {truncateText(blog.description, 13)}
                </p>
                <div className="text-sm font-regular text-gray-900 flex">
                  <a
                    href="#"
                    className="flex flex-row items-center hover:text-indigo-600"
                  >
                    <svg
                      className="text-indigo-600"
                      fill="currentColor"
                      height="16px"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                      ></path>
                      <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                    <span className="ml-1">{blog.author}</span>
                  </a>
                </div>
              </div>
              );
            })}
          
          </div>

      
        </div>
      </div>
     
    </div>
  );
}
