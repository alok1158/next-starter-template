"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  });

  return (
    <header
      className={`${
        shadow ? "shadow-lg bg-white" : "bg-transparent"
      } fixed z-10 w-full h-14 md:h-20 md:flex md:items-center md:justify-between`}
    >
      <div className="w-full flex justify-between">
        <a
          href=""
          className="flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
        >
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-3xl sm:leading-none md:text-5xl">
            Infinite<span className="text-indigo-600">Design</span>
          </h2>
        </a>
        <button className="md:hidden mr-3 text-xl mt-3" onClick={handleNav}>
          {nav ? <AiOutlineCloseCircle /> : <AiOutlineMenu />}
        </button>
      </div>
      <div
        className={`${
          nav ? "" : "invisible md:visible"
        } ${shadow ? "" : "bg-transparent"}
         w-full bg-white mt-4 md:mt-0 border shadow-md md:border-none md:shadow-none`}
      >
        <nav className="header-links contents font-semibold text-base lg:text-lg">
          <ul className="overflow-visible md:flex items-cente ml-5 justify-end mr-5">
            <li className="p-3 xl:p-6">
              <a href="">
                <span>Home</span>
              </a>
            </li>
            <li className={`p-3 xl:p-6 `}>
            {/* <li className='p-3 xl:p-6'> */}
              <Link href={"/#about"} onClick={()=> {setNav(false)}}>
                <span>About</span>
              </Link>
            </li>
            <li className="p-3 xl:p-6">
              <Link href={"/#project"} onClick={()=> {setNav(false)}}>
                <span>Projects</span>
              </Link>
            </li>
            <li className="p-3 xl:p-6">
              <Link href={"/#client"} onClick={()=> {setNav(false)}}>
                <span>Clients</span>
              </Link>
            </li>
            <li className="p-3 xl:p-6">
              <Link href={"/#contact"} onClick={()=> {setNav(false)}}>
                <span>Contacts</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
