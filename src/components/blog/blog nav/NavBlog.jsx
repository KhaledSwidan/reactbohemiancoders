import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "../blog.module.css";

const NavBlog = () =>
{
  const { navblog } = styles;
  return (
    <>
      <nav id="navBlog" className={`navbar ${navblog} px-3 mb-3`}>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink className="nav-link" to="generalblog">أحدث الأخبار الطبية</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="firstblog">الأمراض المزمنة</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="secondblog">الأمراض الموسمية</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="thirdblog">الجلدية والتجميل</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="forthblog">الحياة اليومية</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBlog