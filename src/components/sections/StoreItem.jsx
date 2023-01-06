import React from "react";
import { Alert, Button, Card } from "react-bootstrap";
import {
  UseShoppingCart,
  FormatCurrency,
} from "../../context/ShoppingCartContext";
import styles from "./sections.module.css";

const StoreItem = ({ id, price, title, imgSrc, payAttention, content }) => {
  const { ask, btnImg, askCont } = styles;

  const {
    getItemsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFromCart,
  } = UseShoppingCart();
  const quantity = getItemsQuantity(id);

  return (
    <Card className="h-100">
      <Button
        type="button"
        variant="light"
        className={`${btnImg} btn w-100 p-0`}
        data-bs-toggle="modal"
        data-bs-target={`#${btnImg}${id}`}>
        <Card.Img
          src={imgSrc}
          variant="top"
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div
          className="modal fade"
          id={`${btnImg}${id}`}
          tabIndex="-1"
          aria-labelledby={`${btnImg}${id}Label`}
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body p-0">
                <Card.Img
                  src={imgSrc}
                  variant="top"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Button>
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <Card.Title className="d-flex flex-column align-items-end">
          <span className="h3 text-end">{title}</span>
          <span className="text-muted">{FormatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button onClick={() => increaseCartQuantity(id)} className="w-100">
              اضافة الى السلة
              <i className="fa-solid fa-cart-plus ms-2"></i>
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ gap: ".5rem" }}>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                <span>عدد القطع: {quantity}</span>
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
              </div>
              <Button
                onClick={() => removeItemFromCart(id)}
                variant="danger"
                size="sm">
                ازالة من السلة
              </Button>
            </div>
          )}
          <Button
            type="button"
            className="btn btn-info mt-2 w-100"
            data-bs-toggle="modal"
            data-bs-target={`#${id}`}>
            اسأل الصيدلي
            <i className="fa-solid fa-circle-info ms-2"></i>
          </Button>
          <div
            className="modal fade"
            id={`${id}`}
            tabIndex="-1"
            aria-labelledby={`${id}Label`}
            aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div
                  className="modal-header"
                  style={{ backgroundColor: "rgb(25 100 124)" }}
                  dir="ltr">
                  <h5 className="modal-title" id={`${id}Label`}>
                    {title}
                  </h5>
                </div>
                <div
                  className="modal-body"
                  style={{ backgroundColor: "rgb(25 100 124 / 50%)" }}>
                  <Alert variant="danger">{payAttention}</Alert>
                  <div className={ask}>
                    <div className={`${askCont}`}>
                      <h5>اسم الدواء: </h5>
                      <span className="ms-2">{content.name}</span>
                    </div>
                    <div className={`${askCont}`}>
                      <h5>المادة الفعالة:</h5>
                      <span className="ms-2">{content.formation}</span>
                    </div>
                    <div className={`${askCont}`}>
                      <h5> الشكل الصيدلي: </h5>
                      <span className="ms-2">{content.pharmacistForm}</span>
                    </div>
                    <div className={`${askCont}`}>
                      <h5> الجرعة:</h5>
                      <span className="ms-2">{content.doses}</span>
                    </div>
                    <div className={`${askCont}`}>
                      <h5>الحفظ والتخزين:</h5>
                      <span className="ms-2">
                        {content.storage_preservation}
                      </span>
                    </div>
                    <div className={`${askCont}`}>
                      <h5>نسيان الجرعة: </h5>
                      <span className="ms-2">{content.forgettingAdose}</span>
                    </div>
                    <div className={`${askCont}`}>
                      <h5> الجرعة الزائدة: </h5>
                      <span className="ms-2">{content.overdose}</span>
                    </div>
                  </div>
                  <hr />
                  <h5>معلومات عن الدواء:</h5>
                  <p className="">{content.aboutItem}</p>
                </div>
                <div
                  className="modal-footer flex-row-reverse justify-content-between"
                  style={{ backgroundColor: "rgb(25 100 124)" }}>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal">
                    اغلاق
                  </button>
                  <button type="button" className="btn btn-primary">
                    تحدث لصيدلي
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
