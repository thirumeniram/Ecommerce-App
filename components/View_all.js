import React from 'react';
import ProductCard from './Product _Card'; // Adjust the import path as necessary

const ProductList = ({ products }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
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

export default ProductList;
