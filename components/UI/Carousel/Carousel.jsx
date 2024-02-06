'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 2; // Total number of slides

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, [currentSlide]); // Re-run effect when currentSlide changes

    return (
        <div id="default-carousel" className="relative w-[90%]  mx-auto sm:mt-24 mt-12" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-[80vh] overflow-hidden">
                {/* Display only the current slide */}
                {[...Array(totalSlides)].map((_, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 duration-700 ease-in-out ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                        data-carousel-item
                    >
                        <div className="absolute inset-0">
                            <Image
                                src={`/assets/Images/banners-img/home${index + 1}.webp`}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-[80vh] object-cover object-center"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                ))}
            </div>
            {/* Slider controls */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {[...Array(totalSlides)].map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${
                            index === currentSlide ? 'bg-black' : 'bg-gray-300'
                        }`}
                        aria-current={index === currentSlide ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </div>
            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
                onClick={prevSlide}
            >
                {/* Previous button icon */}
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
                onClick={nextSlide}
            >
                {/* Next button icon */}
            </button>
        </div>
    );
}
