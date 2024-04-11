"use client"

import React from 'react';
import ProductCard1 from './Product_card1';

import ProductCard2 from './Product _Card2';
import { useSelector } from 'react-redux';

const ProductCard = ({ products }) => {
  const productCardVariant = useSelector((state) => state.display.productCardVariant);

  const CardComponent = productCardVariant === 'ProductCard1' ? ProductCard1 : ProductCard2;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <CardComponent
            key={index}
            id={product.id}
            src={product.image}
            alt={product.title}
            name={product.title}
            price={product.price}
            rating={product.rating.rate}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
