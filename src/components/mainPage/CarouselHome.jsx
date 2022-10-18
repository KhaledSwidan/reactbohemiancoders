import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./mainhome.module.css";

const CarouselHome = () =>
{
  const { content, mainHead, logos, btnn } = styles;

  return (
    <>
      <div className={`${mainHead} d-flex justify-content-center align-items-start flex-column`}>
        <div className={`${content}`}>
          <h1 className='text-white'>نحن شركاء رحلتك نحو حياة صحية سعيدة</h1>
          <p>نبذة مختصرة عن الصيدلية نبذة مختصرة عن الصيدلية نبذة مختصرة عن الصيدلية نبذة مختصرة عن الصيدلية نبذة مختصرة عن الصيدلية نبذة مختصرة عن الصيدلية</p>
        </div>
        <div className="mt-2" id="order">
          <div className={`${logos} d-flex justify-content-center`}>
            <i className="fa-solid fa-hand-holding-medical"></i>
            <i className="fa-solid fa-file-prescription"></i>
            <i className="fa-solid fa-truck-medical"></i>
          </div>
          <Link to="/normalrosheta" className={`${btnn} btn btn-primary mt-3`}>اطلب الروشتة بسهولة</Link>
        </div>
      </div>
    </>
  );
};

export default CarouselHome