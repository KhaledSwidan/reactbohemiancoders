import React from 'react';
import MainTitle from "../mainTitle/MainTitle";
import FirstContent from './first content/FirstContent';
import SecondContent from './second content/SecondContent';
import ThirdContent from './third content/ThirdContent';
import styles from "./aboutus.module.css";

const AboutUs = () =>
{
  const {aboutUs}=styles;
  return (
    <>
      <section className={`${aboutUs} text-center py-5`}>
        <div className="container">
          <MainTitle
            title="تعرف علينا"
            content="تسوق واختار العلامة التجارية المضلة لك وتعرف على أحدث المنتجات والعروض والخصومات" />
          <div className="row pt-4 mt-3 justify-content-center">
            <FirstContent />
            <SecondContent />
            <ThirdContent />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs