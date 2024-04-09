"use client"
import React, { useState } from 'react';
import {useSelector} from 'react-redux'
import ProductCard3 from '../ProductCards/Producf_Card3';
import ProductCard4 from '../ProductCards/Product_Card4';

const Carousel = ({ products }) => {
    const productCardVariant = useSelector((state) => state.display.productCardVariant);

  const CardComponent = productCardVariant === 'ProductCard2' ? ProductCard3 : ProductCard4;
  
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNextClick = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

   
    const handlePrevClick = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    return (
        <div id="controls-carousel" className="relative w-full">
            <div className="relative overflow-hidden rounded-lg">
                {products.map((product, index) => (
                    <div key={index} className={`duration-700 ease-in-out ${index === activeIndex ? 'block' : 'hidden'}`} data-carousel-item>
                        <CardComponent
                            src={product.image}
                            alt={product.title}
                            name={product.title}
                            price={product.price}
                            rating={product.rating.rate}
                        />
                    </div>
                ))}
            </div>
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none  "
                onClick={handlePrevClick}
                data-carousel-prev
            >
                <span className="inline-flex items-center justify-center sm:w-10 sm:h-10 h-5 w-5 rounded-full  bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none  md:ml-40">
                    <svg
                        className="sm:w-4 sm:h-4 w-2.5 h-2.5 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1L1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none sm:mr-[-1rem]"
                onClick={handleNextClick}
                data-carousel-next
            >
                <span className="inline-flex items-center justify-center sm:w-10 sm:h-10 h-5 w-5  rounded-full  bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none md:mr-60" >
                    <svg
                        className="sm:w-4 sm:h-4 w-2.5 h-2.5  text-white dark:text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Carousel;
