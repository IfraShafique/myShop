'use client'
import React, {useState} from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


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

        <form className="lg:block">
          <input
            text="Search"
            className="absolute sm:w-2/4 w-2/3 lg:h-16 md:h-14 sm:h-12 h-8 bg-[#1e4057] sm:text-xl text-sm text-white lg:ml-5 max-lg:mt-3 rounded-lg pl-4"
            name="search"
            placeholder="Search"
          />
          {/* <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute text-[#6a7c89] w-8 ml-8 mt-4 "
          /> */}
        </form>
      </div>

      {/* Right side */}
      <div className="flex mt-3">
        <div className="xl:mr-12 mr-4" >
          <ul className="flex text-white sm:text-base text-xs font-semibold ">
            <li className=" sm:px-6 px-1 hover:text-pink-900  hover:underline transform transition duration-500 ease-in-out cursor-pointer">Home</li>
            <li className=" sm:px-6 px-1 hover:text-pink-900  hover:underline transform transition duration-500 ease-in-out cursor-pointer">About</li>
            <li className=" sm:px-6 px-1 hover:text-pink-900  hover:underline transform transition duration-500 ease-in-out cursor-pointer">Gallery</li>
          </ul>
        </div>

        <div className="flex">
          <div className="w-0.5 sm:h-10 h-7 bg-white sm:mr-6 mr-2 "></div>

          <div>
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-white sm:w-10 sm:text-[36px] w-6  mt-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
