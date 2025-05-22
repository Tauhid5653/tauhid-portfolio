import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'

const Navbar = () => {

  const sideMenuRef = useRef();
  const openMenu = ()=>{
    sideMenuRef.current.style.transform = "translateX(-16rem)"
  }
  const closeMenu = ()=>{
    sideMenuRef.current.style.transform = "translateX(16rem)"
  }

  return (
    <>
    {/* <div className='fixed top-0 right-0 w-11/12 translate-y-[-80%]'>
      <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div> */}

      <nav className='w-full fixed bg-gray-100 px-5 py-1 lg:px-8 xl:px-[8%] flex items-center justify-between z-99 '>
        
        <a href="#top" className='text-center'>
            {/* <Image src={assets.logo} alt='' className='w-80 cursor-pointer mr-14'/> */}
            <h1 className='w-80 cursor-pointer text-6xl font-Outfit text-blue-950 font-extrabold'>TAUHID</h1>
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
        bg-white shadow-sm bg-opacity-50'>
            <li><a href="#top" className='font-Ovo'>Home</a></li>
            <li><a href="#about" className='font-Ovo'>About me</a></li>
            <li><a href="#services" className='font-Ovo'>Services</a></li>
            <li><a href="#work" className='font-Ovo'>My Work</a></li>
            <li><a href="#contact" className='font-Ovo'>Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          {/* <button>
            <Image src={assets.moon_icon} alt='' className='w-6'/>
          </button> */}

            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 border border-gray-500 
            py-2.5 rounded-full ml-4 font-Ovo'>Contact<Image alt='' src={assets.arrow_icon}/> </a>

            <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='' className='w-6'/>
            </button>
        </div>


       {/* Mobile-Menu */}

       <ul ref={sideMenuRef} className='flex flex-col md:hhidden gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64
       z-50 h-screen bg-rose-50 transition duration-500 '>
        <div className='absolute right-6 top-6' onClick={closeMenu}>
          <Image src={assets.close_black} alt='' className='w-5 cursor-pointer '/>
        </div>

            <li><a href="#top" className='font-Ovo' onClick={closeMenu}>Home</a></li>
            <li><a href="#about" className='font-Ovo' onClick={closeMenu}>About me</a></li>
            <li><a href="#services" className='font-Ovo' onClick={closeMenu}>Services</a></li>
            <li><a href="#work" className='font-Ovo' onClick={closeMenu}>My Work</a></li>
            <li><a href="#contact" className='font-Ovo' onClick={closeMenu}>Contact me</a></li>
       </ul>

      </nav>
    </>
  )
}

export default Navbar
