import React from 'react'
import character from '../img/3dimg.png'
import yasiru from '../img/yasAbout.jpg'

const Aboutme = () => {
  return (
    <div name = 'aboutme' className='lg:h-screen md:h-screen w-full mx-auto  bg-[#13171c]'>
        <h1 className='text-3xl text-center lg:pt-28 lg:text-4xl font-bold yasiru pt-20 mb-6 lg:mb-24'>About me</h1>

        <div className='lg:flex justify-center text-gray-300 lg:w-[1200px] mx-auto lg:mt-0'>
          
          <div className='mx-auto lg:mx-0 lg:self-center'>
          <img src={yasiru} className='w-64 md:w-80 lg:w-[1200px] mx-auto rounded'  alt='yasiruImage' />
        </div>
          
          <div className='lg:ml-12 flex flex-col justify-between'>
            <h1 className='font-bold  lg:text-4xl text-2xl text-center lg:text-left mt-4 lg:mt-0 lg:mb-6'>Yasiru Deshan</h1>
            <p className=' text-justify p-8 lg:p-0'>Hi there! I am a software engineering student with a passion for learning new technologies and collaborating with others. I am currently seeking opportunities to gain hands-on experience in the field and contribute to meaningful projects. In my free time, I enjoy staying up-to-date on the latest industry trends and expanding my knowledge through online courses and resources. I am excited to connect with others in the tech community and explore potential career opportunities.</p>
            <h1 className='lg:mt-8 font-bold lg:text-2xl p-8 lg:p-0 yasiru'>Education</h1>
            <div className='p-8 pt-0 lg:p-0'>
              <p className='font-bold'>St. Aloysius' College - Ratnapura</p>
              <p>2009 - 2017</p>
              <p className='mt-6 font-bold'>Bsc.(Hons) in Information Technology Specializing in Software Engineering - SLIIT</p>
              <p>2021 - Present</p>
              <p>CGPA - 3.36</p>

            </div>
          </div>

          


        </div>
        
        
        
    </div>
  )
}

export default Aboutme