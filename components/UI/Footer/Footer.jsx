import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSquareFacebook} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className='py-20 w-[90%] text-white px-10'>
        <div className='flex'>
            <div className='w-[70%]  sm:text-xl text-xs'>
                <ul className='flex'> 
                    <li className='mb-12 border-l-4 border-pink-800 px-2'>About Us</li>
                    <li className='mb-12 border-l-4 border-pink-800 px-2'>Contact Us</li>
                    <li className='mb-12 border-l-4 border-pink-800 px-2'>Privacy</li>
                </ul>
            </div>

            <div className=' sm:text-xl text-xs font-bold '>
                <p>Be With Us</p>
                <div className='flex'>
            <ul className='flex'>
                <li>
                <FontAwesomeIcon icon={faSquareFacebook}
                className="text-white sm:w-10 sm:text-[36px] w-6  mt-1" />
                </li>
            </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
