"use client"
import React, { useState} from 'react';
import DynamicProductDisplay from './ProductDisplay';
import { useDispatch,useSelector } from 'react-redux';



const Catalog = ({products}) => {
  const [viewType, setViewType] = useState('list'); 
  const navBarVariant = useSelector((state) => state.display.navBarVariant);
  const CatalogVariant = useSelector((state) => state.display.catalogView);


  // const CardComponent = CatalogVariant === 'list' ? ProductCard1 : ProductCard2;
  
 
  return (
    <div>
    
      <DynamicProductDisplay viewType={viewType} products={products} />
    </div>
  );
};

export default Catalog;
