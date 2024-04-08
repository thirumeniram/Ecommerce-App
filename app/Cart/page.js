"use client"
import React from 'react';
import { useSelector } from 'react-redux'; // Importing useSelector hook
import CartNavbar from "@/components/Navbar/Cart_Navbar";
import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/orderSummary";

const Home = () => {
  // Using useSelector to get the cart items from the Redux store
  const items = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  console.log("cart items",items)

  // Calculate subtotal
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  // Assuming shipping and tax are fixed values
  const shipping = 4.00;
  
  // Calculate total
  const total = subtotal + shipping ;

  return (
    <div>
      <CartNavbar />
      <div className="font-[sans-serif] bg-white">
        <div className="lg:max-w-7xl max-w-xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start mt-8">
            <div className="divide-y lg:col-span-2">
              {/* Conditionally render items if there are items in the cart */}
              {items.length > 0 ? (
                items.map(item => (
                  <CartItem key={item.id} item={item} />
                ))
              ) : (
                <p>No items in the cart</p>
              )}
            </div>
            {/* Pass totalQuantity, totalPrice, shipping, tax, and total to OrderSummary component */}
            <OrderSummary
              totalQuantity={totalQuantity}
              subtotal={subtotal}
              shipping={shipping}
           
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

  