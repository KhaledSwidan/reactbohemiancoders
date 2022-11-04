import React from 'react';
import styles from "../aboutus.module.css";

const SixthContent = () =>
{
  const { feat, iconHolder, number, icon } = styles;
  
  return (
    <>
      <div className="col-md-6 col-lg-4 mt-3">
        <div className={`${feat} border-start border-end border-primary px-2`}>
          <div className={`${iconHolder} position-relative d-flex justify-content-center`}>
            <i className={`fa-solid fa-6 position-absolute bottom-0 ${number}`}></i>
            <i className={`fa-solid fa-envelope position-absolute bottom-0 fa-4x ${icon}`}></i>
          </div>
          <h4 className="my-3 text-uppercase fw-bold">كلمة المدير التنفيذي</h4>
          <p className="lh-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet incidunt voluptas
            ducimus, rerum sit distinctio magnam sequi ipsam earum ipsum labore fuga neque optio
            voluptatum consequatur nostrum magni perferendis reprehenderit!
          </p>
        </div>
      </div>
    </>
  );
};

export default SixthContent