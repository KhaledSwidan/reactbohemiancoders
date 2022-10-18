import React from 'react';
import { useField } from 'formik';

const TextInput = ({ label, ...props }) =>
{
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className="form-label">{label}</label>
      <input className={meta.touched && meta.error ? "" : ""} {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

export default TextInput;

// {...props} are
// name = "..."
// text = "..."
// placeholder="..."