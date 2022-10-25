import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "../blog.module.css";

const NavBlog = () =>
{
  const { navblog } = styles;
  const navBarStyle = ({ isActive }) => { return { backgroundColor: isActive ? "#19647c" : "" } };

  return (
    <>
      <nav id="navBlog" className={`navbar ${navblog} px-3 mb-3`}>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink className="nav-link" to="generalblog" style={navBarStyle}>أحدث الأخبار الطبية</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="firstblog" style={navBarStyle}>الأمراض المزمنة</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="secondblog" style={navBarStyle}>الأمراض الموسمية</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="thirdblog" style={navBarStyle}>الجلدية والتجميل</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="forthblog" style={navBarStyle}>الحياة اليومية</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBlog