"use client"
import React, { useState} from 'react';

import { useDispatch,useSelector } from 'react-redux';
import ProductList from './View_all';

import Carousel from './Carousel';



const Catalog = ({products}) => {

  const CatalogVariant = useSelector((state) => state.display.catalogView);
  

   const CatalogComponent = CatalogVariant === 'viewAll' ? ProductList: Carousel;
 
 
  return (
    <div>
    
      <CatalogComponent products={products} />
    </div>
  );
};

export default Catalog;
