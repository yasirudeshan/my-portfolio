import React from 'react'
import SingleProject from './SingleProject'
import travely from "../img/travely.png"
import healthMart from "../img/healthMart.png"
import app from "../img/app.jpeg"


const Blogs = () => {
  return (
    <div name = 'blogs' className='lg:h-screen w-full'>
        <h1 className='pt-20  text-3xl text-center  lg:pt-28 lg:text-4xl  font-bold yasiru lg:leading-[1.5em] mb-5'>Projects</h1>
        <div className='flex flex-col lg:flex-row  cursor-pointer p-4 lg:w-[1200px] gap-8 w-auto lg:mx-auto lg:justify-between'>
          <SingleProject
            topic = "Travely - MERN Project"
            desc = "Travely is an innovative startup that offers a comprehensive travel and tourism management system. The system simplifies the process of booking and managing travel by providing a one-stop shop website where travellers can easily organize their trips, and book hotels, rental cars, restaurants, events, tour packages, and customized tours."
            image = {travely}
            url = "https://github.com/yasirudeshan/Travely"
          />
          <SingleProject
               topic = "Health Mart - HTML, CSS, PHP, SQL"
               desc = "The project aimed to create a responsive online pharmacy portal for learning the basics of web development. The website included features such as an online shop where users could browse and purchase medications, as well as a shopping cart for managing their selected items."     
               image = {healthMart}
               url = "https://github.com/yasirudeshan/HealthMart"
          />
          <SingleProject
              topic = "Neighbourly - Android Kotlin"
              desc = "Neighbourly is a mobile application built using Kotlin language aimed at reducing poverty in rural Sri Lanka and helping people in economic crises. The app connects volunteers and donors, where volunteers can sign up and provide their details, including their National Identity Card (NIC) for verification"     
              image = {app}
              url = "https://github.com/yasirudeshan/MAD_Project_Neighbourly"
          />
        </div>

    </div>
  )
}

export default Blogs

