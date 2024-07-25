import React from 'react';

const Question = () => {
  return (
    <div className=''>
      <div className='w-full md:h-[500px] h-[600px] bg-qus-bg mt-28 md:flex flex-row md:items-center md:justify-around'>
        <div className='md:-mt-80'>
          <p className='text-xl pt-16 font-semibold flex items-center justify-center  '>
            Frequently Asked Questions
          </p>
          <h1 className='font-bold flex items-center justify-center text-2xl md:text-4xl'>
            Got questions?
          </h1>
          <h1 className='font-bold flex items-center justify-center text-2xl md:text-4xl md:ml-20'>
            We've got you answers
          </h1>
        </div>

        <div className='md:-mt-32 sm:ml-36'>
          <div className='bg-white md:w-[750px]  w-[400px] h-16 mt-10 rounded-lg ml-3 flex'>
            <h1 className='font-semibold pt-4 ml-6 md:font-bold md:text-xl'>
              What is a carbon credit?
            </h1>
            <div className='w-6 h-6 bg-white rounded-full border border-1  border-black ml-36 md:ml-[450px] mt-5'></div>
          </div>
          <hr className='bg-black h-[2px] w-[390px] md:w-[740px] mt-3 ml-4' />

          <div className='bg-white w-[400px] md:w-[748px]  h-16 mt-10 rounded-lg ml-3 flex'>
            <h1 className='font-semibold pt-4 ml-6  md:font-bold md:text-xl'>
              What is a GHG program?
            </h1>
            <div className='w-6 h-6 bg-white rounded-full border border-1  border-black md:ml-[450px] ml-36 mt-5'></div>
          </div>
          <hr className='bg-black h-[2px] w-[390px] md:w-[740px] mt-3 ml-4' />

          <div className='bg-white w-[400px] md:w-[750px]  h-16 mt-10 rounded-lg ml-3 flex'>
            <h1 className='font-semibold pt-4 ml-6  md:font-bold md:text-xl'>
              What is "vintage"?
            </h1>
            <div className='w-6 h-6 bg-white rounded-full border border-1  border-black md:ml-[500px] ml-48 mt-5'></div>
          </div>
          <hr className='bg-black h-[2px] w-[390px] md:w-[740px] mt-3 ml-4' />
        </div>
      </div>
    </div>
  );
};

export default Question;
