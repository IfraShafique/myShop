import React from 'react'
import Navbar from '@/components/UI/Navbar/Navbar'
import About from '@/components/UI/AboutPageUI/About'
import Footer from '@/components/UI/Footer/Footer'

export default function page() {
  return (
    <div className='w-[100%] h-[100%] bg-[#051e2e]'>
      <Navbar/>
      <About/>
      <Footer/>
    </div>
  )
}
