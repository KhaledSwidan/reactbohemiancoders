import React from 'react'
import { Container } from 'react-bootstrap';
import styles from "../rosheta.module.css"
import MainTitle from "../../mainTitle/MainTitle";
import { Link } from 'react-router-dom';

const NoRosheta = () =>
{
  const { rosheta } = styles;

  return (
    <section id="rosheta" class={`${rosheta} py-5 position-relative`}>
      <Container>
        <MainTitle
          title="اطلب الأدوية بسهولة"
          content=""
        />
        <div>
          <Link to="/mainphsection">تصفح الصيدلية</Link>
          <Link>تواصل مع صيدلي</Link>
        </div>
      </Container>
    </section>
  );
};

export default NoRosheta