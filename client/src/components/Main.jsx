import { Mouse } from 'lucide-react'
import React from 'react'
import About from './About'
import Langs from './Langs'
import Mentors from './Mentors'
import Footer from './Footer'
import { motion } from 'framer-motion';

const Main = () => {
  return (
    <>
    <div className='flex items-center justify-center h-screen flex-col gap-8'>
        <motion.h1
         initial = {{opacity: 0, translateY: -20}}
         animate = {{opacity: 1, translateY: 0}}
         transition={{duration: 1, delay: 0.8}}
        className='text-white enter text text-8xl p-4 rounded-md'>LingoBingo</motion.h1>
        <div className='flex gap-4'>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
        </div>
        <h2 className='text-white text-7xl'>Elevate your language skills</h2>
        <h2  className='text-white text-5xl'>Linking Cultures Through Language</h2>
        <Mouse className='text-white ' size={40} />

     
    </div>
  
       <About />
       <Langs />
       <Mentors />
       <Footer />
       </>
  )
}

export default Main
