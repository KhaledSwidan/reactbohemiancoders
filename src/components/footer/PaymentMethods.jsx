import React from 'react'

const PaymentMethods = () =>
{
  return (
    <>
      <div className="col-sm-4 col-md-3 d-flex flex-column justify-content-center align-items-center p-0 w-auto">
        <i className="fa-brands fa-cc-paypal fs-3 fw-bold text-white"></i>
      </div>
      <div className="col-sm-4 col-md-3 d-flex flex-column justify-content-center align-items-xl-center p-0 w-auto mx-4">
        <i className="fa-brands fa-cc-mastercard fs-3 fw-bold text-white"></i>
      </div>
      <div className="col-sm-4 col-md-3 d-flex flex-column justify-content-center align-items-center p-0 w-auto">
        <i className="fa-brands fa-cc-visa fs-3 fw-bold text-white"></i>
      </div>
      <div className="col-sm-4 col-md-3 d-flex flex-column justify-content-center align-items-center p-0 w-auto ms-4">
        <i className="fa-solid fa-hand-holding-dollar fs-3 fw-bold text-white"></i>
      </div>
    </>
  );
};

export default PaymentMethods