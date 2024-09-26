"use client";
import Image from "next/image";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import { ArrowRight } from "lucide-react";
import { format, parseISO } from "date-fns";
import { sortBlogs } from "../utils";
import { Button } from "@/components/ui/button";

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
          Stay updated with the latest insights, trends, and tips on Technology. Our curated articles provide valuable resources to inspire, educate, and keep you informed. Whether you're a seasoned expert or just starting, you'll find something useful to explore. Dive into our most recent posts and stay connected to what matters.
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

          {/* cards */}
          {/* <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
            {blogs.map((blog: any, index: any) => {
              return (
                <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                  <img
                    src={blog.image.filePath.replace("../public", "")}
                    alt={blog.authorName}
                    className="absolute inset-0 -z-10 h-full "
                  />

                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                  <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    {blog.author}{" "}
                    {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
                  </div>

                  {index === 0 && ( // Assuming the first blog is the latest blog
                    <div className="absolute top-0 right-0">
                      <div className="w-32 h-8 absolute top-4 -right-4">
                        <div className="h-full w-full bg-red-500 text-white text-center leading-8 font-semibold ">
                          Latest Blog
                        </div>
                      </div>
                    </div>
                  )}

                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <a href={blog.url}>
                      <span className="absolute inset-0"></span> {blog.title}
                    </a>
                  </h3>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
      {/* <div className="relative bg-gray-50 pb-20  lg:pb-28 ">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3"></div>
        </div>
        <div className="relative ">
          <div className=" grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3 md:grid-cols-2 align-content:space-between ">
            {blogs.map((blog: any, index: any) => {
              return (
                <div
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                  key={index}
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={blog.image.filePath.replace("../public", "")}
                      alt={blog.authorName}
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <h1 className="text-semibild text-sm">
                        {blog.author}{" "}
                        {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
                      </h1>
                      <Link href={blog.url} className="mt-2 block">
                        <div className="flex gap-5 justify-between text-xl font-semibold text-gray-900">
                          <h1 className="w-[90%]"> {blog.title} </h1>
                          <ArrowRight className="max-w-10" rotate={45} />
                        </div>
                        <p className="mt-3 text-base text-gray-500 ">
                        {truncateText(blog.description, 20)}
                        </p>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-sm">
                      <div className="border border-black px-2 py-1 rounded-full ">
                      {blog.tags[2]}
                      </div>
                      <div className="border border-black px-2 py-1 rounded-full ">
                        {blog.tags[1]}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}

      {/* paggination */}
    </div>
  );
}
