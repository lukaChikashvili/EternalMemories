import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Comments = () => {
    const [comment, setComment] = useState('');
    const [allComments, setAllComments] = useState([]);


    const { id } = useParams();

    const writeComment = async () => {
        const token = localStorage.getItem("token");
        const response = await axios.post(`http://localhost:5000/api/events/${id}/comments`, {text: comment}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        } 
        );

        setComment('');
        setAllComments([...allComments, response.data]);
       

    }


    const getAll = async () => {
        const token = localStorage.getItem('token');

        const response = await axios.get(`http://localhost:5000/api/events/${id}/comments/all`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        } );

        setAllComments(response.data.getComment);

    
    }

    useEffect(() => {
      getAll();
    }, [comment])

  return (
    <div className='pt-12 px-36 text-white w-full md:w-4/5 m-auto pb-36'>
       <div className='flex flex-col md:flex-row gap-4 items-center '>
        <input type='text' placeholder='Your message ' className='outline-none text-pink-500 py-2 px-12 rounded-md' onChange={(e) => setComment(e.target.value)}/>
        <button className='bg-pink-500 px-12 py-2 border-2 rounded-md duration-500 ease-in hover:bg-transparent border-pink-500' onClick={writeComment}>Sumbit</button>
       </div>

      {allComments.map((value) => (
         <div className='border-2 border-pink-500 rounded-md p-8 mt-12 relative w-full'>
            <h2 className='text-white text-2xl'>{value.text}</h2>

            <span className='text-pink-500 text-2xl absolute right-12 font-bold'>{value.user}</span>
         </div>
      ))}
    </div>
  )
}

export default Comments
