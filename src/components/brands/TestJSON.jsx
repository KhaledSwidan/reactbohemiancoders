import styles from "./brands.module.css";
import brandTest from "../imgs/africana.webp"
import brands from "../../data/brands.json";

const TestJSON = () =>
{
  const { box, offCanvHead, btnClose, card } = styles;

  const offCanBrandJSX = brands.map(e =>
  {
    return (
      <div key={e.id} className={`${e.char} ${box} boxBrand col-sm-6 col-md-4 col-lg-2 my-3 mx-2`} data-work={`${e.brandName}`}>
        <button className="btn p-0 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target={`#offcanvasBottom${e.num}`} aria-controls={`offcanvasBottom${e.num}`}>
          <img className="img-fluid rounded" src={brandTest} alt={`${e.brandName}`} />
        </button>
        <div className="offcanvas offcanvas-bottom" data-bs-scroll="true" tabIndex="-1" id={`offcanvasBottom${e.num}`} aria-labelledby={`offcanvasBottom${e.num}Label`} style={{ height: "90%" }}>
          <div className={`${offCanvHead} offcanvas-header`}>
            <h5 className="offcanvas-title" id={`offcanvasWithBothOptionsLabel${e.num}`}>منتجات {e.brandName}</h5>
            <button type="button" className={`btn-close ${btnClose}`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="container">
              <div className="row justify-content-center">
                <div className="con col-sm-6 col-md-3 my-2">
                  <div className={card}>
                    <img src={brandTest} className="card-img-top mx-auto img-fluid rounded-top" alt={`${e.brandName}`} />
                    <div className="card-body py-2 px-1">
                      <h5 className="card-title">{e.brandName}</h5>
                      <p className="card-text">{e.brandDetails}</p>
                      <p className="card-text"><small className=" ">أخر تحديث {e.updateTime}</small></p>
                      <div className="card-body-options">
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="price">
                          <p className="fw-bold fs-5">50 EGP</p>
                        </div>
                        <button type="button" className="btn btn-primary rounded-pill">اضافه الى السلة</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {offCanBrandJSX}
    </>
  )
}

export default TestJSON