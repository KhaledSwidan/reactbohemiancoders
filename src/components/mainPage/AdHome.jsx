import React from 'react'

const AdHome = () =>
{
  return (
    <>
      <div className="section-parts d-flex justify-content-start">
        <div id="carouselExampleControls1" className="carousel slide mt-5 mb-3 w-25" data-bs-ride="carousel">
          <div className="carousel-inner secCar rounded">
            <div className="carousel-item active" style={{ backgroundColor: "rgba(219, 204, 255, 0.2)" }}>
              <p className="text-center m-0 py-2 text-dark">عروض الصيف</p>
            </div>
            <div className="carousel-item" style={{ backgroundColor: "rgba(219, 204, 255, 0.2)" }}>
              <p className="text-center m-0 py-2 text-dark">احمى نفسك من كورونا</p>
            </div>
            <div className="carousel-item" style={{ backgroundColor: "rgba(219, 204, 255, 0.2)" }}>
              <p className="text-center m-0 py-2 text-dark">تقسيط من البنك الأهلى</p>
            </div>
          </div>
        </div>
        <div id="carouselExampleControls2" className="carousel slide mt-5 mb-3 w-25 mx-2" data-bs-ride="carousel">
          <div className="carousel-inner secCar rounded">
            <div className="carousel-item active" style={{ backgroundColor: "rgba(219, 204, 255, 0.2)" }}>
              <p className="text-center m-0 py-2 text-dark">العروض الاسبوعية</p>
            </div>
            <div className="carousel-item" style={{ backgroundColor: "rgba(219, 204, 255, 0.2)" }}>
              <p className="text-center m-0 py-2 text-dark">اسأل صيدلي</p>
            </div>
            <div className="carousel-item" style={{ backgroundColor: "rgba(219, 204, 255, 0.2)" }}>
              <p className="text-center m-0 py-2 text-dark">تتبع طلبك بسهولة</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdHome