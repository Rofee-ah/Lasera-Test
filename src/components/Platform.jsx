import React from 'react';
import img1 from '../assets/image/oct.svg';
import img2 from '../assets/image/spahre.svg';
import img3 from '../assets/image/rec.svg';
import img4 from '../assets/image/brand.svg';

const Platform = () => {
  return (
    <div className='md:mt-96'>
      <h1 className='mt-32 text-h1-text font-bold text-xl flex items-center justify-center md:text-5xl'>
        Who can use our platform
      </h1>
      <h1 className='text-primary  text-xl p-12 md:text-[25px] md:flex md:items-center md:justify-center md:-mt-6'>
        Stakeholders benefit greatly by using our platform
      </h1>
      <div className='flex-col md:grid md:grid-cols-2 md:justify-center md:max-w-[90%] md:max-auto lg:gap-20 md:gap-6 max-auto'>
        <div className=' bg-card-bg text-primary w-[350px] h-2/4 ml-10 rounded-lg md:w-auto lg:w-[700px] lg:h-[900px] md:p-5 md:h-[1000px] md:ml-24 sm:w-[600px]  sm:ml-16 '>
          <h1 className='text-h1-text font-bold text-[26px] w-full p-10 text-2xl'>
            Project proponents
          </h1>
          <p className='text-h1-text font-semibold m-10 -mt-6'>
            {' '}
            Comprehensive platform for Carbon Project Management
          </p>
          <hr className='mt-10  font-bold w-full' />
          <p className='text-xl p-10'>
            Our platform is designed to help project proponents manage their
            carbon projects throughout their full lifecycle. With our
            user-friendly features, you can easily track your carbon credit
            inventory, sell your credits, and communicate with stakeholders to
            maximize the value of your projects. Whether you are starting out
            with a new project or have existing ones, our tools and resources
            can support you every step of the way.
          </p>
          <img
            src={img3}
            alt=''
            srcset=''
            className='p-10 md:-mt-10 sm:ml-32 sm:p-5 md:ml md:h-60 lg:h-80'
          />
          <div className='flex-col ml-7 md:flex md:items-center'>
            <button className='bg-but-color text-green-700 p-3 ml-2 w-64 font-semibold rounded-lg md:text-1xl mb-5 md:w-full'>
              Learn more
            </button>
            <button className='bg-green-700 text-white p-3 ml-5  w-64 font-semibold rounded-lg md:text-1xl mb-16 md:w-full'>
              Join today
            </button>
          </div>
        </div>

        <div className=' bg-card-bg text-primary w-[350px] h-2/4 ml-10 rounded-lg mt-5 md:w-auto lg:w-[700px] lg:h-[900px] md:mt-0  md:h-[1000px]  sm:w-[600px]  sm:ml-16'>
          <h1 className='text-h1-text font-bold text-[26px] w-full p-10'>
            Project developers
          </h1>
          <p className='text-h1-text font-semibold m-10 -mt-6'>
            Comprehensive platform for Carbon Project Management
          </p>
          <hr className='mt-10  font-bold w-full' />
          <p className='text-xl p-10'>
            Our platform is designed to help project proponents manage their
            carbon projects throughout their full lifecycle. With our
            user-friendly features, you can easily track your carbon credit
            inventory, sell your credits, and communicate with stakeholders to
            maximize the value of your projects. Whether you are starting out
            with a new project or have existing ones, our tools and resources
            can support you every step of the way.
          </p>
          <img
            src={img1}
            alt=''
            srcset=''
            className='p-10  md:-mt-10 sm:ml-28 sm:p-5  md:ml- md:h-60 lg:h-80'
          />
          <div className='flex-col ml-10 md:flex md:items-center'>
            <button className='bg-but-color text-green-700 p-3 ml-2 w-64 font-semibold rounded-lg md:text-1xl mb-5 md:w-full  md:-ml-5'>
              Learn more
            </button>
            <button className='bg-green-700 text-white p-3 ml-5  w-64 font-semibold rounded-lg md:text-1xl mb-16 md:w-full md:-ml-5'>
              Join today
            </button>
          </div>
        </div>

        <div className=' bg-card-bg text-primary w-[350px] h-2/4 ml-10 rounded-lg  md:w-[420px] lg:w-[700px] lg:h-[900px]  md:p-5 md:h-[1000px]  md:ml-24 mt-5 md:mt-24 sm:w-[600px]  sm:ml-16'>
          <h1 className='text-h1-text font-bold text-[26px] w-full p-10'>
            Marketplaces
          </h1>
          <p className='text-h1-text font-semibold m-10 -mt-6'>
            Carbon Credit Sourcing Made Easy
          </p>
          <hr className='mt-10  font-bold w-full' />
          <p className='text-xl p-10'>
            Our streamlined processes enables marketplaces to efficiently
            integrate with the platform to source and offer carbon credits for
            sale from a range of projects. With our platform, marketplaces can
            expand their offerings, increase their impact, and connect with a
            wider network of buyers and sellers.
          </p>
          <img
            src={img2}
            alt=''
            srcset=''
            className='p-10 md:-mt-10 sm:ml-32 sm:p-5 md:ml md:h-60 lg:h-80'
          />
          <div className='flex-col ml-8 md:flex md:items-center'>
            <button className='bg-but-color text-green-700 p-3 ml-5 md:mt-5 w-64 font-semibold rounded-lg md:text-1xl mb-5 md:w-full'>
              Learn more
            </button>
            <button className='bg-green-700 text-white p-3 ml-5 md:mt-5 w-64 font-semibold rounded-lg md:text-1xl mb-16 md:w-full'>
              Join today
            </button>
          </div>
        </div>

        <div className=' bg-card-bg text-primary w-[350px] h-2/4 ml-10 rounded-lg mt-5  md:w-[420px] lg:w-[700px] lg:h-[900px] md:h-[1000px]  md:mt-24 sm:w-[600px]  sm:ml-16'>
          <h1 className='text-h1-text font-bold text-[26px] w-full p-10'>
            Organizations
          </h1>
          <p className='text-h1-text font-semibold m-10 -mt-6'>
            Climate action portfolio at the palm of your hands
          </p>
          <hr className='mt-10  font-bold w-full' />
          <p className='text-xl p-10'>
            Our platform allows organisations to create an account and easily
            source and manage carbon credits for their offsetting and
            compensation needs. With our user friendly platform you can quickly
            find and manage the carbon credits you need to achieve your
            sustainability goals.
          </p>
          <img
            src={img4}
            alt=''
            srcset=''
            className='p-10 md:-mt-10 sm:ml-32 sm:p-5 md:ml md:h-60 lg:h-80'
          />
          <div className='flex-col ml-10 md:flex md:items-center'>
            <button className='bg-but-color text-green-700 p-3  md:mt-5 w-64 font-semibold rounded-lg md:text-1xl mb-5 md:w-full  md:-ml-3'>
              Learn more
            </button>
            <button className='bg-green-700 text-white p-3 ml-5  w-64 font-semibold rounded-lg md:text-1xl mb-16 md:w-full  md:-ml-3'>
              Join today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
