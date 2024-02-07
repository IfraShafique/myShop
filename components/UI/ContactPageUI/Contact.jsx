'use client'
import React from "react";
import Image from "next/image";

export default function Contact() {

    const fields = [
        {name: "Name", type: "text", placeholder: "Name"},
        {name: "Email", type: "email", placeholder: "Email"},
    ]
  return (
    <>
    <div className="sm:mt-20 mt-12">
    <h1 className=" sm:text-6xl  text-2xl text-center font-bold mb-4 text-white ">
          GET IN TOUCH
        </h1>
        </div>
    <div className="flex flex-col lg:px-20 px-12 text-white sm:text-2xl text-xs justify-center items-center sm:mt-24 mt-12">
        <p className="py-3"><i class="fa-solid fa-phone"></i> Phone: +92-0000000</p>
        <p className="py-3"><i className="fa-regular fa-envelope  "></i> Email: dummy@gmail.com</p>
        <p className="py-3"><i className="fa-solid fa-location-dot  "></i> Address: 2557 Olaf Spurs Apt. 686</p>
          
          </div>

          <div className="xl:w-[30%] lg:w-[40%] md:w-[50%] w-[90%] mx-auto mt-12">
          <form className="flex flex-col space-y-4 sm:text-xl">
                    {fields.map((field, index) => (
                        <input
                            key={index}
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            className="border border-gray-300 rounded-md px-3 py-2 focus:border-pink-800"
                        />
                    ))}
                    <textarea
                        name="Message"
                        placeholder="Message"
                        className="border border-gray-300 rounded-md px-3 py-2 h-32 focus:border-pink-800"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-pink-800 t font-semibold text-white px-4 py-2 rounded-md hover:bg-pink-800 transition-colors
                        hover:scale-105 transform transition duration-800 ease-in-out "
                    >
                        Submit
                    </button>
                </form>
          </div>
    </>
  );
}
