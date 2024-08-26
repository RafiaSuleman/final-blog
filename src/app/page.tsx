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


export default function Home() {
  const images = ["/pic1.jpg", "/pic6.jpg", "/pic7.jpg"];
  const card1 = [
    {
      img: "/pic1.jpg",
      names: "Danil  ",
      title: "PM Mental Mode",
      date: "20 June 2022",
      url: "/",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit,sit, amet consectetur adipisicing elit. ",
      tag1: "Product",
      tag3: "Reserch",
      tag2: "Framework",
    },
  ]
    const card2 =[
    {
      img: "/pic6.jpg",
      names: "cece",
      date: "5 January 22",
      title: "What is wireframing",
      url: "/",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit,sit, amet consectetur adipisicing elit. ",
      tag1: "Design",
      tag2: "Reserch",
    },
  ]
   const card3 = [ 
    {
      img: "/pic7.jpg",
      names: "Wendi",
      date: "17 March 2023",
      title: "How collaboration make us better design",
      url: "/",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit,sit, amet consectetur adipisicing elit. ",
      tag1: "Design",
      tag2: "Reserch",
    }
  ]
  const card4 = [
    {
      img: "/pic7.jpg",
      names: "Wendi",
      date: "17 March 2023",
      title: "How collaboration make us better design",
      url: "/",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit,sit, amet consectetur adipisicing elit. ",
      tag1: "Design",
      tag2: "Reserch",
    },
  ]
  const card5 = [
    {
      img: "/pic7.jpg",
      names: "Wendi",
      date: "17 March 2023",
      title: "How collaboration make us better design",
      url: "/",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit,sit, amet consectetur adipisicing elit. ",
      tag1: "Design",
      tag2: "Reserch",
    },
  ]
  const card6 = [
    {
      img: "/pic7.jpg",
      names: "Wendi",
      date: "17 March 2023",
      title: "How collaboration make us better design",
      url: "/",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit,sit, amet consectetur adipisicing elit. ",
      tag1: "Design",
      tag2: "Reserch",
    },
  ]
   

  return (
      <div className="flex flex-col justify-center items-center gap-8 my-[30px] p-10 overflow-x-hidden overflow-hidden ">
        <div className="flex flex-col justify-center items-center xl:space-y-2 space-y-4 text-center">
          <p>The Blog</p>
          <h1 className="text-3xl font-bold">Writtings from our Team</h1>
          <p>
            The Latest Industry news, Interviews, technolodies, and resources
          </p>
        </div>

        <div>
          <Image
            src="/pic1.jpg"
            className="rounded-lg w-full "
            height={700}
            width={700}
            alt=""
          />
        </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
        {card1.map((card, index) => {
                return (
                  <div
                    key={index}
                    className="flex-1 flex flex-col justify-left space-y-4 w-80"
                  >
                    <Image
                      src={card.img}
                      width="350"
                      height="50"
                      alt="img"
                      className="rounded-lg"
                    />
                    <p>
                      {card.names} {card.date}
                    </p>
                    <div className="flex flex-row">
                      <Link href={card.url} className="font-bold">
                        {card.title}
                        <BsArrowUpRight />
                      </Link>
                    </div>
                    <p>{card.description}</p>

                    <div className="flex flex-row gap-1">
                      <div className="border border-black-2 px-3 py-2 rounded-full">
                        {card.tag1}
                      </div>
                      <div className="border border-black-2 px-3 py-2 rounded-full">
                        {card.tag2}
                      </div>
                    </div>
                  </div>
                );
              })}
        
         {card2.map((card, index) => {
                return (
                  <div
                    key={index}
                    className="flex-1 flex flex-col justify-left  w-80 space-y-4"
                  >
                    <Image
                      src={card.img}
                      width="350"
                      height="50"
                      alt="img"
                      className="rounded-lg"
                    />
                    <p>
                      {card.names} {card.date}
                    </p>
                    <div className="flex flex-row">
                      <Link href={card.url} className="font-bold">
                        {card.title}
                        <BsArrowUpRight />
                      </Link>
                    </div>
                    <p>{card.description}</p>

                    <div className="flex flex-row gap-1">
                      <div className="border border-black-2 px-3 py-2 rounded-full">
                        {card.tag1}
                      </div>
                      <div className="border border-black-2 px-3 py-2 rounded-full">
                        {card.tag2}
                      </div>
                    </div>
                  </div>
                );
              })}
         {card3.map((card, index) => {
                return (
                  <div
                    key={index}
                    className="flex-1 flex flex-col justify-left  w-80 space-y-4"
                  >
                    <Image
                      src={card.img}
                      width="350"
                      height="50"
                      alt="img"
                      className="rounded-lg"
                    />
                    <p>
                      {card.names} {card.date}
                    </p>
                    <div className="flex flex-row">
                      <Link href={card.url} className="font-bold">
                        {card.title}
                        <BsArrowUpRight />
                      </Link>
                    </div>
                    <p>{card.description}</p>

                    <div className="flex flex-row gap-1">
                      <div className="border border-black-2 px-3 py-2 rounded-full">
                        {card.tag1}
                      </div>
                      <div className="border border-black-2 px-3 py-2 rounded-full">
                        {card.tag2}
                      </div>
                    </div>
                  </div>
                );
              })}
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
        {card4.map((card, index) => {
                return (
                  <div
                    key={index}
                    className="flex-1 flex flex-col justify-left  w-80"
                  >
                    <Image
                      src={card.img}
                      width="350"
                      height="50"
                      alt="img"
                      className="rounded-lg"
                    />
                    <p>
                      {card.names} {card.date}
                    </p>
                    <div className="flex flex-row">
                      <Link href={card.url} className="font-bold">
                        {card.title}
                        <BsArrowUpRight />
                      </Link>
                    </div>
                    <p>{card.description}</p>

                    <div className="flex flex-row gap-1">
                      <div className="border border-black-2 px-3 py-2 rounded-full">
                        {card.tag1}
                      </div>
                      <div className="border border-black-2 px-3 py-2 rounded-full">
                        {card.tag2}
                      </div>
                    </div>
                  </div>
                );
              })}
         {card5.map((card, index) => {
                return (
                  <div
                    key={index}
                    className="flex-1 flex flex-col justify-left  w-80"
                  >
                    <Image
                      src={card.img}
                      width="350"
                      height="50"
                      alt="img"
                      className="rounded-lg"
                    />
                    <p>
                      {card.names} {card.date}
                    </p>
                    <div className="flex flex-row">
                      <Link href={card.url} className="font-bold">
                        {card.title}
                        <BsArrowUpRight />
                      </Link>
                    </div>
                    <p>{card.description}</p>

                    <div className="flex flex-row gap-1">
                      <div className="border border-black-2 px-3 py-2 rounded-full">
                        {card.tag1}
                      </div>
                      <div className="border border-black-2 px-3 py-2 rounded-full">
                        {card.tag2}
                      </div>
                    </div>
                  </div>
                );
              })}
          {card6.map((card, index) => {
                return (
                  <div
                    key={index}
                    className="flex-1 flex flex-col justify-left  w-80"
                  >
                    <Image
                      src={card.img}
                      width="350"
                      height="50"
                      alt="img"
                      className="rounded-lg"
                    />
                    <p>
                      {card.names} {card.date}
                    </p>
                    <div className="flex flex-row">
                      <Link href={card.url} className="font-bold">
                        {card.title}
                        <BsArrowUpRight />
                      </Link>
                    </div>
                    <p>{card.description}</p>

                    <div className="flex flex-row gap-1">
                      <div className="border border-black-2 px-3 py-2 rounded-full">
                        {card.tag1}
                      </div>
                      <div className="border border-black-2 px-3 py-2 rounded-full">
                        {card.tag2}
                      </div>
                    </div>
                  </div>
                );
              })}
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

        <Footer/>
      </div>
  );
}
