"use client"
import useMessages from "@/api/hooks/useMessages"
import { stateReduxT } from "@/types/context"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useSelector } from "react-redux"

const MessageSender = () => {
  const [message, setMessage] = useState("")
  const { sendMessage } = useMessages()
  const auth = useSelector((state: stateReduxT) => state.auth)
  const router = useRouter()

  const handleSubmit = async () => {
    const validate = message.match(/^[^\s][a-zA-Z0-9\.,@:\?;\s]+[^\s]$/)
    if (validate != null) {
      try {
        const res = await sendMessage(message)
        if (res) {
          setMessage("")
        }
      } catch (error: any) {
        if (error.status) {
          switch (error.status) {
            case 401:
              alert("Invalid caracters")
              break
            case 500:
              alert("Something went wrong, try again later")
              break
            case 400:
              router.push("/chat")
              break
            default:
              alert("Something went wrong, try again later")
          }
        }
      }
    }
  }

  if (!auth.isAuthenticated) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          router.push("/login")
        }}
        className="w-full bg-slate-500 flex justify-between max-w-xl"
      >
        <input
          type="text"
          className="w-full text-slate-900 px-1.5 h-9"
          placeholder="Log in to send messages."
          readOnly
        />
        <button className="bg-cyan-500 p-0.5" type="submit">
          Login
        </button>
      </form>
    )
  }

  return (
    <form
      className="w-full max-w-xl flex"
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}
    >
      <input
        className="w-full bg-purple-200 text-purple-800 px-2"
        type="text"
        pattern="[A-Za-z0-9?@:,.;\s]+"
        title="Can't use that caracter"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="p-2 bg-purple-50 text-purple-950" type="submit">
        Send
      </button>
    </form>
  )
}

export default MessageSender
