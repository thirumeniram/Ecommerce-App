import Navbar1 from "@/components/Navbar1";
import Navbar2 from "@/components/Navbar2";

import { getProducts } from "@/utils/api";
import Carousel from "@/components/Carousel";
import ProductList from "@/components/View_all";


export default async function Home() {



  const products = await getProducts(20);

  console.log(products);
  
  return (
   <div>
    {/* <Navbar1/> */}
    <Navbar2/>
     
    {/* <Carousel products={products}/> */}
     <ProductList products={products}/>
   </div>
  );
}
