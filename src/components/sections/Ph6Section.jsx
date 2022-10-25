import React from 'react';
import MainTitle from '../mainTitle/MainTitle';
import styles from "./sections.module.css";
import sections from "../../data/sections.json";

const Ph6Section = () =>
{
  const { subSection, gall, gallBoxy, phSections } = styles;

  const medicineBox = sections.map((e) =>
  {
    return (
      <div className={`${gallBoxy} p-0 col-sm-4 col-md-3`} key={e.id}>
        <img className="img-fluid" src={e.imgSrc} alt={e.title} />
        <div className="gallBox-modal">
          <button type="button" className="btn btn-primary mb-2">اضافة الى السلة</button>
          <button type="button" className="btn btn-danger mb-2" data-bs-toggle="modal"
            data-bs-target={`#${e.title}${e.id}`}>
            اسأل الصيدلي
          </button>
          <div className="modal fade" id={`${e.title}${e.id}`} tabIndex="-1" aria-labelledby={`${e.title}${e.id}Label`}
            aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id={`${e.title}${e.id}Label`}>{e.title}</h5>
                </div>
                <div className="modal-body">{e.content}</div>
                <div className="modal-footer flex-row-reverse justify-content-between">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">اغلاق</button>
                  <button type="button" className="btn btn-primary">تحدث لصيدلي</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  });

  return (
    <>
      <section id="phSections" className={`${phSections} cdcdcd py-5 position-relative`}>
        <div className="container">
          <MainTitle
            title="أقسام الصيدلية"
            content="ابحث عن الأدوية الخاص بك وكل ما تحتاج الية بسهولة وسرعة" />
          <div className={`${subSection} subSection-six`} id="subSection-six">
            <h2 className="py-4 px-3 my-2 d-flex align-items-center mx-4 rounded">
              العناية بالمرأة
              <i className="fa-solid fa-venus ms-3"></i>
            </h2>
            <div className="category">
              <div className={`${gall} row`}>
                {medicineBox}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ph6Section