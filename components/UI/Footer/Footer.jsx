import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Footer() {
    const initialVaues = [
        {src: '/assets/Images/facebook.png', alt: 'facebook', href: 'https://www.facebook.com/'},
        {src: '/assets/Images/linkedin.png', alt: 'linkedin', href: 'https://www.linkedin.com/'},
        {src: '/assets/Images/twitter.png', alt: 'twitter', href: 'https://www.twitter.com/'},
   
    ]
  return (
    <>
    <div className=' pt-20 w-[90%] text-white px-10'>
        <div className='flex max-sm:flex max-sm:flex-col'>
            <div className='sm:w-[70%]   sm:text-xl text-xs'>
                <ul className='flex'> 
                    <li className='mb-12 border-l-4 border-pink-800 px-2'>About Us</li>
                    <li className='mb-12 border-l-4 border-pink-800 px-2'>Contact Us</li>
                    <li className='mb-12 border-l-4 border-pink-800 px-2'>Privacy</li>
                </ul>
            </div>

            <div className=' sm:text-xl text-xs font-bold max-sm:w-[60%]'>
                <p>Be With Us</p>
                <div className='flex'>
                    <ul className='flex'>
                       
                            {initialVaues.map((value, index) => (
                                <li className='py-2'>
                                    <a href={value.href} target="_blank">
                                    <Image
                                    src={value.src}
                                    alt={value.alt}
                                    className="max-sm:w-[50%] rounded-full sm:mr-4"
                                    width={50}
                                    height={50}
                                />
                                    </a>
                                </li>
                            ))}
                    
                    </ul>
                </div>
            </div>
        </div>

    </div>
        <div className="mt-10 max-sm:text-xs text-center bg-pink-800 w-[100%] text-white py-1">
            &copy; 2024. All Rights Reserved
        </div>
        </>
  )
}
