import { createContext, useContext, useState, useEffect } from "react";
import LovesCart from "../components/brands/LovesCart";

export const LovingCartContext = createContext({});

const initialLoveItems = localStorage.getItem("loving-cart") ? JSON.parse(localStorage.getItem("loving-cart")) : [];

export const LovingCartProvider = ({ children }) =>
{
  const [loveItems, setLoveItems] = useState(initialLoveItems);

  const [isOpen, setIsOpen] = useState(false);
  const [isLove, setIsLove] = useState(false);

  const openLoveCart = () => setIsOpen(true);
  const closeLoveCart = () => setIsOpen(false);

  const getLoveQuantity = id => loveItems.find(e => e.id === id)?.quantity || 0;

  const handleLove = () => setIsLove(!isLove);

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
        removeLove,
        handleLove}}>
      {children}
      <LovesCart isOpen={isOpen}/>
    </LovingCartContext.Provider>
  );
};

export const UseLovingCart = () => useContext(LovingCartContext);

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "EGP",
  style: "currency",
});
export const FormatCurrency = (number) => {
  return CURRENCY_FORMATTER.format(number);
};