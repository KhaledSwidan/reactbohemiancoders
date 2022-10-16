import React from 'react';
import MainTitle from "../mainTitle/MainTitle";
import styles from "./brands.module.css";
import OffCanvBrand from './OffCanvBrand';

const Brands = () =>
{
  const { brands } = styles;
  return (
    <>
      <section className={`${brands} px-3 py-5 text-center`}>
        <div className="container">
          <MainTitle title="العلامات التجارية"
            content="تسوق واختار العلامة التجارية المضلة لك وتعرف على أحدث
          المنتجات والعروض والخصومات"/>
          <div className="row">
            <div className="row d-flex align-items-center justify-content-center" id="boxBrand">
              <OffCanvBrand/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands