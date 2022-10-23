import React, { useState } from 'react'

const ExistProducts = () =>
{
  const [formula] = useState([
    {
      id: 1,
      num: "one",
      formula_name: "1 اسم التركيبة",
      formula_details: "توضيح عن المنتج وشرح مبسط"
    },
    {
      id: 2,
      num: "two",
      formula_name: "2 اسم التركيبة",
      formula_details: "توضيح عن المنتج وشرح مبسط"
    },
    {
      id: 3,
      num: "three",
      formula_name: "3 اسم التركيبة",
      formula_details: "توضيح عن المنتج وشرح مبسط"
    },
    {
      id: 4,
      num: "four",
      formula_name: "4 اسم التركيبة",
      formula_details: "توضيح عن المنتج وشرح مبسط"
    },
    {
      id: 5,
      num: "five",
      formula_name: "5 اسم التركيبة",
      formula_details: "توضيح عن المنتج وشرح مبسط"
    },
    {
      id: 6,
      num: "six",
      formula_name: "6 اسم التركيبة",
      formula_details: "توضيح عن المنتج وشرح مبسط"
    },
    {
      id: 7,
      num: "seven",
      formula_name: "7 اسم التركيبة",
      formula_details: "توضيح عن المنتج وشرح مبسط"
    },
    {
      id: 8,
      num: "eight",
      formula_name: "8 اسم التركيبة",
      formula_details: "توضيح عن المنتج وشرح مبسط"
    },
    {
      id: 9,
      num: "nine",
      formula_name: "9 اسم التركيبة",
      formula_details: "توضيح عن المنتج وشرح مبسط"
    },
    {
      id: 10,
      num: "ten",
      formula_name: "10 اسم التركيبة",
      formula_details: "توضيح عن المنتج وشرح مبسط"
    },
    {
      id: 11,
      num: "eleven",
      formula_name: "11 اسم التركيبة",
      formula_details: "توضيح عن المنتج وشرح مبسط"
    },
    {
      id: 12,
      num: "twelve",
      formula_name: "12 اسم التركيبة",
      formula_details: "توضيح عن المنتج وشرح مبسط"
    },
    {
      id: 13,
      num: "thirteen",
      formula_name: "13 اسم التركيبة",
      formula_details: "توضيح عن المنتج وشرح مبسط"
    },
    {
      id: 14,
      num: "fourteen",
      formula_name: "14 اسم التركيبة",
      formula_details: "توضيح عن المنتج وشرح مبسط"
    },
    {
      id: 15,
      num: "fifteen",
      formula_name: "15 اسم التركيبة",
      formula_details: "توضيح عن المنتج وشرح مبسط"
    }
  ]);

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