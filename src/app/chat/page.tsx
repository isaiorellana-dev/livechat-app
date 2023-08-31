"use client"
import { useState } from "react"
import { loadingT, wsStatusT } from "@/types/strings"
import { message } from "@/types/api"
import { PENDING, OFFLINE_STATE } from "@/constants/strings"

type chatStateI = {
  loading: loadingT
  ws: wsStatusT
  messages: Array<message>
}

export default function Chat() {
  const [chatState, setChatState] = useState<chatStateI>({
    loading: PENDING,
    ws: OFFLINE_STATE,
    messages: [],
  })

  return (
    <main className="relative flex-grow flex flex-col items-center h-full justify-between"></main>
  )
}
