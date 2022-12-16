import React from 'react';
import { Outlet } from 'react-router-dom';
import AboutUs from "../about us/AboutUs";
import AdHome from './AdHome';
import CarouselHome from './CarouselHome';
import styles from "./mainhome.module.css";

const MainHome = () =>
{
  const {headCar} = styles;
  return (
    <>
      <Outlet/>
      <header className={`${headCar} position-relative d-flex flex-column`}>
        <CarouselHome />
        <div className="container">
          <AdHome />
        </div>
      </header>
      <AboutUs />
    </>
  );
};

export default MainHome