import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { UseShoppingCart, FormatCurrency } from '../../context/ShoppingCartContext';
import CartItem from './CartItem';
import sections from "../../data/sections.js";

const ShoppingCart = ({ isOpen }) =>
{
  const { cartItems, closeCart } = UseShoppingCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="start">
      <Offcanvas.Header closeButton style={{backgroundColor:"#19647c"}}>
        <Offcanvas.Title>سلة المشتريات</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-0">
        <Stack>
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