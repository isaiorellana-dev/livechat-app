"use client"
import { useEffect, useRef, useState } from "react"
import { loadingT, wsStatusT } from "@/types/strings"
import { message } from "@/types/api"
import { PENDING, OFFLINE_STATE, SUCCESS } from "@/constants/strings"
import useMessages from "@/api/hooks/useMessages"
import { REJECTED } from "../../constants/strings"
import Message from "./components/Message"
import { gsap } from "gsap"
import { messagesObserver } from "@/utils/observerAnimator"

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
  const { messages, loading, ws } = chatState
  const { getMessages } = useMessages()
  const messageContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    getMessages()
      .then((res) => {
        setChatState({
          ...chatState,
          messages: res,
          loading: SUCCESS,
        })
      })
      .catch(() => {
        setChatState({
          ...chatState,
          loading: REJECTED,
        })
      })
  }, [])

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight
    }

    if (messageContainerRef.current !== null) {
      const childrens = messageContainerRef.current.childNodes
      for (let index = 0; index < childrens.length; index++) {
        const element = childrens[index]
        if (element instanceof Element) {
          messagesObserver.observe(element)
        }
      }
    }
  }, [chatState.messages])

  return (
    <main className="relative flex-grow flex flex-col items-center justify-between">
      <div
        className="w-full max-w-xl h-screen overflow-y-scroll overflow-x-hidden flex flex-col items-center"
        ref={messageContainerRef}
      >
        {loading === SUCCESS &&
          messages.map((m, i) => <Message key={m.id} index={i} message={m} />)}
      </div>
    </main>
  )
}
