import React from 'react';
import imgLogo from "../../imgs/title.webp"

const ContentFooter = () =>
{
  return (
    <>
      <div className="col-sm-12 col-md-6 ps-3">
        <div className="mb-5 d-flex flex-column align-items-start">
          <img src={imgLogo} alt="" className="img-fluid mb-4" />
          <p className="mb-4 text-start">
            نبذة مختصرة عن الصيدلية نبذة مختصرة عن الصيدلية نبذة مختصرة عن الصيدلية نبذة مختصرة عن
            الصيدلية نبذة مختصرة عن الصيدلية نبذة مختصرة عن الصيدلية
          </p>
          <div className="w-100 text-center">
            Created By <span className="" style={{ color: "#fc00fc" }}>Bohemian Coder</span>
            <div>
              &copy; 2022 - <span className="text-warning">Medics Inc</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentFooter