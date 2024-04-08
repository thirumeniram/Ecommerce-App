"use client"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/slices/cart_slice'; 

const AddToCartButton = ({ id, name, price,image }) => {
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
      className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      {isAdded ? 'Added' : 'Add to Cart'}
    </button>
  );
};

export default AddToCartButton;
