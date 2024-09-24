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
          <h1 className="text-2xl font-bold  mb-6"> Latest Blog</h1>
          <p>
            Artificial Intelligence (AI) enhances efficiency, automates tasks,
            and reduces human error . However, it also raises concerns about job
            displacement, creativity limitations, and increased dependency on
            machines ... <a href="/">Readmore</a>
          </p>
        </div>
        <div>
          <Image src="/blogs/blogimage1.png" height={300} width="300" alt="" />
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
          <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
            {/* <!-- First blog post --> */}
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
          </div>
          {/* div end */}
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
