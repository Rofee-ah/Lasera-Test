import React from 'react';
import img from '../assets/image/newsletter.webp';

const Newsletter = () => {
  return (
    <div>
      <div class=' relative'>
        <img
          src={img}
          alt=''
          className='absolute h-[700px] object-cover md:w-full md:h-[500px]'
        />
        <h1 className='text-white font-bold text-2xl mt-20 ml-28 absolute md:text-4xl md:ml-[750px] sm:ml-48'>
          Newsletter Sign Up
        </h1>
        <p className='text-white  text-[17px] mt-32 ml-14 md:ml-[700px] absolute sm:ml-48'>
          Register here to receive the latest LASEPA program updates and news.  
        </p>
        <form action='' className='absolute bg-none sm:ml-36'>
          <div className=''>
            <input
              type='text'
              id='fname'
              name='fname'
              value='FirstName'
              className=' ml-10 absolute mt-[220px] border border-1 border-white bg-transparent text-white w-[350px] p-4 rounded-lg md:ml-[530px] md:mt-44'
            />
            <br />
            <input
              type='text'
              id='fname'
              name='fname'
              value='LastName'
              className=' ml-10 absolute mt-[280px] border border-1 border-white bg-transparent  text-white w-[350px] p-4 rounded-lg md:ml-[900px] md:mt-[152px]'
            />
            <br />
          </div>
          <div>
            <input
              type='text'
              id='fname'
              name='fname'
              value='Your Email'
              className='ml-10 absolute mt-[340px] border border-1 border-white bg-transparent  text-white w-[350px] md:w-[500px] p-4 rounded-lg md:ml-[530px] md:mt-[210px] '
            />
            <br />
            <button className='bg-green-700 text-white p-3 ml-10 mt-[400px] md:w-[200px] w-[350px] font-semibold rounded-lg md:text-1xl mb-16 md:ml-[1050px] md:mt-48'>
              Subscribe
            </button>
          </div>

          <p className='text-white  text-[17px] -mt-14 ml-10 absolute  md:ml-[580px] md:mt-0'>
            We care about your data in our private policy
          </p>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
