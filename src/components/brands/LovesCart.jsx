import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import LoveItem from "./LoveItem";
import { UseLovingCart } from "../../context/LovingCartContext";

const LovesCart = ({ isOpen }) => {
  const { loveItems, closeLoveCart } = UseLovingCart();
  console.log(loveItems);

  return (
    <Offcanvas show={isOpen} onHide={closeLoveCart} placement="start">
      <Offcanvas.Header closeButton style={{ backgroundColor: "#19647c" }}>
        <Offcanvas.Title>قائمة المفضلة</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-0">
        <Stack>
          {loveItems.map((e) => (
            <LoveItem key={e.id} {...e} />
          ))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default LovesCart;
