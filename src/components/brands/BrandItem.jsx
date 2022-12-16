import React from "react";
import { Button, Stack } from "react-bootstrap";
import brands from "../../data/brands";
import {
  UseBrandingCart,
  FormatCurrency,
} from "../../context/BrandingCartContext";
import styles from "./brands.module.css";

const BrandItem = ({ id, quantity }) => {
  const { stackItem } = styles;

  const { removeBrandFromCart } = UseBrandingCart();

  const brandItem = brands.find((i) => i.id === id);
  if (brandItem == null) return null;

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className={`${stackItem} d-flex align-items-center justify-content-between`}
    >
      <img
        className="rounded"
        src={brandItem.imgSrc}
        alt="cart-img"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div className="text-end">
          {brandItem.brandName}{" "}
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                عدد القطع
                {quantity}
              </span>
            )}{" "}
            {" / "}
            {FormatCurrency(brandItem.price)}
          </div>
        </div>
      </div>
      <div>{FormatCurrency(brandItem.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeBrandFromCart(id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default BrandItem;
