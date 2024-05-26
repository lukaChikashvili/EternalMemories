import React, { useContext, useEffect } from 'react'
import CreateModal from './CreateModal';
import axios from 'axios';
import { EventContext } from '../context/EventContext';
import { useNavigate } from 'react-router-dom';
 


const Home = () => {
  
  const { events, setEvents} = useContext(EventContext);

  let navigate = useNavigate();

   const getEvents = async () => {
     const response = await axios.get('http://localhost:5000/api/events/all');

    setEvents(response.data.events);
   }

   useEffect(() => {
    getEvents();
   }, [])

   const fullPage = (id) => {
     navigate(`/events/${id}`);
   }
  return (
    <div className=' w-full flex absolute pt-28 '>

       
   <p className='w-full bg-pink-500 h-1 absolute top-24'></p>

          <button className='absolute right-12 
           underline underline-offset-8  w-48 rounded-md shadow-lg p-2  top-36
          text-white decoration-pink-500 text-xl duration-500 ease-in hover:decoration-wavy' onClick={() => navigate('/create')}>Create Memorial</button>
    
  

<div className='grid grid-cols-1 md:grid-cols-3  mt-12 gap-24 py-12 px-28 text-white'>
{events.map((value) => (
  <div key={value._id} className='flex flex-col items-center gap-4'>
        <img src = {value.img} className='w-56 h-56 object-cover rounded-full shadow-lg cursor-pointer' />
        <h2 className='text-2xl underline cursor-pointer decoration-pink-500 underline-offset-8 duration-500 ease-in hover:decoration-wavy' onClick={() => fullPage(value._id)}>{value.name}  {value.surname}</h2>
        <p>{value.birth} - {value.death}</p>
    </div>
))}

</div>
    </div>
  )
}

export default Home
