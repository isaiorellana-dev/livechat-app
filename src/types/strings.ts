import {
  REJECTED,
  SUCCESS,
  PENDING,
  OFFLINE_STATE,
  ONLINE_STATE,
  NONE,
  INTERNAL_ERR,
  NICKNAME_ERR,
  CREDENTIALS_ERR,
  UNKNOWN_ERR,
  BAD_REQUEST,
} from "@/constants/strings"

export type loading =
  | typeof NONE
  | typeof PENDING
  | typeof REJECTED
  | typeof SUCCESS

export type wsStatusT = typeof OFFLINE_STATE | typeof ONLINE_STATE

export type loginError =
  | typeof NONE
  | typeof INTERNAL_ERR
  | typeof CREDENTIALS_ERR
  | typeof UNKNOWN_ERR

export type signUpError =
  | typeof NONE
  | typeof NICKNAME_ERR
  | typeof INTERNAL_ERR
  | typeof BAD_REQUEST
  | typeof UNKNOWN_ERR
