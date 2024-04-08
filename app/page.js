
import Nav from "@/components/Navbar/Nav";
import { getProducts } from "@/utils/api";
import Catalog from "@/components/Catalog/Catalog";



export default async function Home() {



  const products = await getProducts(20);

  // console.log(products);
  
  return (
   <div>
 
    <Nav/>
    <Catalog products={products}/>
   </div>
  );
}
