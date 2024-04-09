"use client"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/slices/cart_slice'; 

const AddToCartButton1 = ({ id, name, price,image }) => {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart({
      id,
      name,
      price,
      image
    }));
    setIsAdded(true);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="ml-4 inline-block rounded-md bg-blue-600 px-3 py-2.5 text-center text-xs font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
     {isAdded ? 'Added ' : 'Add to'}
     <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
     </svg>
    
    </button>
  );
};

export default AddToCartButton1;
