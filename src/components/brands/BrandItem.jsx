import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import brands from '../../data/brands.json';
import { UseShoppingCart, FormatCurrency } from '../../context/ShoppingCartContext';

const CartItem = ({ id, quantity }) =>
{
  const { removeItemFromCart } = UseShoppingCart();

  const item = brands.find(i => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction='horizontal' gap={2} className="d-flex align-items-center">
      <img
        className="rounded"
        src={item.imgSrc}
        alt="cart-img"
        style={{ width: "125px", height: "75px", objectFit: "cover" }} />
      <div className='me-auto'>
        <div>
          {item.name} {" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {FormatCurrency(item.price)}
          </div>
        </div>
      </div>
        <div>{FormatCurrency(item.price * quantity)}</div>
      <Button variant='outline-danger' size="sm" onClick={() => removeItemFromCart(id)}>
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem