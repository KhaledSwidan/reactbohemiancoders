import React, { useState } from 'react';
import MainTitle from "../mainTitle/MainTitle";
import styles from "./brands.module.css";
import NavBarBrands from './NavBarBrands';
import brands from "../../data/brands"
import { Col, Container, Row, Form } from 'react-bootstrap';
import StoreItem from './StoreItem';

const Brands = () =>
{
  const { brnds, brndNavInpt } = styles;
  const [branditm, setBranditm] = useState(brands);
  const [brandName, setBrandName] = useState([]);

  const filterResult = slectedChar => setBranditm(brands.filter(e => e.char === slectedChar));

  return (
    <>
      <section className={`${brnds} px-3 py-4 text-center`}>
        <Container>
          <MainTitle title="العلامات التجارية"
            content="تسوق واختار العلامة التجارية المضلة لك وتعرف على أحدث
          المنتجات والعروض والخصومات"/>
          <Container>
            <Form.Control
              type="text"
              id="searchTxT"
              className={`${brndNavInpt} mx-auto mb-2`}
              placeholder="Search by Brand Name..."
              dir='ltr'
              onChange={e => setBrandName(e.target.value)}
              value={brandName}
            />
            <NavBarBrands filterResult={filterResult} />
          </Container>
          <Row lg={3} md={2} xs={1} className="g-3 mt-2">
            {
              branditm.map(e =>
                <Col key={e.id}>
                  <StoreItem {...e} />
                </Col>
              )
            }
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Brands