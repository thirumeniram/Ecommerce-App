


"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">


      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
       
       
       <Link href="../Settings">
        <span className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            E-shop
          </span>
        </span>
        </Link>

        
        <form className="max-w-md mx-auto rounded-lg block md:hidden">
  <label htmlFor="default-search" className="mb-1 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg className="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
    </div>
    <input type="search" id="default-search" className="block w-full p-2 pl-8 text-xs text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:text-black dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search " required />
  </div>
</form>



<form className="max-w-md mx-auto rounded-lg w-full md:w-100% hidden md:block h-[3rem]  mr-[9.375rem]">
  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
    </div>
    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:text-black dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search " required />
  </div>
</form>
       
       
       

        
        
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} data-collapse-toggle="navbar-hamburger" type="button" className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded={isMenuOpen}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden w-full`} id="navbar-hamburger">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        
            <li>
              <Link href="../Settings" >
               <span className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Settings</span>
              </Link>

            </li>
            <li>
            <Link href="../Cart" >
              <span className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Cart</span>
              </Link>

            </li>
           
          </ul>
        </div>
        <div className="hidden md:flex space-x-4">
        <Link href="../" >
            <span className="text-gray-900 dark:text-white  text-xl font-semibold whitespace-nowrap  dark:hover:bg-gray-700 px-3 py-2 rounded-md">
            Home
            </span>
          </Link>
          <Link href="../Settings" >
            <span className="text-gray-900 dark:text-white  text-xl font-semibold whitespace-nowrap  dark:hover:bg-gray-700 px-3 py-2 rounded-md">
            Settings
            </span>
          </Link>
          
          
           <Link href="../Cart" >
            <span className="text-gray-900 dark:text-white  text-xl font-semibold whitespace-nowrap  dark:hover:bg-gray-700 px-3 py-2 rounded-md">
             Cart
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;