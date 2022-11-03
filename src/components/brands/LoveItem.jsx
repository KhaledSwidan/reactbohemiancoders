import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import brands from '../../data/brands';
import { UseLovingCart } from '../../context/LovingCartContext';

const LoveItem = ({ id }) =>
{
  const { removeLove } = UseLovingCart();

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
      <Button variant='outline-danger' size="sm" onClick={() => removeLove(id)}>
        &times;
      </Button>
    </Stack>
  );
};

export default LoveItem