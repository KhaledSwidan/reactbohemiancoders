import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { UseShoppingCart, FormatCurrency } from './ShoppingCartContext';

const StoreItem = ({ id, price, title, imgSrc, content }) =>
{
  const { getItemsQuantity, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart } = UseShoppingCart();
  const quantity = getItemsQuantity(id);
  
  return (
    <Card className="h-100">
      <Card.Img
        src={imgSrc}
        variant="top"
        style={{ height: "200px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className='fs-2'>{title}</span>
          <span className='text-muted me-2'>{FormatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {
            quantity === 0 ?
              (<Button onClick={() => increaseCartQuantity(id)} className="w-100">
                اضافة الى السلة
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
          </Button>
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

export default StoreItem