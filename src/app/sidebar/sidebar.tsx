import Link from 'next/link'
import React from 'react'

const Sidebar = () => {

    const Link1 = [
        {
            link:"Product",
            url:"/"
        },
        {
            link:"overview",
            url:"/"
        },
        {
            link:"Fetures",
            url:"/"
        },
        {
            link:"Solutions",
            url:"/"
        },
        {
            link:"Tutorials",
            url:"/"
        },
        {
            link:"Pricing",
            url:"/"
        },
        {
            link:"Release",
            url:"/"
        },
        {
            link:"Resourses",
            url:"/"
        },
        {
            link:"Blog",
            url:"/"
        },
        {
            link:"Newsletter",
            url:"/"
        },
        {
            link:"Events",
            url:"/"
        },
        {
            link:"Help Center",
            url:"/"
        },
        {
            link:"Tutorials",
            url:"/"
        },
        {
            link:"Support",
            url:"/"
        },
        {
            link:"Social",
            url:"/"
        },
        {
            link:"Twitter",
            url:"/"
        },
        {
            link:"linkedin",
            url:"/"
        },
        {
            link:"Facebook",
            url:"/"
        },
        {
            link:"GitHub",
            url:"/"
        },
        {
            link:"AngleList",
            url:"/"
        },
        {
            link:"Dribbble",
            url:"/"
        },
    ]
    const Link2 = [
        {
            link:"Company",
            url:"/"
        },
        {
            link:"About us",
            url:"/"
        },
        {
            link:"Careers",
            url:"/"
        },
        {
            link:"Press",
            url:"/"
        },
        {
            link:"News",
            url:"/"
        },
        {
            link:"Media kit",
            url:"/"
        },
        {
            link:"Conatct",
            url:"/"
        },
        {
            link:"Use Case",
            url:"/"
        },
        {
            link:"Startups",
            url:"/"
        },
        {
            link:"Enterprice",
            url:"/"
        },
        {
            link:"Government",
            url:"/"
        },
        {
            link:"SaaS",
            url:"/"
        },
        {
            link:"Marketplace",
            url:"/"
        },
        {
            link:"Ecommerence",
            url:"/"
        },
        {
            link:"Legal",
            url:"/"
        },
        {
            link:"Terms",
            url:"/"
        },
        {
            link:"Privacy",
            url:"/"
        },
        {
            link:"Cookies",
            url:"/"
        },
        {
            link:"Licenses",
            url:"/"
        },
        {
            link:"Setting",
            url:"/"
        },
        {
            link:"Contact",
            url:"/"
        },
    ]


  return ( 
    <div className="flex flex-col justify-center  bg-pink-400 p-4">
      <div className="flex flex-col justify-center items-center gap-7">
        <div className='space-y-3 flex flex-col justify-center items-center'>   
            <h1 className='font-semibold'>Lets Get Started on Something great</h1>
            <p className="text-sm">
                Join over 4,000+ startups already growing with United
            </p>
        </div>  
        <div>
            <Link href="/" className="border rounded-full px-1 py-3 text-sm">
            {" "}
            Start your 7-day free trail
            </Link>
      </div>
     
        <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div className="flex flex-col text-sm">
                    {Link1.map((list,index)=>{
                            return (<div key={index} >
                                    <Link href={list.url}>{list.link}</Link>
                            </div>)
                        })}
                    </div>
                <div className="flex flex-col text-sm">
                    {Link2.map((list,index)=>{
                            return (<div key={index} >
                                    <Link href={list.url}>{list.link}</Link>
                            </div>)
                        })}
                </div>               
        </div>
     </div>
    </div>
  )
}

export default Sidebar
