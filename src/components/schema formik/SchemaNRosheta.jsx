import * as Yup from "yup";

export const ValidationSchemaNRosheta = Yup.object().shape({
  userName: Yup
    .string()
    .required("Required"),
  mobile: Yup
    .string()
    .matches(/^01[0125][0-9]{8}$/gm, { message: "Please write a right mobile number." })
    .required("Required"),
  address: Yup
    .string()
    .required("Required"),
  city: Yup
    .string()
    .oneOf(["alexandria", "cairo", "giza"])
    .required("Required"),
  branch: Yup
    .string()
    .oneOf(["branch 1", "branch 2", "branch 3", "branch 4"])
    .required("Required")
});

export const initialValuesNRosheta = {
  userName: "",
  mobile: "",
  address: "",
  city: "",
  branch: ""
};

export const OnSubmit = async (values, actions) =>
{
  await new Promise(resolve => setTimeout(resolve, 1000));
  actions.resetForm();
  console.log("Submitted", values);
};