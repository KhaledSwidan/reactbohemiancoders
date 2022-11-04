import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import brands from '../../data/brands';
import { UseBrandingCart, FormatCurrency } from '../../context/BrandingCartContext';
import styles from "./brands.module.css"

const BrandItem = ({ id, quantity }) =>
{
  const { stackItem } = styles;

  const { removeBrandFromCart } = UseBrandingCart();

  const branditem = brands.find(i => i.id === id);
  if (branditem == null) return null;

  return (
    <Stack direction='horizontal' gap={2} className={`${stackItem} d-flex align-items-center justify-content-between`}>
      <img
        className="rounded"
        src={branditem.imgSrc}
        alt="cart-img"
        style={{ width: "125px", height: "75px", objectFit: "cover" }} />
      <div className='me-auto'>
        <div className='text-end'>
          {branditem.brandName} {" "}
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
                عدد القطع
                {quantity}
            </span>
          )} {" / "}
            {FormatCurrency(branditem.price)}
          </div>
        </div>
      </div>
        <div>{FormatCurrency(branditem.price * quantity)}</div>
      <Button variant='outline-danger' size="sm" onClick={() => removeBrandFromCart(id)}>
        &times;
      </Button>
    </Stack>
  );
};

export default BrandItem;