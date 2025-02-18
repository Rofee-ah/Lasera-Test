import React from 'react';
import { useState } from 'react'
import Button from './Button';
import logo from '../assets/image/lasepa-logo.webp'
const NavBar = () => {
  let Links = [
    { name: 'Explore', link: '/' },
    { name: 'OurProgram', link: '/' },
    { name: 'Blog', link: '/' },
    { name: 'About Us', link: '/' },
    { name: 'Login', link: '/' },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className=' w-full top-0 left-0 bg-white h-20'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7 '>
        <div
          className='font-bold text-2xl cursor-pointer flex items-center'>
          <span className=' mr-1  pt-0'>
            <img src={logo} alt="" srcset="" className='w-48 mt-0 md:w-56'  />
          </span>
          
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl text-nowrap md:my-0 my-7'>
              <a
                href={link.link}
                className=' text-black font-bold hover:text-gray-400 duration-500'>
                {link.name}
              </a>
            </li>
          ))}
          <Button>Register</Button>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
