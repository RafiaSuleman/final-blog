import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import Footer from "./footer/footer";
import Sidebar from "./sidebar/sidebar";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ArrowRight, Tag } from "lucide-react";

export default function Home() {
  const images = ["/pic1.jpg", "/pic6.jpg", "/pic7.jpg"];
  const cards = [
    {
      img: "/pic1.jpg",
      authorName: "Danil  ",
      title: "PM Mental Mode",
      date: "20 June 2022",
      url: "/",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit,sit, amet consectetur adipisicing elit. ",
      tag1: "Product",
      tag2: "Framework",
    },

    {
      img: "/pic6.jpg",
      authorName: "cece",
      date: "5 January 22",
      title: "What is wireframing",
      url: "/",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit,sit, amet consectetur adipisicing elit. ",
      tag1: "Design",
      tag2: "Reserch",
    },

    {
      img: "/pic7.jpg",
      authorName: "Wendi",
      date: "17 March 2023",
      title: "How collaboration make us better design",
      url: "/",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit,sit, amet consectetur adipisicing elit. ",
      tag1: "Design",
      tag2: "Reserch",
    },

    {
      img: "/pic7.jpg",
      authorName: "Wendi",
      date: "17 March 2023",
      title: "How collaboration make us better design",
      url: "/",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit,sit, amet consectetur adipisicing elit. ",
      tag1: "Design",
      tag2: "Reserch",
    },

    {
      img: "/pic7.jpg",
      authorName: "Wendi",
      date: "17 March 2023",
      title: "How collaboration make us better design",
      url: "/",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit,sit, amet consectetur adipisicing elit. ",
      tag1: "Design",
      tag2: "Reserch",
    },

    {
      img: "/pic7.jpg",
      authorName: "Wendi",
      date: "17 March 2023",
      title: "How collaboration make us better design",
      url: "/",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit,sit, amet consectetur adipisicing elit. ",
      tag1: "Design",
      tag2: "Reserch",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-8 my-[30px] py-10 overflow-x-hidden px-6 lg:px-10 h-auto">
      <div className="flex flex-col justify-center items-center xl:space-y-2 space-y-4 text-center">
        <p>The Blog</p>
        <h1 className="text-3xl font-bold">Writtings from our Team</h1>
        <p>The Latest Industry news, Interviews, technolodies, and resources</p>
      </div>

  
        <Image
          src="/pic1.jpg"
          className="rounded-lg w-full "
          height={700}
          width={700}
          alt=""
        />

      {/* card */}
      <div className="relative bg-gray-50 pb-20  lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3"></div>
        </div>
        <div className="relative ">
          <div className=" mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {cards.map((card, index) => {
              return (
                <div
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                  key={index}
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={card.img}
                      alt={card.authorName}
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <h1 className="text-semibild text-sm">
                        {card.authorName} {card.date}
                      </h1>
                      <Link href="#" className="mt-2 block">
                        <div className="flex gap-5 justify-between text-xl font-semibold text-gray-900">
                          <h1 className="w-[90%]"> {card.title} </h1>
                          <ArrowRight className="max-w-10" rotate={45}/>
                        </div>
                        <p className="mt-3 text-base text-gray-500">
                          {card.description}
                        </p>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center gap-2">
                        <div className="border border-black px-2 py-1 rounded-full bg-green-100">{card.tag1}</div>
                        <div  className="border border-black px-2 py-1 rounded-full bg-yellow-100">{card.tag2}</div>
                      
                    </div>
                
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* paggination */}
      <div className="mt-[40px]">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <Footer />
    </div>
  );
}
