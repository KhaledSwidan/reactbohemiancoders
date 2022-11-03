import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import LoveItem from "./LoveItem"
import { UseLovingCart } from '../../context/LovingCartContext';

const LovesCart = ({ isOpen }) =>
{
  const { loveItems, closeLoveCart } = UseLovingCart();
  console.log(loveItems);

  return (
    <Offcanvas show={isOpen} onHide={closeLoveCart} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>سلة المشتريات</Offcanvas.Title>
      </Offcanvas.Header>
      <hr className='mt-0'/>
      <Offcanvas.Body>
        <Stack gap={3}>
          {loveItems.map(e => <LoveItem key={e.id} {...e} />)}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default LovesCart