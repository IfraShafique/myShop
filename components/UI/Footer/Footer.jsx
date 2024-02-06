import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-solid-svg-icons";
import { faLinkedIn } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className='py-20 w-[90%] text-white px-10'>
        <div className='flex'>
            <div className='w-[90%]  sm:text-xl'>
                <ul className='flex'> 
                    <li className='mb-12 border-l-4 border-pink-800 px-2'>About Us</li>
                    <li className='mb-12 border-l-4 border-pink-800 px-2'>Contact Us</li>
                    <li className='mb-12 border-l-4 border-pink-800 px-2'>Privacy</li>
                </ul>
            </div>

            <div className=' text-xl font-bold '>
                <p>Be With Us</p>
                <div className='flex'>
                    <div>
                <FontAwesomeIcon
              icon={faFacebook}
              className="text-white sm:w-10 sm:text-[36px] w-6  mt-1"
            />
                    </div>
                    <div>
                <FontAwesomeIcon
              icon={faTwitter}
              className="text-white sm:w-10 sm:text-[36px] w-6  mt-1"
            />
                    </div>
                    <div>
                <FontAwesomeIcon
              icon={faLinkedIn}
              className="text-white sm:w-10 sm:text-[36px] w-6  mt-1"
            />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
