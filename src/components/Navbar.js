import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../img/ydlogo.png'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 navbg'>
        <div>
            <img src={logo} alt = "logo" style={{width: '36px'}} />
        </div>
        {/*menu */}
        <ul className='hidden md:flex cursor-pointer'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About me</li>
            <li className='p-4'>Skills</li>
            <li className='p-4'>Blogs</li>
            <li className='p-4'>Contact me</li>
        </ul>

        {/*hamberger */}
        <div onClick={handleClick} className='md:hidden z-10'>
           {!nav ? <FaBars /> : <FaTimes /> }
        </div>

        {/*mobile menu */}
        <ul className={!nav ? 'hidden' : 'md:hidden hover:text-white absolute top-0 left-0 w-full h-screen bg-[#080b0f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About me</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Blogs</li>
            <li className='py-6 text-4xl'>Contact me</li>
        </ul>
        

    </div>
  )
}

export default Navbar