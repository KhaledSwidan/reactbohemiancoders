import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import BrandItem from './BrandItem';
import brands from "../../data/brands";
import { UseBrandingCart, FormatCurrency } from '../../context/BrandingCartContext';

const ShoppingCart = ({ isOpen }) =>
{
  const { brandItems, closeBrandCart } = UseBrandingCart();
  
  return (
    <Offcanvas show={isOpen} onHide={closeBrandCart} placement="start">
      <Offcanvas.Header closeButton style={{backgroundColor:"#19647c"}}>
        <Offcanvas.Title>سلة المشتريات</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-0">
        <Stack>
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