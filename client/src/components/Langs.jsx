import React from 'react'
import portugal from '../assets/portugal.png';
import france from '../assets/france.png';
import spain from '../assets/spain.png';
import italy from '../assets/italy.png';
import germany from '../assets/germany.png';
import china from '../assets/china.png';

const Langs = () => {
  
    const languages = [
        {
            id: 1,
            name: 'portuguese',
            img: portugal
        },

        {
            id: 2,
            name: 'spanish',
            img: spain
        },

        {
            id: 3,
            name: 'french',
            img: france
        },

        {
            id: 4,
            name: 'italian',
            img: italy
        },
        {
            id: 5,
            name: 'germany',
            img: germany
        },

        {
            id: 6,
            name: 'chinese',
            img: china
        },
    ]


  return (
    <div className='min-h-screen'>
         <h2 className='text-4xl p-12 text-white about'>Our languages</h2>
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

        <div className='grid grid-cols-3 place-items-center gap-2'>
            {languages.map((value) => (
                <div  key={value.id} className='pt-12'>
                    <img src = {value.img} className='cursor-pointer rounded-md shadow-lg duration-500 ease hover:opacity-80'  style = {{width: '300px', height: '200px', objectFit: 'cover'}} />
                    <p className='text-center text-white text-xl pt-4'>{value.name}</p>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default Langs
