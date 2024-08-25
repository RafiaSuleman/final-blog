import Link from "next/link";
import React from "react";

const Footer = () => {

    const Link1 = [
        {
            link:"PRODUCT",
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
    ]
    const Link2 = [
        {
            link:"COMPANY",
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
    ]
    const Link3 = [
        {
            link:"RESOURCES",
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
    ]
    const Link4 = [
        {
            link:"USE CASES",
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
    ]
    const Link5 = [
        {
            link:"SOCIAL",
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
    const Link6 = [
        {
            link:"LEGAL",
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
    <div className="flex flex-col gap-9 justify-center items-center bg-pink-500 xl:p-9 mt-[50px] py-[20px] rounded-sm">
      <div className="space-y-3 flex flex-col justify-center items-center">
        <h1>Let us get started on something</h1>
        <p className="text-sm">
          Join over 4,000+ startups already growing with United
        </p>
      </div>
      <div>
        <Link href="/" className="border rounded-full px-3 py-3">
          {" "}
          Start your 7-day free trail today
        </Link>
      </div>
      <div className="grid xl:grid-cols-6 grid-cols-3 gap-10 items-start">

        {/* link col 1 */}
        <div className="flex flex-col text-sm ">
           {Link1.map((list,index)=>{
                return (<div key={index}  >
                        <Link href={list.url}>{list.link}</Link>
                </div>)
            })}
        </div>

        {/* Link col 2 */}
        <div className="flex flex-col text-sm">
           {Link2.map((list,index)=>{
                return (<div key={index} >
                        <Link href={list.url}>{list.link}</Link>
                </div>)
            })}
        </div>

        {/* link col 3 */}
        <div className="flex flex-col text-sm">
           {Link3.map((list,index)=>{
                return (<div key={index} >
                        <Link href={list.url}>{list.link}</Link>
                </div>)
            })}
        </div>

        {/* link col 4 */}
        <div className="flex flex-col text-sm">
           {Link4.map((list,index)=>{
                return (<div key={index} >
                        <Link href={list.url}>{list.link}</Link>
                </div>)
            })}
        </div>

        {/* link col 5 */}
        <div className="flex flex-col text-sm">
           {Link5.map((list,index)=>{
                return (<div key={index} >
                        <Link href={list.url}>{list.link}</Link>
                </div>)
            })}
        </div>

        {/* link col 6 */}
        <div className="flex flex-col text-sm">
           {Link6.map((list,index)=>{
                return (<div key={index} >
                        <Link href={list.url}>{list.link}</Link>
                </div>)
            })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
