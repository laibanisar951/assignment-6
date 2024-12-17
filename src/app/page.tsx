// pages/index.js
import Image from 'next/image';
import Link from 'next/link';
import About from '@/app/component/About';
import Projects from '@/app/component/Contact';
import Contact from '@/app/component/Project';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#240101] relative text-white">
      {/* Striped Background */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#240101_20%,#f0c808_20%,#f0c808_22%,#240101_22%)] bg-[length:50px_100%] opacity-80"></div> */}
       
      {/* Navbar */}
      <nav className="z-10 w-full flex justify-end space-x-8 p-6 font-semibold text-white">
        <Link href="#Home">Home</Link>
        <Link href="#About">About</Link>
        <Link href="#Project">Project</Link>
        <Link href="#Contact">Contact me</Link>
      </nav>

      {/* Content Section */}
      <div className="z-10 flex flex-col items-start space-y-4 text-left p-6">
        <h1 className="text-9xl font-bold italic text-[#0A937C]">Hello,</h1>
        <h2 className="text-9xl font-bold italic text-white">I'm <span className="text-[#0A937C]">Laiba.</span></h2>
        <p className="text-4xl italic text-[#FFFFFF]">Welcome to my Portfolio ..</p>

        
        {/* Download CV Button */}
        <a 
          href="/cv.pdf" 
          download 
          className="mt-4 px-6 py-3 bg-[#0A937C] text-black rounded-md font-medium"
        >
          Download CV
        </a>
      </div>

      {/* Profile Image with Glow Effect */}
      <div className="z-10 mt-10 rounded-full overflow-hidden relative">
        <div className="absolute inset-0 w-full h-full bg-[#0A937C] rounded-full blur-lg"></div>
        <Image 
          src="/pic/mypic.png" 
          alt="Laiba" 
          width={600} 
          height={600} 
          className="rounded-full relative z-10"
        />
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}