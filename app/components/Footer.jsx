import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div className='mt-20'>
     <div className='text-center '>
        <h3 className='mx-auto w-80 text-4xl font-Outfit text-blue-950 font-extrabold'>TAUHID</h3>
        {/* <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2 '/> */}
        <div className='w-max flex items-center gap-2 mx-auto '>
          <Image src={assets.mail_icon} alt='' className='w-6'/>intern.tauhid@gmail.com 
        </div>
        </div> 
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400
        mx-[10%] mt-12 py-6'>
            <p>
                @ 2025 Md Tauhid Alam. All Right Resered.
            </p>
            <ul className='flex items-center justify-center mt-4 sm:mt-0 gap-10'>
                <li>
                    <a target='_blank' href="https://www.instagram.com/theotherbwoii?igsh=MXdmajlhdTRub3p3Yg== ">Instagram</a>
                </li>
                <li>
                    <a target='_blank' href="https://github.com/Tauhid5653">Github</a>
                </li>
                <li>
                    <a target='_blank' href="https://www.linkedin.com/in/mdtauhidalam">LinkedIn</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
