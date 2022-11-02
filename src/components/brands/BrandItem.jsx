import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import brands from '../../data/brands';
import { UseBrandingCart, FormatCurrency } from '../../context/BrandingCartContext';

const BrandItem = ({ id, quantity }) =>
{
  const { removeBrandFromCart } = UseBrandingCart();

  const branditem = brands.find(i => i.id === id);
  if (branditem == null) return null;

  console.log(branditem);

  return (
    <Stack direction='horizontal' gap={2} className="d-flex align-items-center">
      <img
        className="rounded"
        src={branditem.imgSrc}
        alt="cart-img"
        style={{ width: "125px", height: "75px", objectFit: "cover" }} />
      <div className='me-auto'>
        <div>
          {branditem.name} {" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
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

export default BrandItem