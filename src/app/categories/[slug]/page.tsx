"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sortBlogs } from "@/src/utils";
import { allBlogs } from "@/.contentlayer/generated";
import { slug } from "github-slugger";
import Categories from "@/src/components/blog/categories";

const CategoryPage = ({ params }: any) => {
  const sortedBlogs = sortBlogs(allBlogs);
  const featureblog = sortedBlogs[0];
  const allCategories = ["all"];

  const filterblogs = allBlogs.filter((blog: any) => {
    return blog.tags.some((tag: any) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (params.slug === "all") {
        return true;
      }
      return slugified === params.slug;
    });
  });
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16  ">
        {/* hero Image */}
        <div className="relative flex items-center justify-center h-full w-full ">
            <Image
              src={featureblog.image.filePath.replace("../public", "")}
              alt="image"
              height={800}
              width={1200}
              className="relative z-0 h-full w-full"
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div className="absolute bottom-0 text-white text-xl font-bold left-0 p-5  ">
              {featureblog.title}
            </div>
          </div>
        
      </div>

      {/* cards */}
      <div className="relative bg-gray-50 px-6  pb-20 lg:px-8 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3"></div>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <Categories categories={allCategories} currentSlug={params.slug} />
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {filterblogs.map((blog: any, index) => (
              <div
                className="flex flex-col overflow-hidden rounded-lg shadow-lg "
                key={index}
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={blog.image.filePath.replace("../public", "")}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <h1 className="text-xl font-semibold text-gray-900">
                      {blog.title}
                    </h1>
                    
                    <a href="#" className="mt-4 block">
                      <p className="mt-3 text-base text-gray-500">
                        {blog.description}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <p className="text-sm font-medium text-gray-900">
                      <Link
                        href={blog.url}
                        className="hover:underline hover:text-[#B09953]"
                      >
                        Read more
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
