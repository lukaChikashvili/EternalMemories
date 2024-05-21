import React from 'react'
import {motion} from 'framer-motion';


const About = () => {
  return (
    <div className='text-white min-h-screen pt-64'>
       <motion.h1 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 0.5 }} className='text-5xl text-pink-500 fullLine  '>About</motion.h1>
   
     <motion.p initial = {{ opacity: 0, translateX: -20}}
                     whileInView={{  opacity: 1, translateX: 0 }}
                     transition={{ duration: 1.5, delay: 1.5 }}
     className='pt-12 text-2xl'>
     At EternalMemories, we understand that every life is a unique story filled with love, laughter, and cherished moments.
      Our mission is to provide a sacred space where you can honor and celebrate the beautiful life of your loved one.
      </motion.p>
      <motion.p initial = {{ opacity: 0, translateX: -20}}
                     whileInView={{  opacity: 1, translateX: 0 }}
                     transition={{ duration: 1.5, delay: 1.9 }}
      className='pt-8 text-2xl'>
We believe that memories are the most precious treasures we carry with us, and through this platform, we aim to preserve those memories
 for generations to come. Whether it's through heartfelt obituaries, touching tributes, or shared stories, we invite you to commemorate 
 the life and legacy of your loved one in a meaningful and dignified way.
 </motion.p>

    </div>
  )
}

export default About
