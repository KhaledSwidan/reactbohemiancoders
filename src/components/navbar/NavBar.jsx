import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UseShoppingCart } from '../../context/ShoppingCartContext';

import siteLogo from "../imgs/siteLogo.webp";
import styles from "./fullnavbar.module.css";

import SideNavBar from './SideNavBar';
import ProfileNav from './ProfileNav';

const NavBar = () =>
{
  const { topnav } = styles;
  const { openCart, cartQuantity } = UseShoppingCart();
  return (
    <>
      <nav className={`navbar ${topnav} pt-0 `}>
        <div className="container d-flex justify-content-center w-100 py-2 px-5 position-relative border-bottom">
          <Link className="navbar-brand d-flex flex-row-reverse justify-content-center align-items-center" to="/">
            <img src={siteLogo} className="w-25 ps-1" alt="" />
            أسم الصيدلية|
          </Link>
          <div className="d-flex align-items-center">
            <address className="mb-0 text-center">عنوان الادارة / الاسكندرية - مصر</address>
            <a href="tel:123456789" className='text-white ps-1'>03/578499111</a>
            <Button
              variant='outline-primary'
              className='rounded ms-2 text-white'
              style={{ width: "3rem", height: "3rem", position: "relative" }}
              onClick={openCart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>
              <div
                className="bg-danger rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  color: "#fff",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "1.5rem",
                  height: "1.5rem",
                  transform: "translate(25%, 25%)"
                }}>
                {cartQuantity}
              </div>
            </Button>
          <ProfileNav/>
          </div>
        </div>
        <div className="container">
          <SideNavBar />
        </div>
      </nav>
    </>
  );
};

export default NavBar