import { React } from 'react';
import styles from "./sections.module.css";
import { Button } from 'react-bootstrap';


const PhNavSections = ({filterResult}) =>
{
  const { toolTip, navBullets } = styles;

  return (
    <>
      <nav className={`${navBullets} position-fixed top-50 d-flex flex-column`}>
        <Button onClick={() => filterResult("one")} className={`${toolTip} py-1 px-2 rounded text-center d-flex justify-content-between`} data-section=".subSection-one">
          الأدوية
          <i className="fa-solid fa-file-prescription ms-1"></i>
        </Button>
        <Button onClick={() => filterResult("two")} className={`${toolTip} py-1 px-2 rounded text-center d-flex justify-content-between`} data-section=".subSection-two">
          المكملات الغذائية
          <i className="fa-solid fa-watch-fitness ms-1"></i>
        </Button>
        <Button onClick={() => filterResult("three")} className={`${toolTip} py-1 px-2 rounded text-center d-flex justify-content-between`} data-section=".subSection-three">
          مستلزمات طبية
          <i className="fa-solid fa-briefcase-medical ms-1"></i>
        </Button>
        <Button onClick={() => filterResult("four")} className={`${toolTip} py-1 px-2 rounded text-center d-flex justify-content-between`} data-section=".subSection-four">
          مستلزمات عامة
          <i className="fa-solid fa-shuffle ms-1"></i>
        </Button>
        <Button onClick={() => filterResult("five")} className={`${toolTip} py-1 px-2 rounded text-center d-flex justify-content-between`} data-section=".subSection-five">
          التجميل والعطور
          <i className="fa-solid fa-venus-mars ms-1"></i>
        </Button>
        <Button onClick={() => filterResult("six")} className={`${toolTip} py-1 px-2 rounded text-center d-flex justify-content-between`} data-section=".subSection-six">
          العناية بالمرأة
          <i className="fa-solid fa-venus ms-1"></i>
        </Button>
        <Button onClick={() => filterResult("seven")} className={`${toolTip} py-1 px-2 rounded text-center d-flex justify-content-between`} data-section=".subSection-seven">
          العناية بالرجل
          <i className="fa-solid fa-mars ms-1"></i>
        </Button>
        <Button onClick={() => filterResult("eight")} className={`${toolTip} py-1 px-2 rounded text-center d-flex justify-content-between`} data-section=".subSection-eight">
          مستلزمات الطفل
          <i className="fa-solid fa-child-reaching ms-1"></i>
        </Button>
      </nav>
    </>
  );
};

export default PhNavSections