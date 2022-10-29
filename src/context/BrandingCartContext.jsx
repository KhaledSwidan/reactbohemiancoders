import React, { createContext, useContext, useEffect, useState } from 'react';
import BrandsCart from '../components/brands/BrandsCart';

export const BrandingCartContext = createContext({});

const initialBrandItems = localStorage.getItem("branding-cart") ? JSON.parse(localStorage.getItem("branding-cart")) : [];

export const BrandingCartProvider = ({ children }) =>
{
  const [isOpen, setIsOpen] = useState(false);

  const openBrandCart = () => setIsOpen(true);
  const closeBrandCart = () => setIsOpen(false);

  const [brandItems, setBrandItems] = useState(initialBrandItems);

  const getBrandItemsQuantity = id => brandItems.find(e => e.id === id)?.quantity || 0;
  const increaseBrandCartQuantity = id => setBrandItems(
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
  const decreaseBrandCartQuantity = id => setBrandItems(
    currItems =>
    {
      if (currItems.find(item => item.id === id) == null)
        return currItems.filter(item => item.id !== id);
      else return currItems.map(item =>
      {
        if (item.id === id) return { ...item, quantity: item.quantity - 1 };
        else return item;
      })
    }
  );
  const removeBrandFromCart = id => setBrandItems(currItems => currItems.filter(item => item.id !== id));

  const brandCartQuantity = brandItems.reduce((quantity, item) => item.quantity + quantity, 0);

  useEffect(() =>
  {
    localStorage.setItem("branding-cart", JSON.stringify(brandItems));
  }, [brandItems]);

  return (
    <BrandingCartContext.Provider
      value={{
        brandItems,
        getBrandItemsQuantity,
        increaseBrandCartQuantity,
        decreaseBrandCartQuantity,
        removeBrandFromCart,
        openBrandCart,
        closeBrandCart,
        brandCartQuantity
      }}>
      {children}
      <BrandsCart isOpen={isOpen} />
    </BrandingCartContext.Provider>
  );
};

export const UseBrandingCart = () => useContext(BrandingCartContext);

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "EGP",
  style: "currency",
});
export const FormatCurrency = (number) => {
  return CURRENCY_FORMATTER.format(number);
};