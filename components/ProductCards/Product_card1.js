import Link from 'next/link';
import Image from 'next/image';

import AddToCartButton1 from '../Buttons/card_button2';
import Rating from '../Buttons/ratings';

const ProductCard1= ({ id, src, alt, name, price, rating }) => {

 
  
  return (
    <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
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
     
      <div className="h-[3rem]" >
            <h5 className="text-xl font-semibold tracking-tight text-slate-900 line-clamp-2">
              {name}
            </h5>
          </div>
        
          <Rating rating={rating}/>
         
        
        <div className="flex items-center justify-between">
          <p>
            <span className="text-2xl font-bold  text-gray-900">${price ? price.toFixed(2) : '0.00'}</span>
            <span className="text-sm text-gray-500 line-through">${price ? (price + 5).toFixed(2) : '5.00'}</span>
          </p>
         
          <AddToCartButton1 id={id} name={name} price={price} image={src}/>
        </div>
      </div>
      
    </div>
  );
};

export default ProductCard1;




