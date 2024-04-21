import React, { useState } from 'react'
import SideBar from './SideBar'
import CreateModal from './CreateModal';
 


const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className=' w-full flex'>

       
      <SideBar />

          <button className='absolute right-12
           bg-white w-36 rounded-md shadow-lg p-2 
           duration-500 ease-in hover:bg-black hover:text-white' onClick={() => setShowModal(true)}>Create Event</button>
    
    {showModal && <CreateModal />}
    </div>
  )
}

export default Home
