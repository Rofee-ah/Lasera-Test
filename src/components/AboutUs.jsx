import React from 'react';
import imgf from '../assets/image/img-45.webp';

const AboutUs = () => {
  return (
    <div className=''>
      <div className='bg-green-800 w-full h-4/5 flex flex-col relative sm:h-[746px] md:h-[400px] sm:grid sm:grid-cols-2 md:flex md:flex-row'>
        <div className=' h-36 sm:h-44 border-white border rounded-lg text-base sm:ml-5 md:ml-14 md:w-[800px] p-4  m-6 mt-16 md:mt-12 '>
          <h1 className='text-white font-bold text-2xl'>About Us</h1>
          <p className='text-white text-1xl'>
            Carbon crediting program that enhances confidence in carbon market
            integrity.
          </p>
        </div>

        <div className=' h-36 sm:h-44 border-white border rounded-lg text-base p-4 md:w-[800px] m-6 mt-5 md:mt-12 sm:mt-16'>
          <h1 className='text-white font-bold text-2xl'>Our Market</h1>
          <p className='text-white text-1xl'>
            Trusted partner in carbon markets since 1996 as the world’s first
            carbon registry.
          </p>
        </div>
        <div className=' h-36 sm:h-44 border-white border rounded-lg text-base p-4 md:w-[800px] m-6 mt-5 md:mt-12 sm:-mt-5'>
          <h1 className='text-white font-bold text-2xl'>Our Program</h1>
          <p className='text-white text-1xl'>
            Science-based methodologies to reduce and remove greenhouse gas
            emissions.
          </p>
        </div>
        <div className=' h-36 sm:h-44 border-white border rounded-lg text-base p-4 md:w-[800px] m-6 mt-5 md:mt-12 sm:-mt-5'>
          <h1 className='text-white font-bold text-2xl'>Our Journey</h1>
          <p className='text-white text-1xl'>
            American Carbon Registry is now ACR. Get the details in our recent
            announcement.
          </p>
        </div>
        <div className=' h-32 sm:h-44 border-green-800 border rounded-lg text-base p-5 md:w-[900px] m-6 mt-5 md:mt-12 md:absolute block md:hidden'>
          <h1 className='text-green-800  font-bold text-2xl'>Our Journey</h1>
          <p className='text-green-800 text-1xl'>
            American Carbon Registry is now ACR. Get the details in our recent
            announcement.
          </p>
        </div>
      </div>
    <div className='rounded-md'>
      <img
        src={imgf}
        alt=''
        srcset=''
        className='object-cover -mt-36 w-96 h-56 ml-6 sm:ml-1 sm:h-96 sm:-mt-[300px] p-6 rounded-sm absolute sm:w-full sm:px-12 md:w-full md:p-16 md:h-2/4 md:-mt-48 lg:-mt-48 z-10 '
      />
    </div>

      </div>
      

  );
};

export default AboutUs;
