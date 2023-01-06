import React from "react";
import { Button, Stack } from "react-bootstrap";
import sections from "../../data/sections.js";
import {
  UseShoppingCart,
  FormatCurrency,
} from "../../context/ShoppingCartContext";
import styles from "./sections.module.css";

const CartItem = ({ id, quantity }) => {
  const { stackItem } = styles;

  const { removeItemFromCart } = UseShoppingCart();

  const item = sections.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className={`${stackItem} d-flex align-items-center justify-content-between`}>
      <img
        className="rounded"
        src={item.imgSrc}
        alt="cart-img"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="d-flex flex-column align-items-end justify-content-center">
        <div className="d-flex flex-column align-items-end justify-content-center">
          <div className="text-end">
            {item.title}{" "}
            <div className="text-muted" style={{ fontSize: ".75rem" }}>
              {quantity > 1 && (
                <span className="text-muted" style={{ fontSize: ".65rem" }}>
                  عدد القطع
                  {quantity}
                </span>
              )}{" "}
              {" / "}
              {FormatCurrency(item.price)}
            </div>
          </div>
          <div>{FormatCurrency(item.price * quantity)}</div>
        </div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeItemFromCart(id)}>
          &times;
        </Button>
      </div>
    </Stack>
  );
};

export default CartItem;
