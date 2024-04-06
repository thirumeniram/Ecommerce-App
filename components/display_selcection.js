"use client"

import React from 'react';

const CustomForm = () => {
  // Handler for changes in each select
  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    alert(`Selected Option: ${selectedOption}`);
  };

  return (
    <form className="max-w-sm mx-auto">
      <label htmlFor="navbarSelect" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Navbar Options</label>
      <select
        id="navbarSelect"
        className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleSelectChange}
       
      >
         <option value="" disabled selected>Navbar</option>
        <option value="Navbar 1">Navbar 1</option>
        <option value="Navbar 2">Navbar 2</option>
      </select>

      <label htmlFor="contentSelect" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content Options</label>
      <select
        id="contentSelect"
        className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleSelectChange}
      >
        <option value="" disabled selected>catalog</option>
        <option value="Carousel">Carousel</option>
        <option value="View All">View All</option>
      </select>

      <label htmlFor="productCardSelect" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Card Options</label>
      <select
        id="productCardSelect"
        className="block w-full px-4 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleSelectChange}
      >
        <option value="" disabled selected>Product</option>
        <option value="Product Card 1">Product Card 1</option>
        <option value="Product Card 2">Product Card 2</option>
      </select>
    </form>
  );
};

export default CustomForm;
