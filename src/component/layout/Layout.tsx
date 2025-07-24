
import React from "react";
import Navbar from "../navbar/Navbar";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
interface ILayout{
    children:React.ReactNode;
}
function Layout({children}:ILayout) {

  return (
    <>
    <Navbar />
    <div >
 {
    children
   }
    </div>
  
   </>
  )
}

export default Layout