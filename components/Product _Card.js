// import Link from 'next/link';
// import Image from 'next/image';

// const ProductCard = () => {
//   return (
//     <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
//       <Link href="#">
//         <Image
//           className="h-60 rounded-t-lg object-cover"
//           src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
//           alt="product image"
//           width={500}
//           height={360}
//           style={{ objectFit: 'cover' }}
//         />
//       </Link>
//       <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
//       <div className="mt-4 px-5 pb-5">
//         <Link href="#">
//           <h5 className="text-xl font-semibold tracking-tight text-slate-900">Nike Air MX Super 5000</h5>
//         </Link>
//         <div className="mt-2.5 mb-5 flex items-center">
//           <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
//           {/* Star icons here */}
//         </div>
//         <div className="flex items-center justify-between">
//           <p>
//             <span className="text-3xl font-bold text-slate-900">$249</span>
//             <span className="text-sm text-slate-900 line-through">$299</span>
//           </p>
//           <Link href="#" passHref>
//             <button className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
//               {/* Shopping cart icon */}
//               Add to cart
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ src, alt, name, price, rating }) => {
  return (
    <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
      <Link href="#">
        <Image
          className="h-60 rounded-t-lg object-cover"
          src={src}
          alt={alt}
          width={500}
          height={360}
          style={{ objectFit: 'cover' }}
        />
      </Link>
      <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
      <div className="mt-4 px-5 pb-5">
        <Link href="#">
          <h5 className="text-xl font-semibold tracking-tight text-slate-900">{name}</h5>
        </Link>
        <div className="mt-2.5 mb-5 flex items-center">
          <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{rating}</span>
          {/* Star icons here */}
        </div>
        <div className="flex items-center justify-between">
      
          <p>
            <span className="text-2xl font-bold text-slate-900">${(price).toFixed(2)}</span>
            <span className="text-sm text-slate-900 line-through">{((price + 5)).toFixed(2)}</span>
          </p>
          
          
          
          
          <Link href="#" passHref>
            <button className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
              Add to cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
