import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../img/ydlogo.png'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px]  flex justify-between items-center px-4 text-gray-300 navbg '>
        <div className='sm:w-10 w-6'>
            <img src={logo} alt = "logo" style={{width: '36px'}} />
        </div>
        {/*menu */}
        <ul className='hidden md:flex cursor-pointer'>
            <li className='p-4 navli'>
                <Link to ='home' smooth={true} duration = {500}>Home</Link>
            </li>
            <li className='p-4 navli'>
                <Link to ='aboutme' smooth={true} duration = {500}>About me</Link>
            </li>
            <li className='p-4 navli'>
                <Link to ='skills' smooth={true} duration = {500}>Skills</Link>
            </li>
            <li className='p-4 navli'>
                <Link to ='blogs' smooth={true} duration = {500}>Blogs</Link>
            </li>
            <li className='p-4 navli'>
                <Link to ='contactme' smooth={true} duration = {500}>Contact me</Link>
            </li>
        </ul>

        {/*hamberger */}
        <div onClick={handleClick} className='md:hidden z-10'>
           {!nav ? <FaBars /> : <FaTimes /> }
        </div>

        {/*mobile menu */}
        <ul className={!nav ? 'hidden' : 'md:hidden hover:text-white absolute top-0 left-0 w-full h-screen bg-[#080b0f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to ='home' smooth={true} duration = {500}>Home</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick}  to ='aboutme' smooth={true} duration = {500}>About me</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick}  to ='skills' smooth={true} duration = {500}>Skills</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick}  to ='blogs' smooth={true} duration = {500}>Blogs</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick}  to ='contactme' smooth={true} duration = {500}>Contact me</Link>
            </li>
        </ul>
        

    </div>
  )
}

export default Navbar