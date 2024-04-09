 "use client"


import { useDispatch, useSelector } from 'react-redux';
import { setNavBarVariant, setProductCardVariant, setCatalogView } from '../redux/slices/display_slice'; // Adjust the import path as necessary

const CustomForm = () => {
  const dispatch = useDispatch();

  // If you want to reflect the current state in the form, use useSelector
  const currentNavBarVariant = useSelector(state => state.display.navBarVariant);
  const currentProductCardVariant = useSelector(state => state.display.productCardVariant);
  const currentCatalogView = useSelector(state => state.display.catalogView);

  // Handler for Navbar option change
  const handleNavBarChange = (event) => {
    dispatch(setNavBarVariant(event.target.value));
  };

  // Handler for Content option change
  const handleContentChange = (event) => {
    dispatch(setCatalogView(event.target.value));
  };

  // Handler for Product Card option change
  const handleProductCardChange = (event) => {
    dispatch(setProductCardVariant(event.target.value));
  };

  return (
    <form className="max-w-sm mx-auto">
    
      <label htmlFor="navbarSelect" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Navbar Options</label>
      <select
        id="navbarSelect"
        className="hidden sm:block  w-full  p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "

        onChange={handleNavBarChange}
        value={currentNavBarVariant} // Reflect the current state
      >
        <option value="NavBar1">Navbar 1</option>
        <option value="NavBar2">Navbar 2</option>
      </select>

      <select
        id="navbarSelect"
        className="md:hidden  w-[9.5rem] ml-[7rem] pl-[2.5rem] mb-[3.125rem] p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "

        onChange={handleNavBarChange}
        value={currentNavBarVariant} // Reflect the current state
      >
        <option value="NavBar1">Navbar 1</option>
        <option value="NavBar2">Navbar 2</option>
      </select>

      <label htmlFor="contentSelect" className="block mb-2 text-sm    font-medium text-gray-900 dark:text-white">Content Options</label>
      <select
        id="contentSelect"
        className="hidden sm:block w-full   md:ml-0 bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleContentChange}
        value={currentCatalogView} // Reflect the current state
      >
      <option value="viewAll">View All</option>
      <option value="carousel">Carousel</option>
    
      </select>

      <select
        id="contentSelect"
        className="md:hidden  w-[9.5rem] ml-[7rem] pl-[2.5rem] mb-[3.125rem] bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleContentChange}
        value={currentCatalogView} // Reflect the current state
      >
      <option value="viewAll">View All</option>
      <option value="carousel">Carousel</option>
    
      </select>

      <label htmlFor="productCardSelect" className="block mb-2   text-sm font-medium text-gray-900 dark:text-white">Product Card Options</label>
     
      <select
        id="productCardSelect"
        // className="w-full block  px-4 py-3 text-sm  rounded-lg text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        className="hidden sm:block w-full px-4 py-3 text-sm rounded-lg text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleProductCardChange}
        value={currentProductCardVariant} // Reflect the current state
      >

      
        <option value="ProductCard1" >ProductCard 1</option>
        <option value="ProductCard2">ProductCard 2</option>
        
      </select>

      <select
        id="productCardSelect"
        className=" md:hidden w-[13.5 rem]  ml-[7rem] block  px-4 py-3 text-sm  rounded-lg text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
       
        onChange={handleProductCardChange}
        value={currentProductCardVariant} // Reflect the current state
      >

      
        <option value="ProductCard1" >ProductCard 1</option>
        <option value="ProductCard2">ProductCard 2</option>
      </select>
      
    </form>
  );
};

export default CustomForm;
