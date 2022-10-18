import React from 'react';
import { Form, Formik } from 'formik';
import { initialValuesNRosheta, OnSubmit, ValidationSchemaNRosheta } from './SchemaNRosheta';
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";

const NormalRosheta = () =>
{
  return (
    <>
      <Formik
        initialValues={initialValuesNRosheta}
        validationSchema={ValidationSchemaNRosheta}
        onSubmit={OnSubmit}>
        
        {({isSubmitting}) =>
        {
          <Form className="row g-3">
            <div className="col-md-6">
              <TextInput
                label="الاسم رباعي"
                name="userName"
                text="text"
                placeholder="Enter Your Name" />
            </div>
            <div className="col-md-6">
              <TextInput
                label="رقم الموبايل"
                name="mobile"
                text="text"
                placeholder="Enter your valid mobile number" />
            </div>
            <div className="col-12">
              <TextInput
                label="العنوان"
                name="address"
                text="text"
                placeholder="Enter your valid address" />
            </div>
            <div className="col-md-6">
              <SelectInput
                label="المدينة"
                name="city"
                placeholder="please select a city">
                <option value="">please select a city</option>
                <option value="alexandria">Alexandria</option>
                <option value="cairo">Cairo</option>
                <option value="giza">Giza</option>
              </SelectInput>
            </div>
            <div className="col-md-4">
            <SelectInput
                label="أقرب فرع لك"
                name="branch"
                placeholder="please select a branch">
                <option value="">please select a branch</option>
                <option value="branch 1">Branch 1</option>
                <option value="branch 2">Branch 2</option>
                <option value="branch 3">Branch 3</option>
                <option value="branch 4">Branch 4</option>
              </SelectInput>
            </div>
            <div className="col-md-6">
              <label for="formFile1" className="form-label">ارسال صورة الروشتة</label>
              <input className="form-control" type="file" id="formFile1" />
            </div>
            <div className="col-md-12">
              <label for="floatingTextarea1" className="form-label">ارسل ملاحظاتك</label>
              <textarea className="form-control" placeholder="Leave a comment here"
                id="floatingTextarea1"></textarea>
            </div>
            <div className="col-12">
              <button disabled={isSubmitting} type="submit" className="btn btn-primary">ادخال</button>
            </div>
          </Form>
        }}
        
      </Formik>
    </>
  );
};

export default NormalRosheta