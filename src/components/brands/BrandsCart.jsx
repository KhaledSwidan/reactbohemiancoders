import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import BrandItem from './BrandItem';
import brands from "../../data/brands";
import { UseBrandingCart, FormatCurrency } from '../../context/BrandingCartContext';

const ShoppingCart = ({ isOpen }) =>
{
  const { brandItems, closeBrandCart } = UseBrandingCart();
  console.log(brandItems);
  
  return (
    <Offcanvas show={isOpen} onHide={closeBrandCart} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>سلة المشتريات</Offcanvas.Title>
      </Offcanvas.Header>
      <hr className='mt-0'/>
      <Offcanvas.Body>
        <Stack gap={3}>
          {brandItems.map(e => <BrandItem key={e.id} {...e} />)}
          <div className="me-auto fw-bold fs-5">
            الاجمالى {" "}
            {FormatCurrency(brandItems.reduce((total, brandItem) =>
            {
              const item = brands.find(i => i.id === brandItem.id);
              return total + (item?.price || 0) * brandItem.quantity;
            }, 0))}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart