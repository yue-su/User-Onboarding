import * as yup from "yup"

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),

  first_name: yup
    .string()
    .min(3, "First name must be at least 3 characters")
    .required("First name is Required"),

  last_name: yup
    .string()
    .min(3, "Last name must be at least 3 characters")
    .required("Last name is Required"),

  password: yup
    .string()
    .min(6, "Must be at least 3 characters")
    .required("Password is required"),

  terms: yup.string().oneOf(["terms"], "Terms is required"),
})

export default formSchema
