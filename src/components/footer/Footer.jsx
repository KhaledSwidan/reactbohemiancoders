import React from 'react';
import styles from "./footer.module.css";

import ContentFooter from './ContentFooter';
import ImportantLinksFooter from './ImportantLinksFooter';
import OnlinePhFooter from './OnlinePhFooter';
import SocialLinksFooter from './SocialLinksFooter';
import PaymentMethods from './PaymentMethods';

const Footer = () =>
{
  const { footer } = styles;
  return (
    <>
      <section className={`${footer} py-5 text-white-50`}>
        <div className="container">
          <div className="row justify-content-center">
            <ContentFooter />
            <ImportantLinksFooter />
            <OnlinePhFooter />
            <SocialLinksFooter />
            <div className="container">
              <div className="row justify-content-center mt-3">
                <PaymentMethods />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer