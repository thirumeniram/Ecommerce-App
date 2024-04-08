import React from 'react';
import ProductCard1 from '../ProductCards/Product_card1';

 import ProductCard2 from '../ProductCards/Product _Card2.js'
 import ProductCard from '../ProductCards/Product_card';



const ProductList = ({ products }) => {
  return (
    
          <div>
          <ProductCard products={products}/>
          </div>
        
  );
};

export default ProductList;
