'use client'
import React from "react";
import Image from "next/image";
import  Link  from "next/link";

const Productpage = () => {

    const cards = [
        {
            title:'Blog Post Title',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, labore.',
            imageUrl:"/pic1.jpg",
                tag1:'alif',
                tag2:'baa',
                tag3:'taa',
        },
        {
            title:'Blog Post Title',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, labore.',
            imageUrl:"/pic1.jpg",
                tag1:'tag1',
                tag2:'tag2',
                tag3:'tag3',
           
        },
        {
            title:'Blog Post Title',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, labore.',
            imageUrl:"/pic1.jpg",     
                tag1:'tag1',
                tag2:'tag2',
                tag3:'tag3', 
        },
        {
            title:'Blog Post Title',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, labore.',
            imageUrl:"/pic1.jpg", 
                tag1:'tag1',
                tag2:'tag2',
                tag3:'tag3',
         
        },
        {
            title:'Blog Post Title',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, labore.',
            imageUrl:"/pic1.jpg",    
                tag1:'tag1',
                tag2:'tag2',
                tag3:'tag3',
          
        },
        {
            title:'Blog Post Title',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, labore.',
            imageUrl:"/pic1.jpg",
                tag1:'tag1',
                tag2:'tag2',
                tag3:'tag3',
        
        },
        {
            title:'Blog Post Title',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, labore.',
            imageUrl:"/pic1.jpg",  
                tag1:'tag1',
                tag2:'tag2',
                tag3:'tag3',
            
        },
        {
            title:'Blog Post Title',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, labore.',
            imageUrl:"/pic1.jpg",
                tag1:'tag1',
                tag2:'tag2',
                tag3:'tag3',
           
        },
    ]

  return (
    <div className="flex flex-col justify-center items-center">
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative ">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-7">
            <div>
            <Image src="/img1.jpg" alt="image" height={50} width={400} />
            </div>
            <div className="col-span-2">
            <div className="grid grid-rows-4">
            <div className="flex items-start mb-3 pb-3">
                <a href="#" className="inline-block mr-3">
                <div
                    className="w-20 h-20 bg-cover bg-center">
                    <Image src="/img2.jpg" alt="image" height={10} width={70} />
                </div>
                </a>
                <div className="text-sm space-y-3">
                <a href="#">
                        <h1 className="text-gray-900 font-medium leading-none">Cristiano Ronaldo of Juventus FC looks dejected during the...</h1> 
                        <p>Lorem ipsum dolor sit amet.</p>
                </a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores, labore doloremque tempora expedita laborum eligendi cumque exercitationem .</p>
                </div>
            </div>
            <div className="flex items-start mb-3 pb-3">
                <a href="#" className="inline-block mr-3">
                <div
                    className="w-20 h-20 bg-cover bg-center">
                    <Image src="/img3.jpg" alt="image" height={10} width={70} />
                </div>
                </a>
                <div className="text-sm space-y-3">
                <a href="#">
                        <h1 className="text-gray-900 font-medium leading-none">Cristiano Ronaldo of Juventus FC looks dejected during the...</h1> 
                        <p>Lorem ipsum dolor sit amet.</p>
                </a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores, labore doloremque tempora expedita laborum eligendi cumque exercitationem .</p>
                </div>
            </div>
            <div className="flex items-start mb-3 pb-3">
                <a href="#" className="inline-block mr-3">
                <div
                    className="w-20 h-20 bg-cover bg-center">
                    <Image src="/img4.jpg" alt="image" height={10} width={70} />
                </div>
                </a>
                <div className="text-sm space-y-3">
                <a href="#">
                        <h1 className="text-gray-900 font-medium leading-none">Cristiano Ronaldo of Juventus FC looks dejected during the...</h1> 
                        <p>Lorem ipsum dolor sit amet.</p>
                </a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores, labore doloremque tempora expedita laborum eligendi cumque exercitationem .</p>
                </div>
            </div>
            <div className="flex items-start mb-3 pb-3">
                <a href="#" className="inline-block mr-3">
                <div
                    className="w-20 h-20 bg-cover bg-center">
                    <Image src="/img2.jpg" alt="image" height={10} width={70} />
                </div>
                </a>
                <div className="text-sm space-y-3">
                <a href="#">
                        <h1 className="text-gray-900 font-medium leading-none">Cristiano Ronaldo of Juventus FC looks dejected during the...</h1> 
                        <p>Lorem ipsum dolor sit amet.</p>
                </a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores, labore doloremque tempora expedita laborum eligendi cumque exercitationem .</p>
                </div>
            </div>
            </div>
            </div>
        </div>
        </div>

        {/* cards */}
        <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
            <div className="absolute inset-0">
             <div className="h-1/3 bg-white sm:h-2/3"></div>
             </div>
  <div className="relative mx-auto max-w-7xl">
    <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
        {cards.map((card, index) => {
              return (
                        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg " key={index}>
                            <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover" src={card.imageUrl} alt=""/>
                            </div>
                            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                            <div className="flex-1">
                                <h1 className="text-xl font-semibold text-gray-900">{card.title}</h1>
                                <div className="flex gap-4 text-sm font-medium text-[#B09953] ">
                                    <div>{card.tag1}</div>
                                    <div>{card.tag2}</div>
                                    <div>{card.tag3}</div>
                                </div>
                                <a href="#" className="mt-2 block">
                               
                                <p className="mt-3 text-base text-gray-500">{card.description}</p>
                                </a>
                            </div>
                            <div className="mt-6 flex items-center">           
                                <p className="text-sm font-medium text-gray-900">
                                    <Link href="#" className="hover:underline hover:text-[#B09953]">Read more</Link>
                                </p>
                            </div>
                            </div>
                        </div>
              )})}
    </div>
  </div>
</div>
    </div>
  );
};

export default Productpage;
