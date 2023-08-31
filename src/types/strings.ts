import {
  REJECTED,
  SUCCESS,
  PENDING,
  OFFLINE_STATE,
  ONLINE_STATE,
} from "@/constants/strings"

export type loadingT = typeof PENDING | typeof REJECTED | typeof SUCCESS
export type wsStatusT = typeof OFFLINE_STATE | typeof ONLINE_STATE
