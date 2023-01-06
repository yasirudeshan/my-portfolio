import React from 'react'
import yas from '../img/yas.png'
import arrow from '../img/dashedarrow.png'
import Typed from 'react-typed'

const Home = () => {
  return (
    <div name='home' className='md:h-screen md:grid grid-cols-2  md:768px md:p-40  p-20 md:flex'>
        <div className='flex flex-col text-xs text-white font-semibold grid-span-3'>
            <h1 className='md:text-6xl text-4xl'>Hi, I'm</h1>
            

            <Typed 
                className='md:text-7xl md:pt-4 pt-1 yasiru text-4xl col-span-1' 
                strings={['Yasiru Deshan']} 
                typeSpeed={150} 
                 />

            <p className='md:text-sm font-thin pt-4'>Hi there! I am a software engineering student with a passion for learning new  technologies and collaborating with others. 
            I am currently seeking opportunities to gain hands-on experience in the field and contribute to meaningful projects. </p>
            <div className=''>
            <img src={arrow} alt = "yas" style={{width: '370px'}} />
            </div>
        </div>
        <div className='col-span-1'>
        <img src={yas} alt = "yas" style={{width: '600px'}} />
        </div>
    </div>
    
  )
}

export default Home