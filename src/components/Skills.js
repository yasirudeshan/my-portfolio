import React from 'react'
import {FaReact, FaJava, FaNode, FaHtml5, FaCss3} from 'react-icons/fa'
import {SiTailwindcss, SiMongodb, SiJavascript, SiPython, SiMysql, SiAdobephotoshop, SiFigma, SiIntellijidea } from 'react-icons/si'
import {TbBrandVisualStudio, } from 'react-icons/tb'



const Skills = () => {
  return (
    <div name = 'skills' className=' w-full mx-auto mb-8'>
        <h1 className='text-3xl text-center lg:pt-28 lg:text-4xl font-bold yasiru pt-20 mb-24'>Skills</h1>

        <div className='flex flex-wrap justify-center items-center px-8 gap-4 lg:gap-8 lg:pt-16 mt-6 '>
          
          <FaJava size={50} color='white'/>
          <SiJavascript size={50} color='white'/>

          <FaReact size={50} color='white'/>
          <FaNode size={50} color='white'/>
          <SiMongodb size={50} color='white'/>
          
          
          <SiPython size={50} color='white'/>
          <FaHtml5 size={50} color='white'/>
          <FaCss3 size={50} color='white'/>
          
          <SiTailwindcss size={50} color='white'/>

          <SiMysql size={50} color='white'/>

        </div>

    
        <div className='flex justify-center  gap-4 lg:gap-8 pt-12'>
          <TbBrandVisualStudio size={50} color='white'/>
          <SiIntellijidea size={50} color='white'/>
          <SiAdobephotoshop size={50} color='white'/>
          <SiFigma size={50} color='white'/>

           
        </div>
        
    </div>
  )
}

export default Skills

