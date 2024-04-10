"use client"
import CheckoutNavbar from "@/components/Navbar/Checkout_Navbar";
import CompleteOrderForm from "@/components/CompleteOrderForm";
import CartSummary from "@/components/CartSummary";
import {useSelector} from 'react-redux';


function Checkout() {

    const items = useSelector(state => state.cart.items);
  return (
    <div>
  <CheckoutNavbar/>
  {items.length > 0 ? (
    <div className="font-[sans-serif] bg-gray-50">
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 h-full">
        <CartSummary />
        <CompleteOrderForm />
      </div>
    </div>
  ) : (
    <div className="mt-10">
      <p className="flex justify-center text-2xl bg-white md:ml-[-3.5rem]">No items in the cart</p>
    </div>
  )}
</div>

   
  )
}

export default Checkout;