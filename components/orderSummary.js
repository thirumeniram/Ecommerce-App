
import React from 'react';



const OrderSummary = ({subtotal, shipping, totalQuantity,total }) => {
  
  const formatNumber = (value) => {
  
    if (typeof value === 'number') {
      return value.toFixed(2);
    }

    return value;
  };

  return (
    <div className="bg-gray-100 p-8">
      <h3 className="text-2xl font-bold text-[#333]">Order summary</h3>
      <ul className="text-[#333] mt-6 divide-y">
        <li className="flex flex-wrap gap-4 text-md py-3">TotalQuantity <span className="ml-auto font-bold">{totalQuantity} items</span></li>
        <li className="flex flex-wrap gap-4 text-md py-3">subtotal<span className="ml-auto font-bold">${formatNumber(subtotal)}</span></li>
        <li className="flex flex-wrap gap-4 text-md py-3">Tax <span className="ml-auto font-bold">${formatNumber(shipping)}</span></li>
        <li className="flex flex-wrap gap-4 text-md py-3 font-bold">Total <span className="ml-auto">${formatNumber(total)}</span></li>
      </ul>
      <Link href="../Checkout">
      <button type="button" className="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded">Check out</button>
      </Link>
    </div>
  );
};

export default OrderSummary;
