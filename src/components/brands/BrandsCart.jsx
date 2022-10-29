import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { UseShoppingCart, FormatCurrency } from '../../context/ShoppingCartContext';
import BrandItem from './BrandItem';
import brands from "../../data/brands.json";

const ShoppingCart = ({ isOpen }) =>
{
  const { cartItems, closeCart } = UseShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>سلة المشتريات</Offcanvas.Title>
      </Offcanvas.Header>
      <hr className='mt-0'/>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(e => <BrandItem key={e.id} {...e} />)}
          <div className="me-auto fw-bold fs-5">
            الاجمالى {" "}
            {FormatCurrency(cartItems.reduce((total, cartItem) =>
            {
              const item = brands.find(i => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0))}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart