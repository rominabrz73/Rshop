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
  handleDecreasePoductQty:(id:number)=> void;
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
  const handleDecreasePoductQty = (id:number) =>{
    setcartItems((currentItems)=> {
        if (currentItems.find((item) => item.id == id) == null) {
          return [...currentItems, {id,qty:0}];
          
        } else {
          return currentItems.map((item) => {
            if (item.id == id && item.qty > 0) {
              return {
                ...item,
                qty: item.qty - 1,
              };
            } else {
              return item;
            }
          });
        }
      });
    };
  return (
    <ShoppingCartContext.Provider value={{ cartItems ,handleIncreasePoductQty,handleDecreasePoductQty}}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
