import React from 'react'
import NormalRosheta from '../../schema formik/NormalRosheta';

const NoProducts = () =>
{
  return (
    <>
      <button type="button" className="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal-0">
        اذا لم تجد التركيبة الخاصة بك من فضلك راسلنا
      </button>
      <div className="modal fade" id="exampleModal-0" tabIndex="-1" aria-labelledby="exampleModalLabel-0"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <NormalRosheta />
            </div>
            <div className="modal-footer flex-row-reverse justify-content-between">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">اغلاق</button>
              <button type="button" className="btn btn-primary">تحدث لصيدلي</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoProducts