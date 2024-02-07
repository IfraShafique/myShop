import React from 'react'
import Navbar from '@/components/UI/Navbar/Navbar'

import Footer from '@/components/UI/Footer/Footer'
import Contact from '@/components/UI/ContactPageUI/Contact'

export default function page() {
  return (
    <div className='w-[100%] h-[100%] bg-[#051e2e]'>
      <Navbar/>
        <Contact/>
      <Footer/>
    </div>
  )
}