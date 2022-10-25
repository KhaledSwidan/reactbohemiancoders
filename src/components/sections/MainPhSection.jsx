import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import sections from "../../data/sections.json";
import StoreItem from "./StoreItem";
import MainTitle from '../mainTitle/MainTitle';
import styles from "./sections.module.css";
import PhNavSections from './PhNavSections';


const MainPhSection = () =>
{
  const { phSections } = styles;
  return (
    <section id="phSections" className={`${phSections} cdcdcd py-5 position-relative`}>
      <Container>
        <MainTitle
          title="أقسام الصيدلية"
          content="ابحث عن الأدوية الخاص بك وكل ما تحتاج الية بسهولة وسرعة" />
        <Row lg={3} md={2} xs={1} className="g-3">
          {
            sections.map(e =>
              <Col key={e.id}>
                <StoreItem {...e} />
              </Col>
            )
          }
        </Row>
        <PhNavSections />
      </Container>
    </section>
  );
};

export default MainPhSection