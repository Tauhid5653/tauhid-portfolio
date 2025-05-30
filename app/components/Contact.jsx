import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"

const Contact = () => {
      const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f1a0b10b-c72d-4d69-8986-edb157b13b79");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4 
       initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:0.3,duration:0.5}}
      className='text-center text-lg mb-2 font-Ovo'>Connect with me</motion.h4>
       <motion.h2 
       nitial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:0.5,duration:0.5}}
       className='text-center text-5xl font-Ovo'>Get in touch</motion.h2>
       <motion.p
       nitial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.7,duration:0.5}}
       className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
       I would love to hear from you! if you have any questions, comments, or feedback
       please use the form below.
       </motion.p>
       <div>
        <motion.form
        nitial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:0.9,duration:0.5}}
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <motion.input
                initial={{x:-50,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{delay:1.1,duration:0.6}}
                type="text" placeholder='Enter your Name' required 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md
                bg-white' name='name'/>
                 <motion.input
                 initial={{x:50,opacity:0}}
                 whileInView={{x:0,opacity:1}}
                 transition={{delay:1.2,duration:0.6}}
                 type="email" placeholder='Enter your email' required
                  className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md
                bg-white' name='email'/>
            </div>
            <motion.textarea
            initial={{y:100,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{delay:1.3,duration:0.6}}
            rows='6' placeholder='Enter your message' required 
            className='w-full p-4 outline-none border-[0.5px] rounded-md border-gray-400 bg-white 
            mb-6' name='message'></motion.textarea>
            <motion.button
            whileHover={{scale:1.05}}
            transition={{duration:0.3}}
            type='submit' className='py-3 px-8 flex items-center justify-between gap-2
            text-white bg-black/80  w-max rounded-full mx-auto hover:bg-black duration-500
            '>Submit Now <Image src={assets.right_arrow_white} alt='' className='w-4'/> </motion.button>
            <p className='mt-4'>{result}</p>
        </motion.form>
       </div>
    </motion.div>
  )
}

export default Contact
