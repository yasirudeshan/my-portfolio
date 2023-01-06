import React from 'react'
import yas from '../img/yas.png'
import arrow from '../img/dashedarrow.png'

const Home = () => {
  return (
    <div className='md:768px md:p-40 sm:640px p-20 md:flex grid-cols-4'>
        <div className='flex flex-col text-xs text-white font-semibold grid-cols-3'>
            <h1 className='text-sm md:text-6xl'>Hi, I'm</h1>
            <h1 className='md:text-7xl md:pt-4 pt-1 yasiru text-xl grid-cols-1'>Yasiru Deshan</h1>
            <p className='md:text-sm font-thin pt-4 '>Hi there! I am a software engineering student with a passion for learning new <br/> technologies and collaborating with others. 
            I am currently seeking opportunities <br/>to gain hands-on experience in the field and contribute to meaningful projects. </p>
            <img src={arrow} alt = "yas" style={{width: '370px'}} />
        </div>
        <div>
        <img src={yas} alt = "yas" style={{width: '600px'}} />
        </div>
    </div>
    
  )
}

export default Home