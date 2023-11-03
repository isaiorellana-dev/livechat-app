"use client"
import { useEffect, useRef, useState } from "react"
import { loading, wsStatusT } from "@/types/strings"
import { message } from "@/types/api"
import {
  PENDING,
  OFFLINE_STATE,
  SUCCESS,
  ONLINE_STATE,
} from "@/constants/strings"
import useMessages from "@/api/hooks/useMessages"
import { REJECTED } from "../../constants/strings"
import Message from "./components/Message"
import { messagesObserver } from "@/utils/observerAnimator"
import LoadingMessages from "./components/LoadingMessages"
import ErrorMessages from "./components/ErrorMessages"
import MessageSender from "./components/MessageSender"

type chatStateI = {
  loading: loading
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

    let URL = ""

    if (process.env.NEXT_PUBLIC_WS_URL) {
      URL = process.env.NEXT_PUBLIC_WS_URL

      const socket = new WebSocket(URL)

      socket.onopen = () => {
        setChatState({ ...chatState, ws: ONLINE_STATE })
      }
      socket.onmessage = (event) => {
        const mensaje = event.data

        setChatState({
          ...chatState,
          messages: [...messages, JSON.parse(mensaje)],
        })
      }
      socket.onclose = () => {
        setChatState({ ...chatState, ws: OFFLINE_STATE })
      }
      return () => {
        socket.close()
      }
    }
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
        if (element instanceof Element && messagesObserver() !== undefined) {
          messagesObserver()?.observe(element)
        }
      }
    }
  }, [chatState.messages])

  return (
    <main className="relative flex-grow flex flex-col items-center justify-between">
      <div
        style={{ height: "calc(100vh - 80px)" }}
        className="w-full max-w-xl h-screen overflow-y-scroll overflow-x-hidden flex flex-col items-center"
        ref={messageContainerRef}
      >
        {loading === PENDING && <LoadingMessages />}

        {loading === SUCCESS &&
          messages.map((m, i) => <Message key={i} index={i} message={m} />)}

        {loading === REJECTED && <ErrorMessages />}
      </div>
      <MessageSender />
    </main>
  )
}
