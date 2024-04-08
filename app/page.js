
import { getProducts } from "@/utils/api";
import Catalog from "@/components/Catalog/Catalog";
// import Navbar from "@/components/Navbar/Navbar1";
// import Navbar from "@/components/Navbar/Nav";
import Nav from "@/components/Navbar/Nav";


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
