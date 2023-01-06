import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./mainhome.module.css";

const CarouselHome = () =>
{
  const { content, mainHead, logos, btnn, img, circleEffect, effect1, effect2, st, nd, rd, spinEffect } = styles;

  const circDiv = [];
  for (let i = 0; i <= 28; i++) { circDiv.push(<div className="" key={Math.random(10)}></div>) };

  return (
    <>
      <div className={`${mainHead} p-4 m-3`}>
        <div className="animation-effects">
          <div className={effect1} id='effect1'>
            {circDiv}
          </div>
          <div className={spinEffect}>
            <div className={`${effect2} ${st}`}></div>
            <div className={`${effect2} ${nd} mx-2`}></div>
            <div className={`${effect2} ${rd}`}></div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-start align-items-start w-75" style={{ zIndex: 1 }}>
          <div className={`${content}`}>
            <h1 className='text-white'>نحن شركاء رحلتك نحو حياة صحية سعيدة</h1>
            <p>نبذة مختصرة عن الصيدلية نبذة مختصرة عن الصيدلية نبذة مختصرة عن الصيدلية نبذة مختصرة عن الصيدلية نبذة مختصرة عن الصيدلية نبذة مختصرة عن الصيدلية</p>
          </div>
          <div className="mt-4" id="order">
            <div className={`${logos} d-flex justify-content-start`}>
              <i className="fa-solid fa-hand-holding-medical"></i>
              <i className="fa-solid fa-file-prescription"></i>
              <i className="fa-solid fa-truck-medical"></i>
            </div>
            <Link to="/normalrosheta" className={`${btnn} btn btn-primary mt-3`}>اطلب الروشتة بسهولة</Link>
          </div>
        </div>
        <div className={circleEffect}></div>
        <img src={require("../../imgs/doctor.png")} alt="" className={img} />
      </div>
    </>
  );
};

export default CarouselHome