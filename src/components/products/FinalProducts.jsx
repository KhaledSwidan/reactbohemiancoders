import React from 'react';
import MainTitle from "../mainTitle/MainTitle";
import NoProducts from './no product/NoProducts';

const FinalServices = () =>
{
  return (
    <>
      <section className="products py-5" id="products">
        <div className="container">
          <MainTitle title="منتجات الصيدلية"
            content="تعرف على التحضيرات والوصفات الطبية" />
          <div className="products-types py-4 px-3">
            <div className="all-products d-flex justify-content-center align-items-center flex-wrap" id="all-products">
            </div>
            <hr />
            <div className="noproduct">
              <NoProducts />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalServices