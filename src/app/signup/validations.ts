import * as yup from "yup"

export const validations = {
  nickname: yup
    .string()
    .matches(/^[a-z]+$/, {
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
  confirmPin: yup
    .string()
    .oneOf([yup.ref("pin")], "Pins do not match")
    .required("Please confirm the pin"),
}
