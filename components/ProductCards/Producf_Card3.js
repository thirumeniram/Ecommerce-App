
import Link from 'next/link';
import Image from 'next/image';
import AddToCartButton from '../Buttons/Cart_button'; 

const ProductCard3 = ({ id, src, alt, name, price = 0, rating }) => {
 
  
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
      <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
      <div className="mt-4 px-5 pb-5">
        <Link href="#">
          
            <h5 className="text-xl font-semibold tracking-tight text-slate-900 line-clamp-2">{name}</h5>
        
        </Link>
        <div className="mt-2.5 mb-5 flex items-center">
          <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{rating}</span>
       
        </div>
        <div className="flex items-center justify-between ">
          <p>
       

          <span className="md:text-2xl font-bold text-slate-900 sm:text-[1rem]">${price ? price.toFixed(2) : '0.00'}</span>
          <span className=" text-slate-900 line-through sm:text-[10px] md:text-sm" >{price ? (price + 5).toFixed(2) : '5.00'}</span>
 
          </p>
          <AddToCartButton id={id} name={name} price={price} image={src} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard3;



