import React from 'react';

const Values = () => {
  return (
    <div className=' overflow-hidden sm:flex sm:flex-col sm:items-center sm:justify-center'>
      <div className='flex items-center justify-center rounded-full w-28 p-2 h-8 bg-card-bg font-bold ml-36 md:ml-[850px] mt-24 '>
        Values
      </div>
      <div className=''>
        <h1 className='font-bold ml-32 text-4xl mt-5 md:flex md:items-center md:justify-center'>
          Our Values
        </h1>
        <p className='text-h1-text ml-32 text-[20px] mt-5  md:flex md:items-center md:justify-center text-center '>
          Breaking down barriers
        </p>
      </div>
      <div className='md:flex md:flex-row items-center justify-center container md:ml-16 ml-5'>
        <div className=''>
          <h1 className='font-bold  text-2xl mt-8 text-h1-text flex items-center justify-center sm:ml-24'>
            Trustworthy
          </h1>
          <div className=' sm:w-[600px] md:w-[500px] w-[400px] flex items-center justify-around '>
            <p className='mt-2 p-5 text-[15px] md:text-xl text-center sm:ml-14'>
              We're dedicated to enhancing registration process efficiency,
              addressing a key barrier in the voluntary carbon market.
            </p>
          </div>
        </div>

        <div className=''>
          <h1 className='font-bold  text-2xl mt-8 text-h1-text flex items-center justify-center sm:ml-24'>
            Trustworthy
          </h1>
          <div className='sm:w-[600px] md:w-[500px] w-[400px] flex items-center justify-around '>
            <p className='mt-2 p-5 text-[15px] md:text-xl text-center sm:ml-14'>
              We're dedicated to enhancing registration process efficiency,
              addressing a key barrier in the voluntary carbon market.
            </p>
          </div>
        </div>

        <div className=''>
          <h1 className='font-bold  text-2xl mt-8 text-h1-text flex items-center justify-center sm:ml-24'>
            Trustworthy
          </h1>
          <div className=' sm:w-[600px] md:w-[500px]  w-[400px] flex items-center justify-around '>
            <p className='mt-2 p-5 text-[15px] md:text-xl text-center sm:ml-14'>
              We're dedicated to enhancing registration process efficiency,
              addressing a key barrier in the voluntary carbon market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
