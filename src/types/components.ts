import { message } from "./api"
import { loading } from "./strings"

export type messagePropsT = {
  message: message
  index: number
}

export type childrenT = {
  children: React.ReactNode
}

export type requestStatus<E> = {
  loading: loading
  error: E
}
