"use client"


import React, { useState } from 'react';
import Link from 'next/link';

const CheckoutNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link href="../">
        <span  className="flex items-center space-x-3 rtl:space-x-reverse">
  
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">E-shop</span>
        </span>
        </Link>

        <div className="flex-1 flex justify-center">
        <span className="self-center text-lg md:text-2xl md:ml-[7.5rem]  font-semibold whitespace-nowrap dark:text-white">
            Checkout
          </span>
        </div>
        
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} data-collapse-toggle="navbar-hamburger" type="button" className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded={isMenuOpen}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden w-full`} id="navbar-hamburger">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <li>
              <Link  href="../" >
              <span className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Home</span>
              </Link>
            </li>
          
            <li>
            <Link href="../Settings">
              <span  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Settings</span>
              </Link>
            </li>
           
            <li>
            <Link href="../Settings">
              <span  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Cart</span>
              </Link>
            </li>
           
          </ul>
        </div>
        <div className="hidden md:flex space-x-4">
        <Link href="../">
          <span  className="text-gray-900 dark:text-white text-xl font-semibold whitespace-nowrap  dark:hover:bg-gray-700 px-3 py-2 rounded-md">Home</span>
          </Link>
        <Link href="../Settings">
          <span  className="text-gray-900 dark:text-white  text-xl font-semibold whitespace-nowrap  dark:hover:bg-gray-700 px-3 py-2 rounded-md">Settings</span>
        </Link>
        <Link href="../Cart">
          <span  className="text-gray-900 dark:text-white  text-xl font-semibold whitespace-nowrap  dark:hover:bg-gray-700 px-3 py-2 rounded-md">Cart</span>
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default CheckoutNavbar;
