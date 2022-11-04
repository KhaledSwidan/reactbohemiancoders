import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import brands from '../../data/brands';
import { UseLovingCart, FormatCurrency } from '../../context/LovingCartContext';
import styles from "./brands.module.css"

const LoveItem = ({ id }) =>
{
  const { stackItem } = styles;

  const { removeLove } = UseLovingCart();

  const branditem = brands.find(i => i.id === id);
  if (branditem == null) return null;

  return (
    <Stack direction='horizontal' gap={2} className={`${stackItem} d-flex align-items-center justify-content-between`}>
      <img
        className="rounded"
        src={branditem.imgSrc}
        alt="cart-img"
        style={{ width: "125px", height: "75px", objectFit: "cover" }} />
      <div className='me-auto text-end'>
        {branditem.brandName} {" "}
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {FormatCurrency(branditem.price)}
        </div>
      </div>
      <Button variant='outline-danger' size="sm" onClick={() => removeLove(id)}>
        &times;
      </Button>
    </Stack>
  );
};

export default LoveItem