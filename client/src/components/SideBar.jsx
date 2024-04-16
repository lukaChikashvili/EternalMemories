import React, { useState } from 'react'

const SideBar = () => {
    const [showUpload, setShowUpload] = useState(false);
   
  return (
    <div className='w-1/5 h-screen bg-[#F4CE14]'>
    <div className='flex gap-4  text-xl cursor-pointer justify-end pr-8 p-12 '>
       <p onClick={() => setShowUpload(true)} style={{fontWeight: showUpload && 'bold'}}>ატვირთვა</p>
       <p onClick={() => setShowUpload(false)} style={{fontWeight: showUpload === false ?  'bold' : ''}}>წიგნები</p>
       </div>

       {showUpload ? <div>
           <h2 className='text-2xl text-center'>ატვირთე წიგნი</h2>

           
        </div> : <div>
            books
            </div> }
    </div>
  )
}

export default SideBar
