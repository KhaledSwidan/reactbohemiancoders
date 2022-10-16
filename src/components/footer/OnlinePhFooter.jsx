import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./footer.module.css";

const OnlinePhFooter = () =>
{
  const { links } = styles;
  return (
    <>
      <div className="col-sm-6 col-md-3">
        <div className={`${links} mb-5`}>
          <h5 className="text-light">صيدلية اونلاين</h5>
          <ul className="list-unstyled lh-lg text-end p-0 d-flex flex-column align-items-start">
            <li>
              <Link to="/" className="text-white-50">تسجيل الدخول</Link>
            </li>
            <li>
              <Link to="tel:+" className="text-white-50">تسجيل جديد</Link>
            </li>
            <li>
              <Link to="/" className="text-white-50">لماذا نحن؟</Link>
            </li>
            <li>
              <Link to="/" className="text-white-50">المدونة</Link>
            </li>
            <li>
              <Link to="/" className="text-white-50">تواصل معنا</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OnlinePhFooter