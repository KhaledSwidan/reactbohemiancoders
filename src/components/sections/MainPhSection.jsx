import React from 'react'
import { Col, Row } from 'react-bootstrap';
import PhNavSections from './PhNavSections';
import sections from "../../data/sections.json";
import MedicinItem from './MedicinItem';

const MainPhSection = () =>
{
  return (
    <>
      <PhNavSections />
      <Row lg={3} md={2} xs={1} className="g-3">
        {
          sections.map(e =>
            <Col key={e.id}>
              <MedicinItem {...e} />
            </Col>
          )
        }
      </Row>
    </>
  );
};

export default MainPhSection