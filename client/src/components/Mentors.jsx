import React from 'react'

const Mentors = () => {
  
    const mentors = [
        {
            id: 1,
            name: 'Raymond E Robles',
            img: 'https://www.fakepersongenerator.com/Face/male/male20151083622274414.jpg'
        },

        {
            id: 2,
            name: 'Brian K Wagner',
            img: 'https://www.fakepersongenerator.com/Face/male/male20141083519784668.jpg'
        },

        {
            id: 3,
            name: 'Sally O Hammond',
            img: 'https://www.fakepersongenerator.com/Face/female/female20151024398848541.jpg'
        },

        {
            id: 4,
            name: 'James A Frazier',
            img: 'https://www.fakepersongenerator.com/Face/male/male20161083850709045.jpg'
        },

        {
            id: 5,
            name: 'Wiley B Brown',
            img: 'https://www.fakepersongenerator.com/Face/male/male1084941394562.jpg'
        },


    ]


  return (
    <div className='h-screen p-12  '>
  <h2 className='text-4xl p-12 text-white about'>Meet our mentors</h2>
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

 <div className='grid grid-cols-3 place-items-center gap-8 pt-12 '>
    {mentors.map((value) => (
         <div key={value.id} className='flex flex-col gap-4' >  
              <img src = {value.img} className='w-48 rounded-full cursor-pointer shadow-lg duration-500 ease hover:opacity-85'/>
              <p className='text-xl text-white text-center'>{value.name}</p>

            </div>
    ))}
 </div>

    </div>
  )
}

export default Mentors
