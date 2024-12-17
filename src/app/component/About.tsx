import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#280101] text-white flex flex-col items-center justify-center p-8">
      
      {/* Navbar
      <nav className="z-10 w-full flex justify-end space-x-8 p-6 font-semibold text-white">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#project">Project</Link>
        <Link href="#contact">Contact me</Link>
      </nav> */}
      
      <h1 className="text-9xl font-bold italic underline text-[#0A937C]">
        ABOUT ME,
      </h1>
      <p className="mt-6 text-xl text-center text-[#FFFFFF] max-w-7xl">
        “I am Laiba, a passionate Web Developer with a knack for creating user-friendly and visually appealing designs.”
      </p>
    </div>
  
  )
}

export default Hero