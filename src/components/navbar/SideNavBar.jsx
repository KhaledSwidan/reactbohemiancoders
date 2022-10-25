import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styles from "./fullnavbar.module.css";

const SideNavBar = () =>
{
  const { mainSections } = styles;
  return (
    <>
      <ul className={`navbar-nav ${mainSections} px-3`}>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            <i className="fa-solid fa-house me-3"></i>
            الرئيسية
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/mainphsection">
            <i className="fa-solid fa-prescription me-3"></i>
            الصيدلية
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/brands">
            <i className="fa-solid fa-prescription me-3"></i>
            العلامات التجارية
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/offers">
            <i className="fa-solid fa-gift me-3"></i>
            العروض
          </NavLink>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" id="roshetaDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-pills me-3"></i>
            الروشتة
          </Link>
          <ul className="dropdown-menu" aria-labelledby="roshetaDropdown">
            <li><NavLink className="dropdown-item text-start" to="/normalrosheta">روشتة عادية</NavLink></li>
            <li><NavLink className="dropdown-item text-start" to="/contractrosheta">روشتة تعاقد</NavLink></li>
            <li><NavLink className="dropdown-item text-start" to="/norosheta">ليس لدي روشتة</NavLink></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="text-white text-center">اطلب دوائك بسهولة</li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-hand-holding-medical me-3"></i>
            الخدمات
          </Link>
          <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
            <li><NavLink className="dropdown-item" to="/services">اسأل صيدلي</NavLink></li>
            <li><NavLink className="dropdown-item" to="/services">الطلبات الخاصة</NavLink></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="text-white text-center">نحو حياة صحية أفضل</li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/blogs">
            <i className="fa-solid fa-circle-info me-3"></i>
            نصائح طبية
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">
            <i className="fa-solid fa-staff-snake me-3"></i>
            منتجاتنا
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default SideNavBar