"use client"
import React from 'react';
import {useSelector} from 'react-redux'
function CartSummary() {

    
  const items = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  const formatNumber = (value) => {
  
    if (typeof value === 'number') {
      return value.toFixed(2);
    }

    return value;
  };

  return (
    <div className="bg-[#ffffff] lg:h-screen lg:sticky lg:top-0">
      <div className="relative h-full">
        <div className="p-8 lg:overflow-auto lg:h-[calc(100vh-60px)]">
          <h2 className="text-2xl font-bold text-dark">Order Summary</h2>
          <div className="space-y-6 mt-10">
            {items.map((item) => (
              <div key={item.id} className="grid sm:grid-cols-2 items-start gap-6">
                <div className="px-4 py-6 shrink-0 border-4 border-[#dcd8d8] rounded-md">
                  <img src={item.image} alt={item.title} className="w-full object-contain" />
                </div>
                <div>
                  <h3 className="text-base text-dark">{item.title}</h3>
                  <ul className="text-xs text-dark space-y-3 mt-4">
                
                    <li>Quantity <span className="float-right">{item.quantity}</span></li>
                    <li>Total Price <span className="float-right">${item.price}</span></li>
                  </ul>
                </div>
              </div>
            ))}
            <div className=" left-0 bottom-0 bg-[#dcd8d8] w-full p-4">
            <h4 className="flex flex-wrap gap-4 text-base text-dark">Total <span className="ml-auto">${formatNumber(totalPrice+4)}</span></h4>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
