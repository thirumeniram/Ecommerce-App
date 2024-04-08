import React from 'react';
import ProductList from './View_all';
import ProductList2 from './view_all.2';
import Carousel from './Carousel';

const DynamicProductDisplay = ({ viewType, products }) => {
 
  switch (viewType) {
    case 'list':
      return <ProductList products={products} />;
    case 'carousel':
      return <Carousel products={products} />;
    case 'list1':
        return <ProductList2 products={products} />;
    case 'carousel1':
        return <Carousel products={products} />;
    default:
      return <p>Invalid view type selected.</p>;
  }
};

export default DynamicProductDisplay;