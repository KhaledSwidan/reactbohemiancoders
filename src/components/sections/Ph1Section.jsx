import React from 'react';
import { UseShoppingCart, FormatCurrency } from '../../context/ShoppingCartContext';
import { Button, Card } from 'react-bootstrap';
import styles from "./sections.module.css";

const Ph1Section = ({ id, imgSrc, title, content, price }) =>
{
  const { gallBoxy } = styles;
  
  const { getItemsQuantity, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart } = UseShoppingCart();
  const quantity = getItemsQuantity(id);

  return (
    <Card className={`all1 cat11 ${gallBoxy} p-0 col-sm-4 col-md-3`} key={id}>
      <Card.Img
        src={imgSrc}
        variant="top"
        style={{ height: "200px", objectFit: "cover" }} />
      <Card.Title className="d-flex justify-content-between align-items-baseline">
        <span className='fs-2'>{title}</span>
        <span className='text-muted me-2'>{FormatCurrency(price)}</span>
      </Card.Title>
      <Card.Body>
        <div className="gallBox-modal">
          <div className="mt-auto">
            {
              quantity === 0 ?
                (<Button onClick={() => increaseCartQuantity(id)} className="w-100">
                  Add To Cart
                </Button>) :
                (<div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                  <div className='d-flex justify-content-center align-items-center' style={{ gap: ".5rem" }}>
                    <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                    <span>{quantity} in Cart</span>
                    <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                  </div>
                  <Button onClick={() => removeItemFromCart(id)} variant='danger' size="sm">
                    Remove
                  </Button>
                </div>)
            }
          </div>
          <button type="button" className="btn btn-danger mb-2" data-bs-toggle="modal"
            data-bs-target={`#${title}${id}`}>
            اسأل الصيدلي
          </button>
          <div className="modal fade" id={`${title}${id}`} tabIndex="-1" aria-labelledby={`${title}${id}Label`}
            aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id={`${title}${id}Label`}>{title}</h5>
                </div>
                <div className="modal-body">{content}</div>
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

export default Ph1Section;