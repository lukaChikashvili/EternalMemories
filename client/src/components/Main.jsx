
import React from 'react'




const Main = () => {
  return (
    <>
  
        <div className='w-1/2 min-h-screen pt-56 px-28 absolute'>
          <h1 className='text-6xl text-white  ' style={{lineHeight: "5rem"}}><span className='text-pink-500 '>Cherishing </span> Memories Forever.</h1>
          <p className='text-white text-2xl pt-8' style={{lineHeight: "2.5rem"}}>
Craft a heartfelt and elegant memorial page to celebrate the life and legacy of your loved one. 
</p>
 <div className='flex gap-4 pt-8' >
   <button className='text-white bg-pink-500 py-2 px-8 rounded-md shadow-lg text-xl duration-500 ease-in hover:opacity-80'>Create memorial page</button>
   <button className='text-white border-2 border-pink-500 py-2 px-8 rounded-md shadow-lg text-xl duration-500 ease-in hover:bg-pink-500'>Example memorial</button>
 </div>
        </div>

       
       </>
  )
}

export default Main
