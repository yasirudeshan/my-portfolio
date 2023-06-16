import React from 'react'
import yas from '../img/yas.png'

import Typed from 'react-typed'
import {FaTwitter, FaLinkedin, FaGithub, FaBehance} from 'react-icons/fa'




const Home = () => {
  return (
    <div name='home' className='md:h-screen lg:w-[1200px] items-center  md:grid grid-cols-2 h:screen md:768px mx-auto  justify-between'>
        <div className='flex flex-col text-xs text-gray-300 font-semibold grid-span-3'>
            <h1 className='md:text-6xl text-4xl md:text-left lg:text-left text-center pt-20'>Hi, I'm</h1>

            <Typed 
                className='md:text-6xl md:pt-4 pt-1 yasiru text-4xl col-span-1 md:text-left lg:text-left text-center' 
                strings={['Yasiru Deshan']} 
                typeSpeed={150} 
                backSpeed={150}
                loop = 'true'
                 />

            <p className='md:text-xl uppercase font-light pt-4  md:text-left lg:text-left text-center'>Full-Stack Developer</p>
            
            
            <div className='py-8'>
            <ul className='flex gap-6 lg:justify-start md:justify-start justify-center'>
            <li className=''>
              <a href="https://twitter.com/rpyasiru" target={"_blank"}>
                <FaTwitter size={'30'}  /> 
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/rpyasiru" target={"_blank"}>
                <FaLinkedin size={'30'}  /> 
              </a>
            </li>
            <li>
              <a href="https://github.com/yasirudeshan" target={"_blank"}>
              <FaGithub size={'30'}  />
              </a>
            </li>
            <li>
              <a href="https://behance.com/rpyasiru" target={"_blank"}>
              <FaBehance size={'30'}  />
              </a>
            </li>
            </ul>
            {/*<img src={arrow} alt = "yas" style={{width: '370px'}} />*/}
            </div>
        </div>
        <div className='col-span-1 flex justify-center'>
        <img src={yas} alt = "yas" style={{width: '700px'}} />
        </div>
    </div>
    
  )
}

export default Home