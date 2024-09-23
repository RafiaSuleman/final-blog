import Image from "next/image";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import { ArrowRight } from "lucide-react";
import { format, parseISO } from "date-fns";
import { sortBlogs } from "../utils";

export default function Home() {
  const blogs = sortBlogs(allBlogs);
  
  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    return words.length > wordLimit 
      ? words.slice(0, wordLimit).join(' ') + '...' 
      : text;
  };
  return (
    <div className="flex flex-col justify-center items-center gap-8 my-[30px]  overflow-x-hidden px-6 lg:px-10 h-auto">
     <div className="relative flex items-center justify-center h-96 w-full ">
            <Image
              src="/blogs/blogimage1.jpg"
              alt="image"
              height={800}
              width={1200}
              className=" h-full w-full object-cover"
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black to-transparent opacity-20"></div>
            <div className="absolute bottom-0 text-white text-xl  left-0 p-5  italic">
              <p>A modern blog built with <span className="font-semibold text-blue-200"> MDX, Tailwind CSS, Next.js, and TypeScript</span>.  <br/>It combines the power of Markdown  and React components,utility-first  <br/> styling, and server-side rendering for fast performance and SEO. TypeScript  <br/> ensures  type safety and maintainability, while Tailwind offers rapid, <br/> responsive design customization.</p>
            </div>
          </div>
       {/*    <div className="bg-gradient-to-br from-[#7899F6] to-[#EBA49A] h-64 w-full flex items-end justify-Left ">
        
            <div className="text-white text-2xl italic p-5 text-Left px-10 ">
            <p>
              <span className="font-semibold">Redefining the Digital Frontier</span> Stay informed <br/>with the latest tech news, innovations, and insights.<br/> Empower your digital journey with expert analysis<br/> and tips.</p>
            </div>
            <div className="absolute bottom-44 right-44 bg-gradient-to-br from-[#9c99d9] to-[#e8b0bf] h-40 w-40 rounded-3xl m-5">
              <div className="">
              <img
                      className="object-cover "
                     src="/logo.png"
                    />
            </div>
              </div>
           
           
          </div> */}
  
      {/* card */}
      <div className="relative bg-gray-50 pb-20  lg:pb-28 ">
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
      </div>

      {/* paggination */}
    </div>
  );
}
