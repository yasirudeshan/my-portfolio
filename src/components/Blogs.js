import React from 'react'
import SingleProject from './SingleProject'



const Blogs = (props) => {
  return (
    <div name = 'blogs' className='h-screen w-full'>
        <h1 className='pt-20  text-3xl text-center lg:pt-28 lg:text-4xl  font-bold yasiru lg:leading-[1.5em] mb-10 '>Projects</h1>
        <div className='flex flex-col lg:flex-row  p-4 lg:w-[1200px] gap-8 lg:mx-auto lg:justify-between'>
          <SingleProject/>
          <SingleProject/>
          <SingleProject/>
        </div>

    </div>
  )
}

export default Blogs

