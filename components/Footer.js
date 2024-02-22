'use client'

import React from 'react'
import { IoIosArrowDropup } from "react-icons/io";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smooth scrolling
    });
  };

  return (
    <div className='py-20 bg-green text-white relative'>
      <div className='w-[80%] container mx-auto flex flex-col items-center justify-center '>
        <h1 className='text-3xl lg:text-5xl font-bold mb-4 font-serif'>Thank you for coming!!</h1>
        <p className='text-md lg:text-xl font-semibold leading-relaxed'>2024/2/20</p>
      </div>
      <div className='text-7xl text-white hover:text-red-300 fixed bottom-5 right-5 cursor-pointer'>
        <IoIosArrowDropup className=''
        onClick={scrollToTop}
        />
      </div>
    </div>
  )
}

export default Footer