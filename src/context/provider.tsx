"use client"

import { Provider } from "react-redux"
import { store } from "./store"
import { childrenT } from "@/types/components"

export function ReduxProvider({ children }: childrenT) {
  return <Provider store={store}>{children}</Provider>
}
