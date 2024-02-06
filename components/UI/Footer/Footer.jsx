import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
            
                </div>
            </div>
        </div>
    </div>
  )
}
