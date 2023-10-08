import * as yup from "yup"

export const validations = {
  nickname: yup
    .string()
    .matches(/^\w+$/, {
      message: "Invalid nickname",
    })
    .lowercase("Please enter lowercase characters only.")
    .strict()
    .required("Nickname required"),
  pin: yup
    .string()
    .matches(/^\d+$/, {
      message: "Invalid pin",
    })
    .min(4)
    .max(16)
    .required("Pin required"),
}
