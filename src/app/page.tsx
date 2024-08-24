import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import Footer from "./footer/footer";
import Sidebar from "./sidebar/sidebar";


export default function Home() {

  const images = ["/pic1.jpg", "/pic6.jpg", "/pic7.jpg"];
  const cards = [
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
    <div>
    <div className="flex flex-col justify-center items-center gap-8 my-[90px] p-10 ">
      <div className="flex flex-col justify-center items-center xl:space-y-2 space-y-4 text-center">
        <p>The Blog</p>
        <h1 className="text-3xl font-bold">Writtings from our Team</h1>
        <p>The Latest Industry news, Interviews, technolodies, and resources</p>
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
      <div className="flex flex-row gap-4">
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              height={15}
              width={200}
              className="w-full "
              alt="img"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12">
        
          <div className="col-span-10">
                  {/* cards */}
           <div className="grid grid-cols-1 xl:grid-cols-4 gap-3 text-left ">
            {cards.map((card,index)=>{
                    return <div key={index} className="flex-1 flex flex-col justify-left gap-2 group">
                        <Image src={card.img} width="350" height="50" alt="img" className="rounded-lg" />
                        <p>{card.names} {card.date}</p>
                        <div className="flex flex-row">
                        <Link href={card.url} className="font-bold">{card.title}
                        <BsArrowUpRight/>
                        </Link></div>
                        <p>{card.description}</p>
                        
                        <div className="flex flex-row gap-1">
                          <div className="border border-black-2 px-3 py-2 rounded-full">{card.tag1}</div>
                          <div className="border border-black-2 px-3 py-2 rounded-full">{card.tag2}</div>
                        </div>
                    </div>
                  })}
          </div> 
          </div>
          <div className="col-span-2">
            <Sidebar/>
          </div>
      </div> 
      </div>
       <Footer/>
    </div>
  );
}
