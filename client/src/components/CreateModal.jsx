import React, { useContext, useState } from 'react'
import axios from 'axios';
import { EventContext } from '../context/EventContext';

const CreateModal = () => {

    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');  
    const [lang, setLang] = useState('');
    const [location, setLocation] = useState('');
    const [time, setTIme] = useState('');
  
    const { events, setEvents, setShowModal} = useContext(EventContext);


   
    
    
    const handleEvent = async () => {
        const token = localStorage.getItem('token');

        const response = await axios.post('http://localhost:5000/api/events', {
            title, img, lang, location, time
        }, 
            {
                headers: {
                  Authorization: `Bearer ${token}`
              }
              }
        );
        setEvents([...events, response.data.events]);

        setShowModal(false);
    console.log(events);
    }


  return (
    <div className='absolute w-1/2 h-full top-1/2 left-1/2 modal -translate-x-1/2 -translate-y-1/2 z-10  p-8 grid grid-cols-2  gap-4 mt-12' >
        <div className='flex flex-col items-start gap-4 '>
        <label className='text-xl font-bold'>Title</label> 
       <input type = "text" className='py-2 px-4 rounded-md outline-none' onChange={(e) => setTitle(e.target.value)}/> 
        </div> 
 
        <div className='flex flex-col items-start gap-4 '>
        <label className='text-xl font-bold'>Thumbnail</label> 
       <input type = "text" className='py-2 px-4 rounded-md outline-none' onChange={(e) => setImg(e.target.value)}/> 
        </div> 
 
        <div className='flex flex-col items-start gap-4 '>
        <label className='text-xl font-bold'>Language</label> 
       <input type = "text" className='py-2 px-4 rounded-md outline-none' onChange={(e) => setLang(e.target.value)}/> 
        </div> 
    
        <div className='flex flex-col items-start gap-4 '>
        <label className='text-xl font-bold'>Location</label> 
       <input type = "text" className='py-2 px-4 rounded-md outline-none' onChange={(e) => setLocation(e.target.value)}/> 
        </div> 
 
        <div className='flex flex-col items-start gap-4 '>
        <label className='text-xl font-bold'>Time</label>
       <input type = "text" className='py-2 px-4 rounded-md outline-none' onChange={(e) => setTIme(e.target.value)}/>
        </div>


        <button className='bg-black text-white w-56 h-12 rounded-md duration-500 ease-in
         hover:bg-white hover:text-black absolute bottom-20 right-52' onClick={handleEvent}>Create</button>
    </div>
  )
}

export default CreateModal
