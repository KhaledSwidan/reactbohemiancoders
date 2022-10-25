import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Ph1Section from './Ph1Section';
import PhNavSections from './PhNavSections';
import sections from "../../data/sections.json";
import MainTitle from '../mainTitle/MainTitle';
import styles from "./sections.module.css";

const MainPhSection = () =>
{
  const { subSection, gall, phSections } = styles;
  return (
    <>
      <Outlet />
      <PhNavSections />
      <section id="phSections" className={`${phSections} cdcdcd py-5 position-relative`}>
        <div className="container">
          <MainTitle
            title="أقسام الصيدلية"
            content="ابحث عن الأدوية الخاص بك وكل ما تحتاج الية بسهولة وسرعة" />
          <div className={`${subSection} subSection-one`} id="subSection-one">
            <h2 className="py-4 px-3 my-2 d-flex align-items-center mx-4 rounded">
              الأدوية
              <i className="fa-solid fa-file-prescription ms-3"></i>
            </h2>
            <div className="category">
              <div className={`${gall} row`}>
                <Row lg={3} md={2} xs={1} className="g-3">
                  {
                    sections.map(e =>
                      <Col key={e.id}>
                        <Ph1Section {...e} />
                      </Col>
                    )
                  }
                </Row>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPhSection