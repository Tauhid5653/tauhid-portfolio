import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4'>
      <motion.div
      initial={{scale:0}}
      whileInView={{scale:1}}
      transition={{duration:0.8, type:'spring', stiffness:100}}
      >
      <Image src={assets.profile_img} alt=''className='rounded-full w-[120px] mt-16'/>
      </motion.div>
      <motion.h3 
      initial={{y: -20, opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.6, delay:0.3}}
      className='flex items-end gap-2 text-xl md:text-2xl mb-1 font-Ovo' >Hi! I'm Md Tauhid Alam 
        <Image src={assets.hand_icon} alt=''
        className='w-6'/></motion.h3>
        <motion.h1
        initial={{y: -30, opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.8, delay:0.5}}
        className='text-xl md:text-6xl lg:text-[56px] font-Ovo'>Full-Stack Web Developer based in India.</motion.h1>
        <motion.p 
         initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6, delay:0.7}}
        className='max-w-2xl max-auto font-Ovo'>
            I am Full-Stack Web Developer from Bihar, 
            India with some little experiences in this technology 
            like React.js,Express.js,MongoDB,Next.js etc
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-2'>
            <motion.a 
             initial={{y:30,opacity:0}}
             whileInView={{y:0, opacity:1}}
             transition={{duration:0.6, delay:1}}
            href="#contact" 
            className='py-3 px-10 border border-white rounded-full bg-black 
            text-white  flex items-center gap-2'
             >Contact me<Image 
            src={assets.right_arrow} alt=''className='w-4 '/></motion.a>
             <motion.a 
             initial={{y:30,opacity:0}}
             whileInView={{y:0, opacity:1}}
             transition={{duration:0.6, delay:1.2}}
             href="/Md Tauhid Alam.pdf" download className='py-3 px-10 border 
             rounded-full border-gray-500 flex items-center gap-2'>My resume <Image 
            src={assets.download_icon} alt='' className='w-4 '/></motion.a>
        </div>
    </div>
  )
}

export default Header
