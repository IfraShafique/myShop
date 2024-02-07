import React from 'react';
import Image from 'next/image';

export default function GridView() {
    return (
        <div className='mt-24 w-[100%] mx-auto sm:px-5 px-2'>
            <h1 className='sm:text-6xl text-2xl text-center font-bold mb-4 text-white'>GALLERY</h1>
            <div className="grid grid-row-3 sm:gap-4 gap-2">
            <div className="grid grid-cols-12 sm:gap-4  gap-2 sm:mt-10 mt-5">
    {/* First row with full-width column */}
    <div className="col-span-12">
        <div className="h-full">
            <Image
                src="/assets/Images/img2.jpg"
                alt="logo"
                className="w-full h-full max-h-[70vh] hover:scale-y-105 transform transition duration-500 ease-in-out cursor-pointer"
                width={3000} // Set a fixed width for the image (optional)
                height={3000} // Set a fixed height for the image (optional)
            />
        </div>
    </div>

    {/* Second image */}
    <div className="col-span-6">
        <div className="h-full">
            <Image
                src="/assets/Images/img1.jpg"
                alt="logo"
                className="w-full h-full max-h-[70vh]  hover:scale-y-105 transform transition duration-500 ease-in-out cursor-pointer"
                width={3000} // Set a fixed width for the image (optional)
                height={3000} // Set a fixed height for the image (optional)
            />
        </div>
    </div>

{/* third image */}
    <div className="col-span-6">
        <div className="h-full">
            <Image
                src="/assets/Images/img6.jpg"
                alt="logo"
                className="w-full h-full max-h-[70vh] hover:scale-y-105 transform transition duration-500 ease-in-out cursor-pointer"
                width={3000} // Set a fixed width for the image (optional)
                height={3000} // Set a fixed height for the image (optional)
            />
        </div>
    </div>

    {/* fouth image*/}
    <div className="col-span-9">
        <div className="h-full ">
            <Image
                src="/assets/Images/img9.jpg"
                alt="logo"
                className="w-full h-full  max-h-[70vh] hover:scale-y-105 transform transition duration-500 ease-in-out cursor-pointer"
                width={3000} // Set a fixed width for the image (optional)
                height={3000} // Set a fixed height for the image (optional)
            />
        </div>
    </div>

{/* fifth image */}
    <div className="col-span-3  row-span-2">
        <div className="h-full w-full">
            <Image
                src="/assets/Images/img10.avif"
                alt="logo"
                className="w-full h-full  hover:scale-y-105 transform transition duration-500 ease-in-out cursor-pointer"
                width={3000} // Set a fixed width for the image (optional)
                height={3000} // Set a fixed height for the image (optional)
            />
        </div>
    </div>

{/* 6th image */}
    <div className="col-span-5">
        <div className= " h-full w-full">
            <Image
                src="/assets/Images/img7.jpg"
                alt="logo"
                className=" w-full h-full  max-h-[70vh]  hover:scale-y-105 transform transition duration-500 ease-in-out cursor-pointer"
                width={3000} // Set a fixed width for the image (optional)
                height={3000} // Set a fixed height for the image (optional)
            />
        </div>
    </div>

{/* 7th image */}
    <div className="col-span-4">
        <div className="w-full h-full">
            <Image
                src="/assets/Images/img3.jpg"
                alt="logo"
                className=" w-full h-full max-h-[70vh]  hover:scale-y-105 transform transition duration-500 ease-in-out cursor-pointer"
                width={3000} // Set a fixed width for the image (optional)
                height={3000} // Set a fixed height for the image (optional)
            />
        </div>
    </div>

{/* 8th image */}
    <div className="col-span-6">
        <div className="w-full h-full">
            <Image
                src="/assets/Images/img4.jpg"
                alt="logo"
                className="w-full h-full max-h-[70vh]  hover:scale-y-105 transform transition duration-500 ease-in-out cursor-pointer"
                width={3000} // Set a fixed width for the image (optional)
                height={3000} // Set a fixed height for the image (optional)
            />
        </div>
    </div>

{/* 9th image */}
    <div className="col-span-6 ">
        <div className="h-full">
            <Image
                src="/assets/Images/img5.jpg"
                alt="logo"
                className="w-full h-full max-h-[70vh]  hover:scale-y-105 transform transition duration-500 ease-in-out cursor-pointer"
                width={3000} // Set a fixed width for the image (optional)
                height={3000} // Set a fixed height for the image (optional)
            />
        </div>
    </div>
</div>

            </div>
        </div>
    );
}
