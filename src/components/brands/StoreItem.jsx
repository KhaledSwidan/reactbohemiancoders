import React from 'react'
import { Button, Card } from 'react-bootstrap';
import styles from "./brands.module.css"
import { UseBrandingCart, FormatCurrency } from '../../context/BrandingCartContext';

const StoreItem = ({ id, char, price, brandName, brandDetails, updateTime, imgSrc }) =>
{
  const { ask } = styles;

  const { getBrandItemsQuantity, increaseBrandCartQuantity, decreaseBrandCartQuantity, removeBrandFromCart } = UseBrandingCart();
  const quantity = getBrandItemsQuantity(id);

  
  return (
    <Card className="h-100">
      <Card.Img
        src={imgSrc}
        variant="top"
        style={{ height: "200px", objectFit: "contain" }} />
      <Card.Body>
        <Card.Title className="d-flex flex-column justify-content-center align-items-end">
          <span className='fs-2'>{brandName}</span>
          <span className='text-muted'>{FormatCurrency(price)}</span>
          <span dir='ltr'>Customer reviews: <i className="fa-solid fa-star" style={{color:"orange"}} ></i></span>
        </Card.Title>
        <div className="mt-auto">
          {
            quantity === 0 ?
              (<Button onClick={() => increaseBrandCartQuantity(id)} className="w-100">
                اضافة الى السلة
              </Button>) :
              (<div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                <div className='d-flex justify-content-center align-items-center' style={{ gap: ".5rem" }}>
                  <Button onClick={() => increaseBrandCartQuantity(id)}>+</Button>
                  <span>عدد القطع: {quantity}</span>
                  <Button onClick={() => decreaseBrandCartQuantity(id)}>-</Button>
                </div>
                <Button onClick={() => removeBrandFromCart(id)} variant='danger' size="sm">
                  ازالة من السلة
                </Button>
              </div>)
          }
          <Button type="button" variant="success" className="btn mt-2 w-100">اضافة الى المفضلة</Button>
          <Button type="button" variant="info" className="btn mt-2 w-100" data-bs-toggle="modal"
            data-bs-target={`#${brandName}${id}`}>
            اسأل الصيدلي
          </Button>
          <div className="modal fade" id={`${brandName}${id}`} tabIndex="-1" aria-labelledby={`${brandName}${id}Label`}
            aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header justify-content-end">
                  <h5 className="modal-title" id={`${brandName}${id}Label`}>{brandName}</h5>
                </div>
                <div className="modal-body">
                  <div className={ask}>
                    <div><h5>Brand: </h5><span>{brandDetails.brand}</span></div>
                    <div><h5>Item Form: </h5><span>{brandDetails.itemForm}</span></div>
                    <div><h5>Category Type: </h5><span>{brandDetails.categoryType}</span></div>
                    <div><h5>Recommended Use: </h5><span>{brandDetails.recommendedUse}</span></div>
                    <div><h5>Number of Items: </h5><span>{brandDetails.numberOfItems}</span></div>
                    <div><h5>Suitable Skin Type: </h5><span>{brandDetails.skinType}</span></div>
                    <div><h5>Item Volume: </h5><span>{brandDetails.itemVolume}</span></div>
                    <div><h5>Item Weight: </h5><span>{brandDetails.itemWeight}</span></div>
                    <div><h5>Item Dimensions LxWxH: </h5><span>{brandDetails.itemDimensions}</span></div>
                  </div>
                  <hr />
                  <h5>About this item</h5>
                  <p className="text-end">{brandDetails.aboutItem}</p>
                </div>
                <div className="modal-footer flex-row-reverse justify-content-between">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">اغلاق</button>
                  <button type="button" className="btn btn-primary">تحدث لصيدلي</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem