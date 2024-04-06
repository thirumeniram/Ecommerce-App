"use client"

import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">


      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
  
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">E-shop</span>
        </a>
        
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} data-collapse-toggle="navbar-hamburger" type="button" className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded={isMenuOpen}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden w-full`} id="navbar-hamburger">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <li>
              <a href="../" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Home</a>
            </li>
            <li>
              <a href="../Settings" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="../Cart" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Cart</a>
            </li>
           
          </ul>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="../" className="text-gray-900 dark:text-white text-xl font-semibold whitespace-nowrap  dark:hover:bg-gray-700 px-3 py-2 rounded-md">Home</a>
          <a href="../Settings" className="text-gray-900 dark:text-white  text-xl font-semibold whitespace-nowrap  dark:hover:bg-gray-700 px-3 py-2 rounded-md">Settings</a>
          <a href="../Cart" className="text-gray-900 dark:text-white text-xl font-semibold whitespace-nowrap  dark:hover:bg-gray-700 px-3 py-2 rounded-md">Cart</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
