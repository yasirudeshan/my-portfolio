import React from 'react'
import travely from '../img/travely.png'
import { Button } from 'react-scroll'

const SingleProject = () => {
  return (
    <div className='lg:flex-row lg:w-[1200px] mx-auto rounded-lg  shadow-lg shadow-[#212832]'>
        <div className='bg-white  rounded-xl'>
            <img className='rounded-lg' src={travely}/>
            
            <div className='w-full bg-[#161B22] p-4   text-white rounded-lg'>
                <h1 className = 'mb-3 font-bold text-2xl'>Travely - MERN Project</h1>
                <p className='text-justify text-sm'>Travely is an innovative startup that offers a comprehensive travel and tourism management system. The system simplifies the process of booking and managing travel by providing a one-stop shop website where travellers can easily organize their trips, and book hotels, rental cars, restaurants, events, tour packages, and customized tours.</p>
                <button className='bg-white text-black p-2 rounded-md mt-4 '>See more</button>
            </div>
            
        </div>
    </div>
  )
}

export default SingleProject