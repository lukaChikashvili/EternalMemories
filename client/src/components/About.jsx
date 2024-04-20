import React from 'react'
import langs from '../assets/langs.png';

const About = () => {
  return (
    <div className='h-screen '>
        <h2 className='text-4xl p-12 text-white about'>About LingoBingo</h2>
        <div className='flex gap-4 -mt-8 ml-20'>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
        </div>

<div className='flex items-center justify-between mt-12 px-12'>
    <div className='flex flex-col gap-8'>
<p className='text-white text-2xl leading-10'>
        Welcome to LingoBingo, where language learning meets innovation and fun! At LingoBingo,
         we believe that learning a new language should be an enjoyable journey filled with exploration, 
         discovery, and meaningful connections with others around the world.
         </p>
         <p className= 'text-white text-2xl leading-10'>
Our platform is designed to empower language learners of all levels, from beginners to advanced speakers, 
to achieve their goals and unlock their full potential. Whether you're brushing up on your Spanish for an 
upcoming trip, mastering Mandarin for business, or diving into the intricacies of French literature, 
LingoBingo is here to support you every step of the way.
</p>
</div>

   

        <img src = {langs} />
</div>
      
    </div>
  )
}

export default About
