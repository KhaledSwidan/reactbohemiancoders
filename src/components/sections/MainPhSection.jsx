import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import sections from "../../data/sections.js";
import StoreItem from "./StoreItem";
import MainTitle from "../mainTitle/MainTitle";
import styles from "./sections.module.css";
import PhNavSections from "./PhNavSections";
import FilterDrugs from "./FilterDrugs.jsx";

const MainPhSection = () => {
  const { phSections } = styles;

  const [cats, setCats] = useState(sections);
  const filterResult = (catItem) =>
    setCats(sections.filter((e) => e.category === catItem));
  const filterDrug = (currDrug) =>
    setCats(sections.filter((e) => e.char === currDrug));

  return (
    <section
      id="phSections"
      className={`${phSections} cdcdcd py-5 position-relative`}>
      <Container>
        <MainTitle
          title="أقسام الصيدلية"
          content="ابحث عن الأدوية الخاص بك وكل ما تحتاج الية بسهولة وسرعة"
        />
        <Container className="d-flex justify-content-center mb-2">
          <FilterDrugs filterDrug={filterDrug} />
        </Container>
        <Row lg={3} md={2} xs={1} className="g-3">
          {cats.map((e) => (
            <Col key={e.id}>
              <StoreItem {...e} />
            </Col>
          ))}
        </Row>
        <PhNavSections filterResult={filterResult} />
      </Container>
    </section>
  );
};

export default MainPhSection;
