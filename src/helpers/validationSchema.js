import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
  confirmPassword: Yup.string(),
});

export const signupValidationSchema = Yup.object().shape({
  first_name: Yup.string()
    .required("First name is required")
    .min(3, "First name must be at least 3 characters")
    .max(20, "First name must not exceed 20 characters"),
  last_name: Yup.string()
    .required("Last name is required")
    .min(3, "Last name must be at least 3 characters")
    .max(20, "Last name must not exceed 20 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
  confirmEmail: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("email"), null], "Confirm Email does not match"),
});
