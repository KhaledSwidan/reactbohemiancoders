import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./footer.module.css";

const SocialLinksFooter = () =>
{
  const { facebook, twitter, linkedin, youtube } = styles;
  return (
    <>
      <div className="col-sm-12 col-md-6">
        <div className="mt-2 d-flex flex-column align-items-center justify-content-center h-100">
          <Link to="/" className="btn btn-primary rounded-pill main-btn w-100">graphberry@gmail.com</Link>
          <ul className="d-flex mt-3 pe-0 list-unstyled gap-3 justify-content-center">
            <li>
              <Link to="" className="d-block text-light">
                <i className={`fa-brands fa-facebook fa-lg ${facebook} rounded-circle p-2`}></i>
              </Link>
            </li>
            <li>
              <Link to="" className="d-block text-light">
                <i className={`fa-brands fa-twitter fa-lg ${twitter} rounded-circle p-2`}></i>
              </Link>
            </li>
            <li>
              <Link to="" className="d-block text-light">
                <i className={`fa-brands fa-linkedin fa-lg ${linkedin} rounded-circle p-2`}></i>
              </Link>
            </li>
            <li>
              <Link to="" className="d-block text-light">
                <i className={`fa-brands fa-youtube fa-lg ${youtube} rounded-circle p-2`}></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SocialLinksFooter