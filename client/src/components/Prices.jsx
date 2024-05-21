import React from 'react'
import { motion } from 'framer-motion'
import {  CheckIcon } from 'lucide-react';

const Prices = () => {
  return (
    <div className='text-white min-h-screen pt-64 absolute w-full'>
        <motion.h1 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 0.5 }} className='text-5xl text-pink-500 fullLine  '>Pricing</motion.h1>

                
    </div>
  )
}

export default Prices
