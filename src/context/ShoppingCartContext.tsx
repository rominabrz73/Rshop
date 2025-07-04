import React, { Children, createContext, useContext, useState } from "react";

interface IShoppingCartContextProvider {
  children: React.ReactNode;
}
interface IcartItem {
  id: number;
  qty: number;
  
}
interface IShoppingCartContext {
  cartItems: IcartItem[];
  //if function return nothing use void
  handleIncreasePoductQty:(id:number)=> void;
  handleDecreaseProductQty:(id:number)=> void;
  getproductQTY: (id: number) => number;
  handleRemoveProduct:(id:number)=> void;
  cartQty:number;

}

export const ShoppingCartContext = createContext({} as IShoppingCartContext);
export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};
export const ShoppingCartContextProvider = ({
  children,
}: IShoppingCartContextProvider) => { 
  //basket
  const [cartItems, setcartItems] = useState<IcartItem[]>([]);
  const handleIncreasePoductQty = (id:number) =>{
  setcartItems((currentItems)=> {
      if (currentItems.find((item) => item.id == id) == null) {
        return [...currentItems, {id,qty:1}];
        
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };
  const getproductQTY = (id:number)=>{
    return cartItems.find(item =>item.id == id)?.qty || 0
  }
  const handleDecreaseProductQty = (id: number) => {
  setcartItems((currentItems) => {
    return currentItems
      .map((item) => {
        if (item.id === id && item.qty > 0) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      })
      .filter(item => item.qty > 0);
  });
};
const handleRemoveProduct =(id:number) =>{
  setcartItems((currentItems)=> {
 return cartItems.filter(item =>item.id != id) ;
})
}
const cartQty = cartItems.reduce((Totalqty,item)=> Totalqty + item.qty ,0)
  return (
    <ShoppingCartContext.Provider value={{ cartItems ,handleIncreasePoductQty,handleDecreaseProductQty,getproductQTY, handleRemoveProduct, cartQty}}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
