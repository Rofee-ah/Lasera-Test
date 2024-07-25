import React from 'react';
import logo from '../assets/image/logo.webp';

const Footer = () => {
  return (
    <div className='md:mt-[450px] mt-[700px]'>
      <div className='bg-fot-bg w-full h-[550px] md:h-[450px] '>
        <div className=''>
          <div className='md:mt-[500px] md:flex md:flex-col '>
            <img
              src={logo}
              alt=''
              className=' rounded-lg w-56 md:w-44  ml-24 pt-10 md:mb-24 md:absolute md:ml-40 md:mt-24' 
            />
            <div className='w-96 text-white text-md md:mt-48 absolute ml-40'>
            <p className='hidden md:block  '>Our platform allows organizations to create an account and easily source and manage carbon credits for their offsetting and compensation needs.</p>

            </div>
          </div>

          <div className='grid grid-cols-2 ml-10 md:flex md:flex-row md:gap-24 md:items-center md:justify-center md:ml-[520px] md:mt-24'>
            <div>
              <h1 className='text-white font-bold text-2xl mt-6 md:text-3xl'>
                Company
              </h1>
              <p className='text-white  text-md mt-3'>About Us</p>
              <p className='text-white  text-md mt-3'>Contact Us</p>
            </div>
            <div>
              <h1 className='text-white font-bold text-2xl mt-6 md:text-3xl'>
                Features
              </h1>
              <p className='text-white  text-md mt-3'>Explore</p>
              <p className='text-white  text-md mt-3'>Pricing</p>
            </div>
            <div>
              <h1 className='text-white font-bold text-2xl mt-6 md:text-3xl md:mt-16'>
                Resources
              </h1>
              <p className='text-white  text-md mt-3'>Help Center</p>
              <p className='text-white  text-md mt-3'>Guide</p>
              <p className='text-white  text-md mt-3'>FAQs</p>
            </div>
            <div>
              <h1 className='text-white font-bold text-2xl mt-6 md:text-3xl md:mt-16'>
                Legal
              </h1>
              <p className='text-white  text-md mt-3'>Terms of Service</p>
              <p className='text-white  text-md mt-3'>Private Policy</p>
              <p className='text-white  text-md mt-3'>Cookies Policy</p>
            </div>
          </div>
        </div>

        <hr className='text-white h-[2px] w-[350px] mt-14 ml-9 md:w-[1400px] md:ml-36' />
        <p className='text-white  text-md mt-10 ml-20 md:ml-[800px]'>
          © 2024 by lasepa. All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
