// loading states
export const NONE = "none" as const
export const PENDING = "pending" as const
export const REJECTED = "rejected" as const
export const SUCCESS = "success" as const
// error messages
export const INTERNAL_ERR = "internal server error"
export const NICKNAME_ERR = "nickname in use"
export const CREDENTIALS_ERR = "bad credentials"
export const UNKNOWN_ERR = "unknown error"
export const BAD_REQUEST = "bad request"
// ws states
export const OFFLINE_STATE = "OFFLINE_STATE" as const
export const ONLINE_STATE = "ONLINE_STATE" as const
// redux
export const AUTH_SLICE_NAME = "auth" as const
export const USER_SLICE_NAME = "user" as const
