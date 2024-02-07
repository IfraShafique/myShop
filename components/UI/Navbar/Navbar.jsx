'use client'
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/Link"


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

  return (
    <div className="flex w-full h-16 bg-[#051e2e] justify-between sm:p-8 p-2">
      {/* Left side */}
      <div className=" flex w-2/3 max-lg:flex-col">
        <div className="mt-3">
          <Image
            src="/assets/Images/logo.png"
            alt="logo"
            className="max-sm:w-[50%] "
            width={180}
            height={180}
          />
        </div>

      </div>

      {/* Right side */}
      <div className="flex mt-3">
        <div className="" >
          <ul className="flex text-white sm:text-xl text-xs font-semibold ">

            <li className=" sm:px-6 px-2 hover:text-pink-900  hover:underline transform transition duration-500 ease-in-out cursor-pointer"><Link href="/">Home</Link></li>
            <li className=" sm:px-6 px-2 hover:text-pink-900  hover:underline transform transition duration-500 ease-in-out cursor-pointer"><Link href="/about">About</Link></li>
            <li className=" sm:px-6 px-2 hover:text-pink-900  hover:underline transform transition duration-500 ease-in-out cursor-pointer"><Link href="/contact">Contact</Link></li>
            <li className=" sm:px-6 px-2 hover:text-pink-900  hover:underline transform transition duration-500 ease-in-out cursor-pointer">Gallery</li>
          </ul>
        </div>

    
      </div>
    </div>
  );
}
