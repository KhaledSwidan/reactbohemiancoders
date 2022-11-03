import { createContext, useContext, useState, useEffect } from "react";
import LovesCart from "../components/brands/LovesCart";

export const LovingCartContext = createContext({});

const initialLoveItems = localStorage.getItem("loving-cart") ? JSON.parse(localStorage.getItem("loving-cart")) : [];

export const LovingCartProvider = ({ children }) =>
{
  const [loveItems, setLoveItems] = useState(initialLoveItems);

  const [isOpen, setIsOpen] = useState(false);

  const openLoveCart = () => setIsOpen(true);
  const closeLoveCart = () => setIsOpen(false);

  const getLoveQuantity = id => loveItems.find(e => e.id === id)?.quantity || 0;
  const increaseLove = id => setLoveItems(
    currItems =>
    {
      if (currItems.find(item => item.id === id) == null)
        return [...currItems, { id, quantity: 1 }];
      else return currItems.map(item =>
      {
        if (item.id === id) return { ...item, quantity: item.quantity + 1 };
        else return item;
      })
    }
  );

  const removeLove = id => setLoveItems(currItems => currItems.filter(item => item.id !== id));

  const loveCartQuantity = loveItems.reduce((quantity, item) => item.quantity + quantity, 0);

  useEffect(() => localStorage.setItem("loving-cart", JSON.stringify(loveItems)), [loveItems]);

  return (
    <LovingCartContext.Provider
      value={{
        loveItems,
        closeLoveCart,
        openLoveCart,
        loveCartQuantity,
        getLoveQuantity,
        increaseLove,
        removeLove}}>
      {children}
      <LovesCart isOpen={isOpen}/>
    </LovingCartContext.Provider>
  );
};

export const UseLovingCart = () => useContext(LovingCartContext);