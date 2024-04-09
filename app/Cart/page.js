"use client"
import React from 'react';
import { useSelector } from 'react-redux'; 
import CartNavbar from "@/components/Navbar/Cart_Navbar";
import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/orderSummary";

const Home = () => {
  
  const items = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  console.log("cart items",items)


  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  const shipping = 4.00;

  const total = subtotal + shipping ;

  return (
    <div>
      <CartNavbar />
      <div className="font-[sans-serif] bg-white">
        <div className="lg:max-w-7xl max-w-xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start mt-8">
            <div className="divide-y lg:col-span-2">
            
              {items.length > 0 ? (
                items.map((item,index) => (
                  <CartItem 
                  key={item.id} 
                  image={item.image}
                  id={item.id}
                  name={item.title} 
                  price={item.price}
                  quantity={item.quantity}
                />
                ))
              ) : (
                <p className="flex justify-center text-2xl ml-0 lg:ml-[19.5rem]">No items in the cart</p>

              )}
            </div>
            {items.length > 0 &&
            <OrderSummary
              totalQuantity={totalQuantity}
              subtotal={subtotal}
              shipping={shipping}
           
              total={total}
            
            />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

  