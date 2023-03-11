import React from 'react'
import character from '../img/3dimg.png'

const Aboutme = () => {
  return (
    <div name = 'aboutme' className='h-screen md:h-screen w-full mx-auto'>
        <h1 className='text-3xl text-center md:pt-28 md:text-5xl font-bold yasiru pt-20'>About me</h1>
        <div className=' m-12 md:grid md:grid-cols-4 text-center'>
          <div className='col-span-1 s md:w-[300px] img'>
            <img src={character}  alt = "character" style={{width: '200px'}}  />
          </div>
          <div className='text-gray-300 col-span-3'>
            <p className='text-justify md:text-center italic'>Hi there! I am a software Engineering student with a passion for learning new  technologies and collaborating with others. 
            I am currently seeking opportunities to gain hands-on experience in the field and contribute to meaningful projects. </p>
            <ul className='pt-4  md:pt-8 md:p-12 text-base leading-8s text-clip mt-6'>
              <li >Bsc. Software Engineering Undergraduate at Sri Lanka Institute of Information Technology - SLIIT</li>
              
            </ul>

          </div>
        </div>
    </div>
  )
}

export default Aboutme