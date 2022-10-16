import React from 'react';
import styles from "./mainTitle.module.css";
import imgLogo from "../imgs/title.webp"

const MainTitle = ({ ...props }) =>
{
  const { mainTitleDiv, mainTitle } = styles;
  return (
    <>
      <div className={`${mainTitle} position-relative d-flex flex-column align-items-start mb-4`}>
        <img className="mb-4" src={imgLogo} alt="" />
        <div className={`${mainTitleDiv} text-start rounded p-3`}>
          <h2>{props.title}</h2>
          <p className="text-muted fs-5">{props.content}</p>
        </div>
      </div>
    </>
  );
};

export default MainTitle