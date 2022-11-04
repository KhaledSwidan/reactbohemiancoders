import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { UseShoppingCart, FormatCurrency } from '../../context/ShoppingCartContext';
import styles from "../brands/brands.module.css"


const StoreItem = ({ id, price, title, imgSrc, content }) =>
{
  const { ask, btnImg } = styles;

  const { getItemsQuantity, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart } = UseShoppingCart();
  const quantity = getItemsQuantity(id);
  
  return (
    <Card className="h-100">
      <Button type="button" variant="light" className={`${btnImg} btn w-100 p-0`} data-bs-toggle="modal"
        data-bs-target={`#${id}`}>
        <Card.Img
          src={imgSrc}
          variant="top"
          style={{ height: "200px", objectFit: "contain" }} />
        <div className="modal fade" id={`${id}`} tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body p-0">
                <Card.Img
                  src={imgSrc}
                  variant="top"
                  style={{ objectFit: "contain" }} />
              </div>
            </div>
          </div>
        </div>
      </Button>
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <Card.Title className="d-flex flex-column align-items-end">
          <span className='h3'>{title}</span>
          <span className='text-muted'>{FormatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {
            quantity === 0 ?
              (<Button onClick={() => increaseCartQuantity(id)} className="w-100">
                اضافة الى السلة
                <i className="fa-solid fa-cart-plus ms-2"></i>
              </Button>) :
              (<div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                <div className='d-flex justify-content-center align-items-center' style={{ gap: ".5rem" }}>
                  <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                  <span>عدد القطع: {quantity}</span>
                  <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                </div>
                <Button onClick={() => removeItemFromCart(id)} variant='danger' size="sm">
                  ازالة من السلة
                </Button>
              </div>)
          }
          <Button type="button" className="btn btn-info mt-2 w-100" data-bs-toggle="modal"
            data-bs-target={`#${title}${id}`}>
            اسأل الصيدلي
            <i className="fa-solid fa-circle-info ms-2"></i>
          </Button>
          <div className="modal fade" id={`${title}${id}`} tabIndex="-1" aria-labelledby={`${title}${id}Label`}
            aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header" dir="ltr">
                  <h5 className="modal-title" id={`${title}${id}Label`}>{title}</h5>
                </div>
                <div className="modal-body">
                <div className={ask}>
                    <div><h5>اسم الدواء:</h5><span></span></div>
                    <div><h5>المادة الفعالة:</h5><span></span></div>
                    <div><h5>تاريخ الصلاحية: </h5><span></span></div>
                    <div><h5>ارشادات عامة:</h5><span></span></div>
                    <div><h5>أغراض الاستخدام: </h5><span></span></div>
                    <div><h5>الجرعة: </h5><span></span></div>
                  </div>
                  <hr />
                  <h5>معلومات عن الدواء:</h5>
                  <p className="text-end"></p>
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