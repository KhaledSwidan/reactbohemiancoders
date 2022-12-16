import React from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./brands.module.css";
import {
  UseBrandingCart,
  FormatCurrency,
} from "../../context/BrandingCartContext";

const StoreItem = ({
  id,
  char,
  price,
  brand,
  brandName,
  brandDetails,
  updateTime,
  imgSrc,
}) => {
  const { ask, btnImg, askCont } = styles;

  const {
    getBrandItemsQuantity,
    increaseBrandCartQuantity,
    decreaseBrandCartQuantity,
    removeBrandFromCart,
  } = UseBrandingCart();
  const quantity = getBrandItemsQuantity(id);

  return (
    <Card className="h-100">
      <Button
        type="button"
        variant="light"
        className={`${btnImg} btn w-100 p-0`}
        data-bs-toggle="modal"
        data-bs-target={`#${id}`}
      >
        <Card.Img
          src={imgSrc}
          variant="top"
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div
          className="modal fade"
          id={`${id}`}
          tabIndex="-1"
          aria-labelledby={`${id}Label`}
          aria-hidden="true"
        >
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
        <Card.Title className="d-flex flex-row-reverse justify-content-between align-items-end">
          <div className="d-flex flex-column justify-content-center align-items-end">
            <span className="h3 text-end">{brandName}</span>
            {brand && <span className="h6 mb-0 mt-2">{brand}</span>}
            <span className="text-muted mb-2">{FormatCurrency(price)}</span>
            <span dir="ltr">
              Customer reviews:{" "}
              <i className="fa-solid fa-star" style={{ color: "orange" }}></i>
            </span>
          </div>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              onClick={() => increaseBrandCartQuantity(id)}
              className="w-100"
            >
              اضافة الى السلة
              <i className="fa-solid fa-cart-plus ms-2"></i>
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => increaseBrandCartQuantity(id)}>+</Button>
                <span>عدد القطع: {quantity}</span>
                <Button onClick={() => decreaseBrandCartQuantity(id)}>-</Button>
              </div>
              <Button
                onClick={() => removeBrandFromCart(id)}
                variant="danger"
                size="sm"
              >
                ازالة من السلة
              </Button>
            </div>
          )}
          <Button
            type="button"
            variant="info"
            className="btn mt-2 w-100"
            data-bs-toggle="modal"
            data-bs-target={`#${brand}${id}`}
          >
            اسأل الصيدلي
            <i className="fa-solid fa-circle-info ms-2"></i>
          </Button>
          <div
            className="modal fade"
            id={`${brand}${id}`}
            tabIndex="-1"
            aria-labelledby={`${brand}${id}Label`}
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div
                  className="modal-header"
                  style={{ backgroundColor: "rgb(25 100 124)" }}
                  dir="ltr"
                >
                  <h5 className="modal-title" id={`${brand}${id}Label`}>
                    {brand}
                  </h5>
                </div>
                <div
                  className="modal-body"
                  style={{ backgroundColor: "rgb(25 100 124 / 50%)" }}
                >
                  <div className={ask} dir="ltr">
                    <div className={`${askCont}`}>
                      <h5>Brand: </h5>
                      <span>{brandDetails.brand}</span>
                    </div>
                    <div className={`${askCont}`}>
                      <h5>Item Form: </h5>
                      <span>{brandDetails.itemForm}</span>
                    </div>
                    <div className={`${askCont}`}>
                      <h5>Category Type: </h5>
                      <span>{brandDetails.categoryType}</span>
                    </div>
                    <div className={`${askCont}`}>
                      <h5>Recommended Use: </h5>
                      <span>{brandDetails.recommendedUse}</span>
                    </div>
                    <div className={`${askCont}`}>
                      <h5>Number of Items: </h5>
                      <span>{brandDetails.numberOfItems}</span>
                    </div>
                    <div className={`${askCont}`}>
                      <h5>Suitable Skin Type: </h5>
                      <span>{brandDetails.skinType}</span>
                    </div>
                    <div className={`${askCont}`}>
                      <h5>Item Volume: </h5>
                      <span>{brandDetails.itemVolume}</span>
                    </div>
                    <div className={`${askCont}`}>
                      <h5>Item Weight: </h5>
                      <span>{brandDetails.itemWeight}</span>
                    </div>
                    <div className={`${askCont}`}>
                      <h5>Item Dimensions LxWxH: </h5>
                      <span>{brandDetails.itemDimensions}</span>
                    </div>
                  </div>
                  <hr />
                  <h5>About this item</h5>
                  <p className="text-end">{brandDetails.aboutItem}</p>
                </div>
                <div
                  className="modal-footer flex-row-reverse justify-content-between"
                  style={{ backgroundColor: "rgb(25 100 124)" }}
                >
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
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
