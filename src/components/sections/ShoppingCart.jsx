import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { UseShoppingCart, FormatCurrency } from '../../context/ShoppingCartContext';
import CartItem from './CartItem';
import sections from "../../data/sections.json";

const ShoppingCart = ({ isOpen }) =>
{
  const { cartItems, closeCart } = UseShoppingCart();
  console.log(cartItems);
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>سلة المشتريات</Offcanvas.Title>
      </Offcanvas.Header>
      <hr className='mt-0'/>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(e => <CartItem key={e.id} {...e} />)}
          <div className="me-auto fw-bold fs-5">
            الاجمالى {" "}
            {FormatCurrency(cartItems.reduce((total, cartItem) =>
            {
              const item = sections.find(i => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0))}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart