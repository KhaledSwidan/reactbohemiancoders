import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./footer.module.css";

const ImportantLinksFooter = () =>
{
  const { links } = styles;
  return (
    <>
      <div className="col-sm-6 col-md-3">
        <div className={links}>
          <h5 className="text-light">روابط مهمة</h5>
          <ul className="list-unstyled lh-lg text-end p-0 d-flex flex-column align-items-start">
            <li>
              <Link to="/" className="text-white-50">ارسل الروشتة</Link>
            </li>
            <li>
              <Link to="tel:+" className="text-white-50">تتبع طلبك</Link>
            </li>
            <li>
              <Link to="/" className="text-white-50">سياسة النقاط</Link>
            </li>
            <li>
              <Link to="/" className="text-white-50">سياسة الشحن</Link>
            </li>
            <li>
              <Link to="/" className="text-white-50">سياسة الاستخدام</Link>
            </li>
            <li>
              <Link to="/" className="text-white-50">سياسة الخصوصية</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ImportantLinksFooter