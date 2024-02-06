import React from 'react';
import Image from 'next/image';

export default function Carousel() {
    return (
        <div id="default-carousel" className="relative w-full sm:mt-24 mt-12" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-[80vh] overflow-hidden rounded-lg">
                {/* Item 1 */}
                <div className="absolute inset-0 duration-700 ease-in-out" data-carousel-item>
                    <div className="absolute inset-0">
                        <Image
                            src="/assets/Images/banners-img/home1.webp"
                            alt="Slide 1"
                            className='w-full h-[80vh] object-cover object-center'
                           width={100}
                           height={100}
                        />
                    </div>
                </div>
                {/* Item 2 */}
                <div className="absolute inset-0 duration-700 ease-in-out" data-carousel-item>
                    <div className="absolute inset-0">
                        <Image
                            src="/assets/Images/banners-img/home2.webp"
                            alt="Slide 2"
                            className='w-full h-[80vh] object-cover object-center'
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                {/* Item 3 */}
                <div className="absolute inset-0 duration-700 ease-in-out" data-carousel-item>
                    <div className="absolute inset-0">
                        <Image
                            src="/assets/Images/slider-img/stationery-banner.webp"
                            alt="Slide 3"
                            className='w-full h-[80vh] object-cover object-center'
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
            </div>
            {/* Slider controls */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {[...Array(3)].map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current={index === 0 ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                        data-carousel-slide-to={index}
                    ></button>
                ))}
            </div>
            {/* Slider controls */}
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}
