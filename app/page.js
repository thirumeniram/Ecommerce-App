
import { getProducts } from "@/utils/api";
import Catalog from "@/components/Catalog/Catalog";

import Nav from "@/components/Navbar/Nav";


export default async function Home() {



  const products = await getProducts(20);


  
  return (
   <div>
 
    <Nav/>
    <Catalog products={products}/>
   </div>
  );
}
