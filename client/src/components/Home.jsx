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

  return (
    <div className=' w-full flex absolute pt-28 '>

       


          <button className='absolute right-12
           bg-white w-36 rounded-md shadow-lg p-2 
           duration-500 ease-in hover:bg-pink-500 hover:text-white' onClick={() => navigate('/create')}>Create Event</button>
    
  

<div className='grid grid-cols-3 gap-12'>
{events.map((value) => (
  <div key={value._id}>
        <img src = {value.img} />
        <h2>{value.name}</h2>
        <h2>{value.surname}</h2>
        <p>{value.birth} - {value.death}</p>
    </div>
))}

</div>
    </div>
  )
}

export default Home
