import Link from 'next/link';
import Image from 'next/image';

import AddToCartButton1 from '../Buttons/card_button2';
import Rating from '../Buttons/ratings';

const ProductCard4= ({ id, src, alt, name, price, rating }) => {

 
  
  return (

    <div className="relative m-10  max-w-xs overflow-hidden rounded-lg bg-white shadow-md md:ml-[15.625rem] lg:ml-[34.375rem] lg:w-full sm:ml-[5.625rem] sm:w-[12.5rem]">
      <Link href="#">
        <Image
          className="h-60 rounded-t-lg object-cover"
          src={src}
          alt={alt}
          width={500}
          height={360}
          
        />
      </Link>
      <span className="absolute top-0 right-0 mt-4 mr-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">Sale</span>
      <div className="p-5">
     
        <Link href="#">
          <h5 className="text-xl font-semibold tracking-tight text-slate-900">{name}</h5>
        </Link>
        
          <Rating rating={rating}/>
         
        
        <div className="flex items-center justify-between">
          <p>
            <span className="md:text-2xl font-bold  text-gray-900 sm:text-[1rem]">${price ? price.toFixed(2) : '0.00'}</span>
            <span className="md:text-sm text-gray-500 line-through sm:text-[8px]">{price ? (price + 5).toFixed(2) : '5.00'}</span>
          </p>
        
          <AddToCartButton1 id={id} name={name} price={price} image={src}/>
        </div>
      </div>
      
    </div>
  );
};

export default ProductCard4;




