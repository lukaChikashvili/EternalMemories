import React, { useContext, useEffect } from 'react'
import CreateModal from './CreateModal';
import axios from 'axios';
import { EventContext } from '../context/EventContext';
 


const Home = () => {
  
  const { events, setEvents, setShowModal, showModal} = useContext(EventContext);


   const getEvents = async () => {
     const response = await axios.get('http://localhost:5000/api/events/all');

    setEvents(response.data.events);
   }

   useEffect(() => {
    getEvents();
   }, [])

  return (
    <div className=' w-full flex relative'>

       


          <button className='absolute right-12
           bg-white w-36 rounded-md shadow-lg p-2 
           duration-500 ease-in hover:bg-black hover:text-white' onClick={() => setShowModal(true)}>Create Event</button>
    
    {showModal && <CreateModal />}

<div className='grid grid-cols-3 gap-12'>
{events.map((value) => (
  <div key={value._id} className='flex flex-col gap-4 p-8 text-white'>
    <h2 className='text-2xl text-white cursor-pointer'>{value.title}</h2>
    <img src = {value.img} className='w-96 h-64 object-cover cursor-pointer rounded-md shadow-lg duration-500 ease hover:opacity-80' />
   <div className='flex items-center justify-between px-6'>
    <p>{value.location}</p>
    <p>{value.time}</p>
    </div>
    <p className='bg-black w-1/2 text-center p-2 cursor-pointer rounded-md shadow-lg duration-500 ease hover:bg-white hover:text-black'>{value.lang}</p>
    </div>
))}

</div>
    </div>
  )
}

export default Home
