import React from 'react';
import Image from 'next/image';

export default function GridView() {
    return (
        <div className='mt-24 w-[100%] mx-auto sm:px-5 px-2'>
            <div className="grid grid-row-3 sm:gap-4 gap-2">
            <div className="grid grid-cols-12 sm:gap-4  gap-2">
    {/* First row with full-width column */}
    <div className="col-span-12">
        <div className="">
            <Image
                src="/assets/Images/img2.jpg"
                alt="logo"
                className="w-full max-h-[70vh] hover:scale-y-105 transform transition duration-500 ease-in-out cursor-pointer"
                width={100} // Set a fixed width for the image (optional)
                height={100} // Set a fixed height for the image (optional)
            />
        </div>
    </div>

    {/* Second row with two columns */}
    <div className="col-span-6">
        <div className="">
            <Image
                src="/assets/Images/img3.avif"
                alt="logo"
                className="w-full  max-h-[70vh]  hover:scale-y-105 transform transition duration-500 ease-in-out cursor-pointer"
                width={100} // Set a fixed width for the image (optional)
                height={100} // Set a fixed height for the image (optional)
            />
        </div>
    </div>

    <div className="col-span-6">
        <div className="">
            <Image
                src="/assets/Images/img8.jpg"
                alt="logo"
                className="w-full  max-h-[70vh] hover:scale-y-105 transform transition duration-500 ease-in-out cursor-pointer"
                width={100} // Set a fixed width for the image (optional)
                height={100} // Set a fixed height for the image (optional)
            />
        </div>
    </div>

    {/* Third row */}
    <div className="col-span-9">
        <div className="">
            <Image
                src="/assets/Images/img9.jpg"
                alt="logo"
                className="w-full  max-h-[70vh] hover:scale-y-105 transform transition duration-500 ease-in-out cursor-pointer"
                width={100} // Set a fixed width for the image (optional)
                height={100} // Set a fixed height for the image (optional)
            />
        </div>
    </div>

    <div className="col-span-3  row-span-2">
        <div className="h-full w-full">
            <Image
                src="/assets/Images/img10.avif"
                alt="logo"
                className="w-full h-full  hover:scale-y-105 transform transition duration-500 ease-in-out cursor-pointer"
                width={100} // Set a fixed width for the image (optional)
                height={200} // Set a fixed height for the image (optional)
            />
        </div>
    </div>

    <div className="col-span-5">
        <div className="w-full">
            <Image
                src="/assets/Images/img8.jpg"
                alt="logo"
                className=" w-full  max-h-[70vh]  hover:scale-y-105 transform transition duration-500 ease-in-out cursor-pointer"
                width={100} // Set a fixed width for the image (optional)
                height={100} // Set a fixed height for the image (optional)
            />
        </div>
    </div>

    <div className="col-span-4">
        <div className="w-full">
            <Image
                src="/assets/Images/img7.jpg"
                alt="logo"
                className=" w-full  max-h-[70vh]  hover:scale-y-105 transform transition duration-500 ease-in-out cursor-pointer"
                width={100} // Set a fixed width for the image (optional)
                height={100} // Set a fixed height for the image (optional)
            />
        </div>
    </div>

    <div className="col-span-6">
        <div className="w-full">
            <Image
                src="/assets/Images/img11.avif"
                alt="logo"
                className="w-full  max-h-[70vh]  hover:scale-y-105 transform transition duration-500 ease-in-out cursor-pointer"
                width={100} // Set a fixed width for the image (optional)
                height={100} // Set a fixed height for the image (optional)
            />
        </div>
    </div>

    <div className="col-span-6">
        <div className="">
            <Image
                src="/assets/Images/img5.jpg"
                alt="logo"
                className="w-full  max-h-[70vh]  hover:scale-y-105 transform transition duration-500 ease-in-out cursor-pointer"
                width={100} // Set a fixed width for the image (optional)
                height={100} // Set a fixed height for the image (optional)
            />
        </div>
    </div>
</div>

            </div>
        </div>
    );
}
