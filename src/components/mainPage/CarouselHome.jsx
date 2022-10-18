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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident iusto voluptate necessitatibus, asperiores dolore error suscipit eius explicabo aut temporibus expedita quod quae quaerat. Nihil placeat quibusdam quasi dolorem saepe.</p>
        </div>
        <div className="mt-2" id="order">
          <div className={`${logos} d-flex justify-content-center`}>
            <i className="fa-solid fa-hand-holding-medical"></i>
            <i className="fa-solid fa-file-prescription"></i>
            <i className="fa-solid fa-truck-medical"></i>
          </div>
          <Link to="/" className={`${btnn} btn btn-primary mt-3`}>اطلب الروشتة بسهولة</Link>
        </div>
      </div>
    </>
  );
};

export default CarouselHome