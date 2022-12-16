import React from "react";
import { Button, Stack } from "react-bootstrap";
import brands from "../../data/brands";
import { UseLovingCart, FormatCurrency } from "../../context/LovingCartContext";
import styles from "./brands.module.css";

const LoveItem = ({ id }) => {
  const { stackItem } = styles;

  const { removeLove } = UseLovingCart();

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
      <div className="me-auto text-end">
        {brandItem.brandName}{" "}
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {FormatCurrency(brandItem.price)}
        </div>
      </div>
      <Button variant="outline-danger" size="sm" onClick={() => removeLove(id)}>
        &times;
      </Button>
    </Stack>
  );
};

export default LoveItem;
