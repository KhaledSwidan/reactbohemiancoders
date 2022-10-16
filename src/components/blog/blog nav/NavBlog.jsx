import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../blog.module.css";

const NavBlog = () =>
{
  const { navblog } = styles;
  return (
    <>
      <nav id="navBlog" className={`navbar ${navblog} px-3 mb-3`}>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="#generalBlog">أحدث الأخبار الطبية</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#firstBlog">الأمراض المزمنة</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#secondBlog">الأمراض الموسمية</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#thirdBlog">الجلدية والتجميل</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#forthBlog">الحياة اليومية</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBlog