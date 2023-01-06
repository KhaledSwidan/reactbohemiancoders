import React from "react";
import { Link } from "react-router-dom";

import siteLogo from "../../imgs/siteLogo.webp";
import styles from "./fullnavbar.module.css";

import ProfileNav from "./ProfileNav";
import SideNavBar from "./SideNavBar";

const NavBar = () => {
  const { topnav, settingNav, contact, contSetting } = styles;

  return (
    <>
      <nav className={`navbar ${topnav} pt-0`}>
        <div className="container d-flex justify-content-center w-100 py-2 px-5 position-relative border-bottom">
          <Link
            className="navbar-brand d-flex flex-row-reverse justify-content-center align-items-center"
            to="/">
            <img src={siteLogo} className="w-25 ps-1" alt="" />
            أسم الصيدلية|
          </Link>
          <div className={`${contSetting} d-flex`}>
            <div className={`${contact} d-flex align-items-center`}>
              <address className="mb-0 text-center">
                عنوان الادارة / الاسكندرية - مصر
              </address>
              <a href="tel:123456789" className="text-white ps-1">
                03/578499111
              </a>
            </div>
            <div className={`${settingNav}`}>
              <ProfileNav />
            </div>
          </div>
        </div>
        <div className="container">
          <SideNavBar />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
