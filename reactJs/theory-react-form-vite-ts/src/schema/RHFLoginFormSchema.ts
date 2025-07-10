import * as Yup from "yup";

export const RHFLoginFormschema = Yup.object({
  fullName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .matches(/[A-Z]/, "Mật khẩu phải có ít nhất 1 chữ cái in hoa")
    .matches(/[a-z]/, "Mật khẩu phải có ít nhất 1 chữ cái thường"),
    retypePassword: Yup.string()
    .oneOf([Yup.ref("password")], "Mật khẩu nhập lại không khớp")
    .required("Vui lòng nhập lại mật khẩu"),
     phoneNumber: Yup.string()
    .required("Số điện thoại là bắt buộc")
    .matches(/^\d{10,11}$/, "Số điện thoại phải có 10 đến 11 chữ số"),
});
