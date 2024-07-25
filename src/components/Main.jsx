import React from 'react'
import {useEffect, useState } from 'react'
import img1 from '../assets/image/slider-1.webp'
import img2 from '../assets/image/slider-2.webp'
import img3 from '../assets/image/slider-4.webp'
import img4 from '../assets/image/slider-5.webp'
import img5 from '../assets/image/slider-6.webp'


const images = [img2,img1,img3, img1, img5];

const Main = () => {
    const [currentImage, setCurrentImage] = useState(null)

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentImage === images.length - 1) {
                setCurrentImage(0);
            } 
            else {
                 setCurrentImage(currentImage + 1);
            }
        }, 3000)
        
        return () => clearInterval(intervalId);
    }, [])

  return (
    <div className=' w-screen h-screen sm:md:w-full md:h-fullrelative bg-cover bg-center'>
         <img src={images[currentImage]} className=' w-screen h-screen md:w-full md:h-full object-cover bg-center absolute'/>
         <h1 className='absolute sm:top-5 text-white p-16 text-3xl sm:text-3xl md:text-center mt-16 sm:mt-44 md:mt-72 md:ml-5 font-bold sm:text-white md:text-white  md:text-7xl'>Decarbonizing the Lagos economy</h1>
         <div className='absolute  m-5 p-5 mt-56 sm:w-[58%] sm:ml-24  sm:mt-[250px] md:mt-[400px] lg:mt-[450px] md:ml-20 bg-white opacity-75 rounded md:p-2'>
            <h3 className=' text-black text-1xl  md:text-2xl font-semibold'>Our mission is to unlock and scale climate action by relying on globally recognized <br/>ISO standards.</h3>
         </div>

         <div className='absolute p-24 flex flex-col bottom-5 md:bottom-0 md:mb-8 sm:flex-row md:flex-row md:w-full md:flex md:items-center md:justify-center'>
            <button className='bg-green-700 text-white p-3 ml-5 sm:h-12 sm:mt-7 sm:bg-red-700  md:bg-green-700 d:mt-5 w-48 font-semibold rounded-lg md:text-1xl'>Register Now</button>
            <button className=' mt-6 ml-5 bg-white text-black p-3 w-48 font-semibold rounded-lg border-black border-2 '>Explore Projects</button>
         </div>
    </div>
  )
}

export default Main;