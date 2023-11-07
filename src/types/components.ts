import { message } from "./api"
import { loadingT } from "./strings"

export type messagePropsT = {
  message: message
  index: number
}

export type childrenT = {
  children: React.ReactNode
}

export type requestStatus<E> = {
  loading: loadingT
  error: E
}
