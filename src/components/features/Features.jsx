import React from 'react';
import styles from "./features.module.css";

const Features = () =>
{
  const {serv,features} = styles;
  return (
    <>
      <section className={`${features} py-2`}>
        <div className="container-fluid">
          <div className="row px-2">
            <div className={`${serv} col-sm-3 d-flex flex-column justify-content-center align-items-center pt-3`}>
              <i className="fa-solid fa-hand-holding-medical mb-3 fs-3 fw-bold text-white"></i>
              <p className="text-muted fw-bold text-center">توصيل لجميع المحافظات</p>
            </div>
            <div className={`${serv} col-sm-3 d-flex flex-column justify-content-center align-items-center pt-3`}>
              <i className="fa-solid fa-money-check-dollar mb-3 fs-3 fw-bold text-white"></i>
              <p className="text-muted fw-bold text-center">وسائل دفع متعددة</p>
            </div>
            <div className={`${serv} col-sm-3 d-flex flex-column justify-content-center align-items-center pt-3`}>
              <i className="fa-solid fa-cart-arrow-down mb-3 fs-3 fw-bold text-white"></i>
              <p className="text-muted fw-bold text-center">خصومات حصرية</p>
            </div>
            <div className={`${serv} col-sm-3 d-flex flex-column justify-content-center align-items-center pt-3`}>
              <i className="fa-solid fa-headset mb-3 fs-3 fw-bold text-white"></i>
              <p className="text-muted fw-bold text-center">خدمة دعم 24 ساعة</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features