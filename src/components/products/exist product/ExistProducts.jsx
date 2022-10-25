import React from 'react';
import formula from "../../../data/formula.json";

const ExistProducts = () =>
{
  return (
    <>
      {formula.map(e =>
        <div  key={e.id}>
          <button type="button" className="btn btn-danger mx-2 my-3" data-bs-toggle="modal" data-bs-target={`#${e.num}`}>
            {e.formula_name}
          </button>

          <div className="modal fade" id={e.num} tabIndex="-1" aria-labelledby={e.formula_name} aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id={e.formula_name}>{e.formula_name}</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  {e.formula_details}
                </div>
                <div className="modal-footer d-flex justify-content-between flex-row-reverse">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    تواصل مع صيدلي
                  </button>
                  <button type="button" className="btn btn-primary">
                    شراء
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>)}
    </>
  );
};

export default ExistProducts